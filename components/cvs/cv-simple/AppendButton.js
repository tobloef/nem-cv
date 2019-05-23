import BaseComponent from "../../BaseComponent.js";

export default class AppendButton extends BaseComponent {
    static observedAttributes = [];
    usedComponents = [];

    // language=HTML
    get html() {
        return `
            <button id="button">+</button>
        `;
    }

    script = () => {
        const button = this.shadowRoot.getElementById("button");
        button.addEventListener("click", () => {
            if (this.onAppend == null) {
                return;
            }
            const redCheckbox = this.shadowRoot.getElementById("red-checkbox");
            const attributes = {};
            if (redCheckbox.checked) {
                attributes.color = "red";
            }
            this.onAppend(attributes);
        });
    }

    externalStyles = [];

    // language=CSS
    get style() {
        return `
            button {
                
                --dia: 1.4em;
                border: 2px solid black;
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
