import BaseComponent from "../../BaseComponent.js";

export default class AppendButton extends BaseComponent {
    static observedAttributes = [];
    usedComponents = [];

    // language=HTML
    get html() {
        return `
            <button id="button"></button>
        `;
    }

    script = () => {
        const button = this.shadowRoot.getElementById("button");
        button.addEventListener("click", () => {
            if (this.onAppend == null) {
                return;
            }

            const attributes = {};
            this.onAppend(attributes);
        });
    }

    externalStyles = [];

    // language=CSS
    get css() {
        return `
            button {
                --dia: 2em;
                height: var(--dia);
                width: var(--dia);
                background: url("../../../img/add-outline.svg");
            }
        `
    };
}
