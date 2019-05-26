import BaseComponent from "../BaseComponent.js";
import CustomButton from '../shared/CustomButton.js';
import RouterLink from '../shared/RouterLink.js';
import Logo from "../shared/Logo.js";

export default class PageNotFound extends BaseComponent {
    usedComponents = [
        RouterLink, CustomButton, Logo
    ];

    get css() {
        return `
            :host {
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                font-family: 'Open Sans', sans-serif;
                text-align: center;
                padding: 10px;
            }

            h1 {
                font-size: 5em;
                font-weight: 100;
            }

            h2 {
                font-size: 2.5em;
                font-weight: 100;
            }

            router-link {
                margin: 20px 0px;
            }

            custom-button {
                font-size: 1.3em;
            }

            logo- {
                --max-width: 350px;
            }

            @media(min-width: 350px) {
                h1 {
                    font-size: 8em;
                }
            }

            @media(min-width: 600px) {
                h1 {
                    font-size: 15em;
                }

                h2 {
                    font-size: 4em;
                }

                custom-button {
                    font-size: 2em;
                }
            }
        `
    }

    get html() {
        return `
            <logo- color="black"></logo->
            <h1>404</h1>
            <h2>Siden findes ikke</h2>
            <router-link href="/">
                <custom-button label="Gå til forsiden">
                    Gå til forsiden
                </custom-button>
            </router-link>
        `;
    };
}
