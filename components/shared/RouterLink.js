import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js";

export default class RouterLink extends BaseComponent {
    static observedAttributes = [
        "href"
    ];

    get html() {
        return `<a href="${Router.prefix + this.href}"><slot></slot></a>`;
    };

    script = () => {
        const a = this.shadowRoot.querySelector("a");
        a.addEventListener("click", evt => {
            evt.preventDefault();
            Router.navigate(this.href);
            return false;
        });
    }
}
