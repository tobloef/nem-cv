import BaseComponent from "../BaseComponent.js";
import ColorHolder from "./ColorHolder.js";
import {templates} from "../../constants/editor-definitions.js";

export default class ColorList extends BaseComponent {
    static observedAttributes = [];

    usedComponents = [
        ColorHolder
    ];

    // language=HTML
    get html() {
        return ``;
    }

    script = () => {
        this.empty();
        for (const item of templates) {
            const element = document.createElement(ColorHolder.elementName);
            element.setAttribute("font-color", item.fontColor);
            element.setAttribute("background-color", item.backgroundColor);
            element.setAttribute("accent-color", item.accentColor);
            this.shadowRoot.appendChild(element);
        }
    };

    externalStyles = [];

    // language=CSS
    get style() {
        return `
            :host {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
            
            :host(.vertical) {
                flex-direction: column;
            }
            
            @media(max-width: 340px) {
                color-holder p {
                    font-size: 2em;
                }
                
                color-holder #outer {
                    width: 3em;
                    height: 3em;
                }
            }
        `
    };
}
