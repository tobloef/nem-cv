import BaseComponent from "../../BaseComponent.js";

export default class AppendableComponentList extends BaseComponent {
    static observedAttributes = [
        "item-component",
        "starting-amount",
        "separator",
        "item-attributes"
    ];

    get html() {
        return `
            <div class="container" part="container">
                <ul id="list" part="list"></ul>
                <slot name="append-button" part="button"></slot>
                <slot name="remove-button" part="button"></slot>
            </div>
        `;
    };

    script = () => {
        // Append item button
        const slot = this.shadowRoot.querySelector(`slot[name="append-button"]`);
        const appendButton = (slot.assignedNodes() || [])[0];
        appendButton.onClick = this.addItem;

        // Remove item button
        const slot2 = this.shadowRoot.querySelector(`slot[name="remove-button"`);
        const removeButton = (slot2.assignedNodes() || [])[0];
        removeButton.onClick = this.remove;
        for (let i = 0; i < (this.startingAmount || 0); i++) {
            this.addItem();
        }
    };

    addItem = (attributes) => {
        const list = this.shadowRoot.getElementById("list");
        // Append separator
        if (this.separator && list.childNodes.length > 0) {
            list.appendChild(document.createTextNode(this.separator));
        }
        const newChild = document.createElement(this.itemComponent);
        // Add attributes based on the this component's item attributes.
        if (this.itemAttributes != null) {
            for (const attribute in this.itemAttributes) {
                //const attributeName = camelToKebabCase(attribute);
                newChild.setAttribute(attribute, this.itemAttributes[attribute]);
            }
        }
        // Set attributes based on the append button.
        for (const attribute in (attributes || {})) {
            newChild.setAttribute(attribute, attributes[attribute]);
        }
        newChild.setAttribute("part", "list-item");
        list.appendChild(newChild);
        return newChild;
    };

    remove = () => {
        const list = this.shadowRoot.getElementById("list");
        if (list.childNodes.length === 0) {
            return;
        }
        this.removeLast();
        if (this.separator && list.childNodes.length > 0) {
            this.removeLast();
        }
    };

    removeLast = () => {
        const list = this.shadowRoot.getElementById("list");
        list.removeChild(list.childNodes[list.childNodes.length - 1]);
    };

    removeAll = () => {
        const list = this.shadowRoot.getElementById("list");
        list.innerHTML = "";
    };

    setContent = (content) => {
        this.removeAll();
        for (const item of content) {
            const element = this.addItem();
            element.setContent(item);
        }
    };

    // language=CSS
    get css() {
        return `
            .container {
                display: flex;
                flex-direction: column;
            }            
        `
    }
}
