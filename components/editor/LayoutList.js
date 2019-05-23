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
        return ``;
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
    get css() {
        return `
            @media(max-width: 700px) {
                :host(.resizing) {
                    display: flex;
                    flex-direction: column;
                }
                
                :host(.resizing)>layout-descriptor:not(:last-child) {
                    border-bottom: 1px solid #aaa;
                }
            }

            @media(min-width: 700px) {
                :host(.resizing) {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                }

                :host(.resizing)>layout-descriptor:nth-child(2n-1) {
                    grid-column: 0 / 1;
                }

                :host(.resizing)>layout-descriptor:nth-child(2n) {
                    grid-column: 1 / 2;
                }
            }
            
            @media(min-width: 1200px) {
                :host(.resizing) {
                    max-width: 1200px;
                }
            }

            :host(.flex-list) {
                display: flex;
                flex-direction: column;
            }

            :host(.flex-list)>layout-descriptor:not(:last-child) {
                border-bottom: 1px solid #aaa;
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
