import BaseComponent from "../../BaseComponent.js";
import paths from "../../../lib/constants/paths.js";

export default class ListButton extends BaseComponent {
    static observedAttributes = [
        "icon",
        "diameter"
    ];

    // language=HTML
    get html() {
        return `
            <img id="button" part="button" src="${paths[this.icon]}"></button>
        `;
    }

    script = () => {
        //Add event listener to perform assigned function when clicked
        const button = this.shadowRoot.getElementById("button");
        button.addEventListener("click", () => {
            if (this.onClick == null) {
                return;
            }
            this.onClick();
        });
    };

    // language=CSS
    get css() {
        return `
            #button{
                --dia: ${this.diameter || "2em"};
                height: var(--dia);
                width: var(--dia);
                border: none;
                background: none;
                cursor: pointer;
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
