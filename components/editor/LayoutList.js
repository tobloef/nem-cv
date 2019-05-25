import BaseComponent from "../BaseComponent.js";
import LayoutDescriptor from "./LayoutDescriptor.js";
import templates from "../../lib/constants/templates.js";

export default class LayoutList extends BaseComponent {
    usedComponents = [
        LayoutDescriptor
    ];

    script = () => {
        this.empty();
        for (const key in templates) {
            const template = templates[key];
            const element = document.createElement(LayoutDescriptor.elementName);
            element.setAttribute("template-id", key);
            element.setAttribute("name", template.name);
            element.setAttribute("image", template.image);
            element.setAttribute("description", template.description);
            this.shadowRoot.appendChild(element);
        }
    };

    // language=CSS
    get css() {
        return `
            @media(max-width: 700px) {
                :host(.resizing)>layout-descriptor:not(:last-child) {
                    border-bottom: 1px solid #aaa;
                    padding-bottom: 2em;
                }

                :host(.resizing)>layout-descriptor:not(:first-child) {
                    padding-top: 3em;
                }
            }

            @media(min-width: 700px) {
                :host(.resizing) {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                }

                :host(.resizing)>layout-descriptor:nth-child(n-2) {
                    margin-bottom: 4em;
                }

                :host(.resizing)>layout-descriptor:nth-child(2n-1) {
                    grid-column: 1 / 2;
                    margin-right: 2em;
                }

                :host(.resizing)>layout-descriptor:nth-child(2n) {
                    grid-column: 0 / 1;
                    margin-left: 2em;
                }
            }
            
            @media(min-width: 1200px) {
                :host(.resizing) {
                    max-width: 1200px;
                }
            }

            :host {
                display: flex;
                flex-direction: column;
            }
            
            :host(.flex-list)>layout-descriptor:not(:first-child) {
                padding-top: 3em;
            }

            :host(.flex-list)>layout-descriptor:not(:last-child) {
                border-bottom: 1px solid #aaa;
                padding-bottom: 2em;
            }
        `
    };
}
