"use strict";

import {classNameToElementName, kebabToCamelCase} from "../lib/string-utils.js";
import {resetCSSString, resetCSSStyleSheet} from "../lib/reset-css.js";
import {stringToStyleSheet} from "../lib/stylesheet-utils.js";

export default class BaseComponent extends HTMLElement {
    static _template = null;
    static _colors = null;

    enableResetCSS = true;

    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this._defineUsedComponents();
        this._checkForUndefinedComponents();
        this.render();
        this.updateStyles();
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (oldValue !== newValue) {
            const propName = kebabToCamelCase(attrName);
            if (this.getAttribute(attrName) === "") {
                this[propName] = true;
            } else {
                this[propName] = this.getAttribute(attrName);
            }
        }
    }

    empty() {
        this.shadowRoot.innerHTML = "";
    }

    render() {
        console.debug(`Rendering DOM of ${this.constructor.name}`);
        this.shadowRoot.innerHTML = this.html;
        if (this.script != null) {
            this.script();
        }
    }

    updateStyles() {
        console.debug(`Updating styles of ${this.constructor.name}`);
        const styleSheets = [];
        if (this.enableResetCSS != null) {
            styleSheets.push(resetCSSStyleSheet);
        }
        if (BaseComponent.colors != null) {
            styleSheets.push(BaseComponent.colors);
        }
        if (BaseComponent.template != null) {
            styleSheets.push(BaseComponent.template);
        }
        if (this.css != null) {
            styleSheets.push(stringToStyleSheet(this.css));
        }
        this.shadowRoot.adoptedStyleSheets = styleSheets;
    }

    getContent() {
        let obj = {};
        for (const child of this.shadowRoot.children) {
            const contentKey = child.getAttribute("content-key");
            if (contentKey != null) {

            }
        }
    }

    static get template() {
        return BaseComponent._template;
    }

    static set template(value) {
        if ((typeof value) === "string") {
            BaseComponent._template = stringToStyleSheet(value);
        } else {
            BaseComponent._template = value;
        }
    }

    static get colors() {
        return BaseComponent._colors;
    }

    static set colors(value) {
        if ((typeof value) === "string") {
            BaseComponent._colors = stringToStyleSheet(value);
        } else {
            BaseComponent._colors = value;
        }
    }

    _defineUsedComponents() {
        if (this.usedComponents == null) {
            return;
        }
        for (const component of this.usedComponents) {
            component.define();
        }
    }

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
    }

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
