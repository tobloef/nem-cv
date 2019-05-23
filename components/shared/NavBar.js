import BaseComponent from "../BaseComponent.js";

export default class NavBar extends BaseComponent {
    static observedAttributes = ["transparent"];

    get html() {
        // language=HTML
        return ` <nav><img class="logo" src="/img/logo_white.svg"></img></nav>`;
    }

    get css() {
        // language=CSS
        return `
            nav {
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
