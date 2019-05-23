import BaseComponent from "../BaseComponent.js";

export default class AppendableComponentList extends BaseComponent {
    static observedAttributes = [
        "item-component"
    ];

    items = [];

    get html() {
        return `
            <div style="display: flex; flex-direction: column;">
                <ul id="list"></ul>
                <slot name="append-button"/>
            </div>
        `;
    };

    script = () => {
        const slot = this.shadowRoot.querySelector(`slot[name="append-button"]`);
        const appendButton = (slot.assignedNodes() || [])[0];
        appendButton.onAppend = (attributes) => {
            const newChild = document.createElement(this.itemComponent);
            for (const attribute in attributes) {
                newChild.setAttribute(attribute, attributes[attribute]);
            }
            this.items.push(newChild);
            this.render();
        };

        for (const item of this.items) {
            const list = this.shadowRoot.getElementById("list");
            list.appendChild(item);
        }
    }
}
