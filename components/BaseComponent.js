import {classNameToElementName, kebabToCamelCase} from "../lib/string-utils.js";
import {resetCSSStyleSheet} from "../lib/constants/reset-css.js";
import {colorsToStyleSheet, stringToStyleSheet} from "../lib/stylesheet-utils.js";
import templateStyles, {getDefaultTemplateId} from "../lib/constants/template-styles.js";
import {getDefaultColors} from "../lib/constants/colors.js";

export default class BaseComponent extends HTMLElement {
    static templateId = null;
    static colors = null;
    static editMode = false;

    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this._defineUsedComponents();
        this._checkForUndefinedComponents();
        this.render();
        this.updateStyles();
    };

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (oldValue !== newValue) {
            const propName = kebabToCamelCase(attrName);
            if (this.getAttribute(attrName) === "") {
                this[propName] = true;
            } else {
                this[propName] = this.getAttribute(attrName);
            }
        }
    };

    empty() {
        this.shadowRoot.innerHTML = "";
    };

    render() {
        console.debug(`Rendering DOM of ${this.constructor.name}`);
        this.shadowRoot.innerHTML = this.html;
        if (this.script != null) {
            this.script();
        }
    };

    updateStyles() {
        console.debug(`Updating styles of ${this.constructor.name}`);
        const styleSheets = [];
        // Reset CSS
        styleSheets.push(resetCSSStyleSheet);
        // Colors
        let colorScheme = BaseComponent.colors;
        if (colorScheme == null) {
            colorScheme = getDefaultColors();
        }
        const colorsStyleSheet = colorsToStyleSheet(colorScheme);
        if (colorsStyleSheet != null) {
            styleSheets.push(colorsStyleSheet);
        }
        // Template
        let templateId = BaseComponent.templateId;
        if (BaseComponent.templateId == null) {
            templateId = getDefaultTemplateId();
        }
        const template = templateStyles[templateId];
        if (template != null) {
            const templateStyleSheet = stringToStyleSheet(template.css);
            styleSheets.push(templateStyleSheet);
        }
        // Component style
        if (this.css != null) {
            const styleSheet = stringToStyleSheet(this.css);
            styleSheets.push(styleSheet);
        }
        // Set stylesheets
        this.shadowRoot.adoptedStyleSheets = styleSheets;
    };

    getContent(content) {
        this._recurseGetContent(content, this.shadowRoot);
    };

    _recurseGetContent(content, element) {
        console.debug("Setting content", content, "on children of", element);
        for (const child of element.children) {
            let newContent = null;
            const contentType = child.getAttribute("content-type");
            if (contentType != null) {
                switch (contentType) {
                    case "object":
                        newContent = {};
                        if (child.getContent != null) {
                            child.getContent(newContent);
                        } else {
                            this._recurseGetContent(newContent, child);
                        }
                        break;
                    case "array":
                        newContent = [];
                        if (child.getContent != null) {
                            child.getContent(newContent);
                        } else {
                            this._recurseGetContent(newContent, child);
                        }
                        break;
                    case "component":
                        newContent = child.getContent();
                        break;
                    default:
                        throw new Error(`Unsupported content-type ${contentType}`);
                }
                const contentKey = child.getAttribute("content-key");
                if (contentKey != null) {
                    const ignoreIfNull = child.getAttribute("content-ignore-if-null");
                    if (ignoreIfNull != null && newContent == null) {
                        continue;
                    }
                    content[contentKey] = newContent;
                } else if (content.push != null) {
                    content.push(newContent);
                }
            } else if (child.getContent != null) {
                child.getContent(content);
            } else {
                this._recurseGetContent(content, child);
            }
        }
    };

    setContent(content) {
        this._recurseSetContent(content, this.shadowRoot);
    };

    _recurseSetContent(content, element) {
        for (const child of element.children) {
            const key = child.getAttribute("content-key");
            if (key != null) {
                child.setContent(content[key]);
            } else {
                if (child.setContent != null) {
                    child.setContent(content);
                } else {
                    this._recurseSetContent(content, child);
                }
            }
        }
    };

    validate() {
        return this._recurseValidate(this.shadowRoot);
    };

    _recurseValidate = (element) => {
        for (const child of element.children) {
            let result = null;
            if (child.validate != null) {
                result = child.validate();
            } else {
                result = this._recurseValidate(child);
            }
            if (result != null) {
                if (child.updateValidationStyle != null) {
                    child.updateValidationStyle();
                }
                return result;
            }
        }
        return null;
    };

    _defineUsedComponents() {
        if (this.usedComponents == null) {
            return;
        }
        for (const component of this.usedComponents) {
            component.define();
        }
    };

    _checkForUndefinedComponents() {
        if (this.html == null) {
            return;
        }
        const matches = this.html.matchAll(/<([a-z]+-[a-z]*)[ \/].*>/g);
        if (matches == null) {
            return;
        }
        const tags = Array.from(matches).map(m => m[1]);
        for (const tag of tags) {
            if (customElements.get(tag) == null) {
                console.error(`${this.constructor.name} tried to use tag ${tag}, but it has not been defined yet.`);
            }
        }
    };

    static get elementName() {
        return classNameToElementName(this.name);
    }

    static define() {
        if (customElements.get(this.elementName) != null) {
            return;
        }
        customElements.define(this.elementName, this);
    }
}
