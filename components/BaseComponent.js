"use strict";

import {classNameToElementName} from "../lib/string-utils.js";

export default class BaseComponent extends HTMLElement {
    enableResetCSS = true;

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

    empty() {
        this.shadowRoot.innerHTML = "";
    }

    _updateDOM() {
        this.shadowRoot.innerHTML = "";
        if (this.externalStyles != null) {
            for (const externalStyle of this.externalStyles) {
                this.shadowRoot.innerHTML += ` <style>@import "${externalStyle}";</style>`;
            }
        }
        if (this.enableResetCSS) {
            this.shadowRoot.innerHTML += ` <style>@import "/css/reset.css";</style>`;
        }
        if (this.style != null) {
            this.shadowRoot.innerHTML += `<style>${this.style}</style>`;
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