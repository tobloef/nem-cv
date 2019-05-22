import BaseComponent from "../BaseComponent.js";
import ColorHolder from "./ColorHolder.js";
import Router from "../../lib/Router.js";

export default class ColorList extends BaseComponent {
    static observedAttributes = [];

    templates = [
        {fontColor:"#373737", backgroundColor:"#F6F5EE", accentColor:"#E4E3D9"},
        {fontColor:"#222222", backgroundColor:"#E9E9E9", accentColor:"#595959"},
        {fontColor:"#222222", backgroundColor:"#E6F4F2", accentColor:"#2B62B4"},
        {fontColor:"#282828", backgroundColor:"#F6E5E4", accentColor:"#33B827"},
        {fontColor:"#cfcfcf", backgroundColor:"#39312D", accentColor:"#C00000"}
    ];

    usedComponents = [
        ColorHolder
    ];

    // language=HTML
    get html() {
        return `
            <div id="list"></div>
        `;
    }

    script = () => {
        this.empty();
        for (const item of this.templates) {
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
            
        `
    };
}
