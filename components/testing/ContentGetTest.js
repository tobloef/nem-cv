import BaseComponent from "../BaseComponent.js";

export default class ContentGetTest extends BaseComponent {
    usedComponents = [];

    get html() {
        return `
            <p contenteditable="true"><slot id="content"></slot></p>           
        `;
    };

    getContent = () => {
        return this.shadowRoot.getElementById("content").assignedNodes()[0].textContent;
    }
}
