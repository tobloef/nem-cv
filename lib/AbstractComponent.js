export default class AbstractComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[attrName] = this.getAttribute(attrName);
            this._updateDom();
        }
    }

    connectedCallback() {
        this._updateDom();
    }

    _updateDom() {
        const {shadowRoot} = this;
        shadowRoot.innerHTML = `<style>${this.style}</style>`;
        shadowRoot.innerHTML += this.html;
        this.script();
    }
}
