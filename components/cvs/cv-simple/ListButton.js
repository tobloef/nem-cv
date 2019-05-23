import BaseComponent from "../../BaseComponent.js";
import {getIcon} from "../../../lib/icons.js";

export default class ListButton extends BaseComponent {
    static observedAttributes = [
        "icon"
    ];
    usedComponents = [];

    // language=HTML
    get html() {
        return `
            <img id="button" src="${getIcon(this.icon)}"></button>
        `;
    }

    script = () => {
        const button = this.shadowRoot.getElementById("button");
        button.addEventListener("click", () => {
            if (this.onClick == null) {
                return;
            }
            this.onClick();
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
