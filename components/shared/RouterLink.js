import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js";

export default class RouterLink extends BaseComponent {
    static observedAttributes = [
        "href",
        "new-tab"
    ];

    get html() {
        let url = this.href;
        if (this.href !== "/") {
            url = Router.prefix + url;
        }
        return `<a href="${url}" ${this.newTab ? "target='_blank' rel='noopener noreferrer'" : ""}>
          <slot></slot>
        </a>`;
    };

    script = () => {
        // Use the router rather than an actual link for internal links
        const a = this.shadowRoot.querySelector("a");
        a.addEventListener("click", e => {
            if (!this.newTab) {
                e.preventDefault();
                Router.navigate(this.href);
                return false;
            }
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
