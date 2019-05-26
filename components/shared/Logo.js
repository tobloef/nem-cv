import BaseComponent from "../BaseComponent.js";
import RouterLink from "./RouterLink.js";
import paths from "../../lib/constants/paths.js";

export default class Logo extends BaseComponent {
    usedComponents = [
        RouterLink
    ];

    static observedAttributes = [
        "color"
    ];

    // language=HTML
    get html() {
        const path = paths[this.color == "black" ? "logo-black" : "logo-white"];

        return `
            <router-link href="/">
              <img class="logo" src="${path}" alt="Nem CV">
            </router-link>
        `;
    }

    // language=CSS
    get css() {
        return `
            :host {
                --max-width: 150px;
            }
            img {
                max-width: var(--max-width);
                width: 100%;
            }
        `
    }
}
