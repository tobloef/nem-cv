"use strict";

import {classNameToElementName} from "../lib/string-utils.js";

export default class BaseComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this._defineUsedComponents();
        this._updateDOM();
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[attrName] = this.getAttribute(attrName);
            this.connectedCallback();
        }
    }

    _updateDOM() {
        this.shadowRoot.innerHTML = "";
        if (this.style != null) {
            this.shadowRoot.innerHTML = `<style>${this.style}</style>`;
        }
        if (this.html) {
            this.shadowRoot.innerHTML += this.html;
        }
        if (this.script != null) {
            this.script();
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

    static define() {
        const elementName = classNameToElementName(this.name);
        if (customElements.get(elementName) != null) {
            return;
        }
        customElements.define(elementName, this);
    }
}