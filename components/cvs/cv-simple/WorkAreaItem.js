import BaseComponent from "../../BaseComponent.js";

export default class WorkAreaItem extends BaseComponent {
    static observedAttributes = [];
    usedComponents = [];

    // language=HTML
    get html() {
        return `
            <span>Some item</span>
        `;
    }
}
