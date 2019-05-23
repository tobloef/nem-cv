import BaseComponent from "../../BaseComponent.js";

export default class RemoveButton extends BaseComponent {
    static observedAttributes = [];
    usedComponents = [];

    // language=HTML
    get html() {
        return `
            <img src="../../../img/minus-outline.svg" id="button"/> 
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
            #button{
                --dia: 1.5em;
                height: var(--dia);
                width: var(--dia);
                border: none;
                background: none;
            }
            #button:hover {

            }
            #button:active {
            }
        `
    };
}
