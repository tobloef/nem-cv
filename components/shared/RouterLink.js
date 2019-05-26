import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js";

export default class RouterLink extends BaseComponent {
    static observedAttributes = [
        "href",
        "new-tab"
    ];

    static clickableChildren = [
        'a', 'custom-button', 'button'
    ];

    get html() {
        let url = this.href;
        if (this.href !== "/") {
            url = Router.prefix + url;
        }

        const tabindex = this.getFirstClickableChild() == undefined ? "0" : "-1";

        return `
            <a tabindex="${tabindex}"href="${url}" ${this.newTab ? "target='_blank' rel='noopener noreferrer'" : ""}>
                <slot></slot>
            </a>
        `;
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

        a.addEventListener('focus', evt => {
            const child = this.getFirstClickableChild();

            if(child != undefined && child !== evt.relatedTarget) {
                child.focus();
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

    getFirstClickableChild() {
        for(let child of this.children) {
            const name = child.tagName.toLowerCase();

            const tabIndex = child.getAttribute('tabindex');
            const hasManualTapIndex = !(tabIndex == null || tabIndex == "-1");

            if(RouterLink.clickableChildren.includes(name) || hasManualTapIndex) {
                return child;
            }
        }
        return undefined;
    }
}
