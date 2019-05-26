import {classNameToElementName, kebabToCamelCase} from "../lib/string-utils.js";
import {resetCSSString} from "../lib/constants/reset-css.js";
import {colorsToCSS, stringToStyleSheet} from "../lib/stylesheet-utils.js";
import templateStyles, {getDefaultTemplateId} from "../lib/constants/template-styles.js";
import {getDefaultColors} from "../lib/constants/colors.js";

// Component capable of building itself as an HTMLElement
// from the formatted strings 'html' and 'css', as well as running 'script'
export default class BaseComponent extends HTMLElement {
    static templateId = null;
    static colors = null;
    static editMode = false;

    _elementName = null;

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

    // Called from the browser when an HTML attribute
    // is changed on a component.
    // Here, this causes a class property of the same name
    // to be updated, s.t. the information can be utilized proper.
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

    // Method for stitching of inner HTML and running scripts
    render() {
        console.debug(`Rendering DOM of ${this.constructor.name}`);
        this.shadowRoot.innerHTML = this.html;
        if (this.script != null) {
            console.debug(`Running script of ${this.constructor.name}`);
            this.script();
            console.debug(`Finished running script of ${this.constructor.name}`);
        }
        console.debug(`Finished rendering DOM of ${this.constructor.name}`);
    };

    updateStyles() {
        console.debug(`Updating styles of ${this.constructor.name}`);
        let styleSheets = "";
        // Reset CSS
        styleSheets += resetCSSString;
        // Colors
        let colorScheme = BaseComponent.colors;
        if (colorScheme == null) {
            colorScheme = getDefaultColors();
        }
        if (colorScheme != null) {
            styleSheets += colorsToCSS(colorScheme);
        }
        // Template
        let templateId = BaseComponent.templateId;
        if (BaseComponent.templateId == null) {
            templateId = getDefaultTemplateId();
        }
        const template = templateStyles[templateId];
        if (template != null) {
            styleSheets += template;
        }
        // Component style
        if (this.css != null) {
            styleSheets += this.css;
        }
        // Set stylesheets
        this.shadowRoot.adoptedStyleSheets = [stringToStyleSheet(styleSheets)];
        console.debug(`Finished updating styles of ${this.constructor.name}`);
    };

    getContent(content) {
        this._recurseGetContent(content, this.shadowRoot);
    };

    // Recursive inner call for getting CV information from CV.
    // Each element knows what part of the CV object they are responsible for.
    _recurseGetContent(content, element) {
        console.debug("Setting content", content, "on children of", element, "...");
        for (const child of element.children) {
            let newContent = null;
            // Get and switch on content type
            const contentType = child.getAttribute("content-type");
            if (contentType != null) {
                switch (contentType) {
                    // Content is supposed to be an object, and an object is therefore
                    // delegated to be filled with information.
                    // Useful for 'experiences' in CV.
                    case "object":
                        newContent = {};
                        if (child.getContent != null) {
                            child.getContent(newContent);
                        } else {
                            this._recurseGetContent(newContent, child);
                        }
                        break;
                    // Content is supposed to be an array, and elements of any children will
                    // therefore be added to this array.
                    case "array":
                        newContent = [];
                        if (child.getContent != null) {
                            child.getContent(newContent);
                        } else {
                            this._recurseGetContent(newContent, child);
                        }
                        break;
                    // Content is some key-value pair, and value is obtained
                    case "component":
                        newContent = child.getContent();
                        break;
                    default:
                        throw new Error(`Unsupported content-type ${contentType}`);
                }
                // Add obtained value as 'key' to current object/array
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
        console.debug("Finished setting content", content, "on children of", element, "...");
    };

    setContent(content) {
        this._recurseSetContent(content, this.shadowRoot);
    };

    // Inner recursive call, where children are given information
    // and from it can set their own values
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

    // Go through and try to validate every information-storing component
    validate() {
        return this._recurseValidate(this.shadowRoot);
    };

    // Inner recursive call, where children are explored and validated
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

    // Check for undefined components, s.t. errors can be caught
    // when building components.
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
