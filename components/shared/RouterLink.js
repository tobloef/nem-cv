import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js";

export default class RouterLink extends BaseComponent {
    static observedAttributes = [
        "href"
    ];

    get html() {
        const url = Router.prefix + this.href;
        return `<a href="${url}"><slot></slot></a>`;
    };

    script = () => {
        const a = this.shadowRoot.querySelector("a");
        a.addEventListener("click", evt => {
            evt.preventDefault();
            Router.navigate(Router.prefix + this.href);
            return false;
        });
    }
}
