import BaseComponent from "../../BaseComponent.js";
import {getPath} from "../../../lib/paths.js";

export default class AppendButton extends BaseComponent {
    static observedAttributes = [];
    usedComponents = [];

    // language=HTML
    get html() {
        return `
            <img id="button" src="${getPath("add")}"></button>
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
            #button{
                --dia: 2em;
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
