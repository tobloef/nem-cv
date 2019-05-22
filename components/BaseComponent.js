"use strict";

import {classNameToElementName, kebabToCamelCase} from "../lib/string-utils.js";
import {resetCSSString, resetCSSStyleSheet} from "../lib/reset-css.js";

export default class BaseComponent extends HTMLElement {
    enableResetCSS = true;

    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this._defineUsedComponents();
        this._checkForUndefinedComponents();
        this.render();
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (oldValue !== newValue) {
            const propName = kebabToCamelCase(attrName);
            if (this.getAttribute(attrName) === "") {
                this[propName] = true;
            } else {
                this[propName] = this.getAttribute(attrName);
            }
            this.connectedCallback();
        }
    }

    empty() {
        this.shadowRoot.innerHTML = "";
    }

    render() {
        console.debug(`Updating DOM of ${this.constructor.name}`);
        let newHTML = "";
        if (this.externalStyles != null) {
            for (const externalStyle of this.externalStyles) {
                newHTML += `<link rel="stylesheet" href="${externalStyle}">`;
            }
        }
        if (this.enableResetCSS) {
            this.shadowRoot.adoptedStyleSheets = [resetCSSStyleSheet];
        }
        if (this.style != null) {
            newHTML += `<style>${this.style}</style>`;
        }
        newHTML += this.html;

        this.shadowRoot.innerHTML = newHTML;
        if (this.script != null) {
            this.script();
        }
    }

    getContent() {
        let obj = {};
        for (const child of this.shadowRoot.children) {

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