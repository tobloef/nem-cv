import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js";

export default class RouterLink extends BaseComponent {
    static observedAttributes = [
        "href"
    ];

    get html() {
        let url = this.href;
        if (this.href !== "/") {
            url = Router.prefix + url;
        }
        return `<a href="${url}"><slot></slot></a>`;
    };

    script = () => {
        //use the router rather than an actual link for internal links
        const a = this.shadowRoot.querySelector("a");
        a.addEventListener("click", evt => {
            evt.preventDefault();
            Router.navigate(Router.prefix + this.href);
            return false;
        });
    };

    get css() {
        // language=CSS
        return `
            a {
                text-decoration: none;
            }
        `
    }
}
