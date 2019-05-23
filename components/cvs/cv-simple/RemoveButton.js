import BaseComponent from "../../BaseComponent.js";

export default class RemoveButton extends BaseComponent {
    static observedAttributes = [];
    usedComponents = [];

    // language=HTML
    get html() {
        return `
            <button id="button">-</button>
        `;
    }

    script = () => {
        const button = this.shadowRoot.getElementById("button");
        button.addEventListener("click", () => {
            if (this.onRemove == null) {
                return;
            }
            this.onRemove();
        });
    }

    externalStyles = [];

    // language=CSS
    get css() {
        return `
            button {
                --dia: 2em;
                border: 5px solid black;
                border-radius: 50%;
                text-align: center;
                vertical-align: center;
                font-size: 1.5em;
                font-weight: bolder;
                height: var(--dia);
                width: var(--dia);
            }
        `
    };
}
