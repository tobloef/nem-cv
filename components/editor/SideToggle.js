import BaseComponent from "../BaseComponent.js";
import {getPath} from "../../lib/paths.js";

export default class SideToggle extends BaseComponent {
    // Observe "open" and "closed" attributes s.t. both can be used
    static observedAttributes = [
        "open",
        "closed"
    ];

    // language=HTML
    get html() {
        return `<button></button>`;
    }

    script = () => {
        this.updateIcon();
    };

    updateIcon = () => {
        const button = this.shadowRoot.querySelector("button");
        if (this.open) {
            button.innerHTML = `<img src="${getPath("settings")}" alt="Åbn indstillinger">`;
        } else {
            button.innerHTML = `<img src="${getPath("arrow")}" alt="Luk indstillinger">`;
        }
    };

    toggle = () => {
        if (this.open) {
            this.removeAttribute("open");
            this.setAttribute("closed", "");
        } else {
            this.removeAttribute("closed");
            this.setAttribute("open", "");
        }
        this.updateIcon();
    }

    // language=CSS
    get css() {
        return `
            img {
                height: 50%;
                width: 50%;
            }

            button {
                width: 50px;
                height: 50px;
                box-shadow: 0 0 5px #aaa;
                /* flex to center image in button */
                display: flex;
                justify-content: center;
                align-items: center;
                /* Reset pesky button styling and color background*/
                padding: 0;
                border: 0;
                background-color: #F3F3F3;
                cursor: pointer;
            }

            button:hover {
                background-color: #fafafa;
            }

            /* Selector for desktop */
            /* makes button curvy on right side */
            @media (min-width: 550px) {
                button {
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                }
            }

            /* Selector for mobile */
            /* Sets curvature of button based on if it is */
            /* on left or right side of screen */
            @media (max-width: 550px) {
                :host([closed]) > button {
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                }

                :host([open]) > button {
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                }
            }
        `
    };
}
