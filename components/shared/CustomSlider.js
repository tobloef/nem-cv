import BaseComponent from "../BaseComponent.js";

export default class CustomSlider extends BaseComponent
{
    get html() {
        // language=HTML
        return `
            <button><slot></slot></button>
        `;
    }

    get style() {
        // language=CSS
        return `

        `;
    };

    script(){
        
    }
}
