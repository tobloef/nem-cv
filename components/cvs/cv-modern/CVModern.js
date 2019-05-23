import BaseComponent from "../../BaseComponent.js";

export default class CVModern extends BaseComponent {
    static observedAttributes = [];

    usedComponents = [];

    // language=HTML
    get html() {
        return `
            <h1><slot></slot></h1>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            
        `;
    }

    script = () => {

    };

    externalStyles = [];

    // language=CSS
    get style() {
        return `
            
        `
    };
}
