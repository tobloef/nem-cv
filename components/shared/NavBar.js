import BaseComponent from "../BaseComponent.js";
import CustomButton from "./CustomButton.js";
import Router from "../../lib/Router.js";

export default class NavBar extends BaseComponent {
    static observedAttributes = [
        "transparent"
    ];

    usedCoponents = [
        CustomButton
    ];

    get html() {
        // language=HTML
        return ` 
            <nav>
                <slot></slot>
            </nav>
        `;
    }

    script = () => {
        const button = this.shadowRoot.querySelector("custom-button");
        if (this.noButton == null) {
            if (this.buttonHref != null) {
                button.addEventListener("click", (evt) => {
                    evt.preventDefault();
                    Router.navigate(Router.prefix + this.buttonHref);
                });
            }
        } else {
            button.style.display = "none";
        }
    };

    get css() {
        // language=CSS
        return `
            :host {
                --padding-y: 5px;
            }

            ::slotted(div) {
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
            }
            
            div {
                display: inline-block;
                text-decoration: none;
                height: auto;
            }
            
            custom-button {
                font-family: 'Open Sans', sans-serif;
                font-size: 1.2em;
            }
            
            @media(min-width: 1024px) {
                custom-button {
                    font-size: 1.5em;
                }
            }
            
            nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-height: 70px;
                padding: 20px;
                background-color: #252525;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                transition: 400ms ease-in-out background-color;
            }

            nav .logo {
                max-width: 120px;
            }

            :host([transparent]) nav {
                background-color: transparent;
                box-shadow: none;
            }
        `;
    };
}
