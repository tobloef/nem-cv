import BaseComponent from "../BaseComponent.js";
import {getPath} from "../../lib/paths.js";
import RouterLink from "./RouterLink.js";

export default class Logo extends BaseComponent {
    usedComponents = [
        RouterLink
    ];

    // language=HTML
    get html() {
        return `
            <router-link href="/">
              <img class="logo" src="${getPath("logo-white")}" alt="Nem CV" style="width: 150px;">
            </router-link>
        `;
    }
}
