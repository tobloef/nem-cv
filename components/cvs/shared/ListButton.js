import BaseComponent from "../../BaseComponent.js";
import {getPath} from "../../../constants/paths.js";

export default class ListButton extends BaseComponent {
    static observedAttributes = [
        "icon",
        "diameter"
    ];
    usedComponents = [];

    // language=HTML
    get html() {
        return `
            <img id="button" part="button" src="${getPath(this.icon)}"></button>
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
                --dia: ${this.diameter || "2em"};
                height: var(--dia);
                width: var(--dia);
                border: none;
                background: none;
            }
            #button:hover {
              transform: scale(1.2);
                cursor: pointer;
            }
            #button:active {
            }
        `
    };
}
