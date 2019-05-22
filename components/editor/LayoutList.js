import BaseComponent from "../BaseComponent.js";
import {layouts} from "../../constants/editor-definitions.js";
import LayoutDescriptor from "./LayoutDescriptor.js";

export default class LayoutList extends BaseComponent {
    static observedAttributes = [

    ];

    usedComponents = [
        LayoutDescriptor
    ];

    // language=HTML
    get html() {
        return `
            <div></div>
        `;
    }

    script = () => {
        this.empty();
        for (const key in layouts) {
            const item = layouts[key];
            const element = document.createElement(LayoutDescriptor.elementName);
            element.setAttribute("theme-id", key);
            element.setAttribute("name", item.name);
            element.setAttribute("image", item.image);
            element.setAttribute("description", item.description);
            element.onSelect = this.handleSelect;
            element.onExample = this.handleExample;
            this.shadowRoot.appendChild(element);
        }
    };

    externalStyles = [];

    // language=CSS
    get style() {
        return `
            @media(max-width: 700px) {
                :host {
                    display: flex;
                    flex-direction: column;
                }

                layout-descriptor:nth-child(n):not(:last-child) {
                    border-bottom: 1px solid #aaa;
                }
            }

            @media(min-width: 700px) {
                :host {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                }

                layout-descriptor:nth-child(2n-1) {
                    grid-column: 0 / 1;
                }

                layout-descriptor:nth-child(2n) {
                    grid-column: 1 / 2;
                }
            }
        `
    };

    handleExample(themeId) {
        console.log("Showing example for:", themeId);
    };

    handleSelect(themeId) {
        console.log("Selecting:", themeId);
    };
}
