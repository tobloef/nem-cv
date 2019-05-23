import BaseComponent from "../BaseComponent.js";
import {pascalToKebabCase} from "../../lib/string-utils.js";

export default class AppendableComponentList extends BaseComponent {
    itemAttributePrefix = "itemAttribute";

    static observedAttributes = [
        "item-component",
        "starting-amount",
        "separator",
        "item-attribute-experience-type"
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
        appendButton.onAppend = (attributes) => {
            const list = this.shadowRoot.getElementById("list");
            // Append separator
            if (this.separator && list.childNodes.length > 0) {
                list.appendChild(document.createTextNode(this.separator));
            }
            const newChild = document.createElement(this.itemComponent);
            // Add attributes based on the this component's item attributes.
            for (let prop in this) {
                if (
                    typeof prop === "string" &&
                    prop !== "itemAttributePrefix" &&
                    prop.startsWith(this.itemAttributePrefix)
                ) {
                    const attribute = pascalToKebabCase(prop.replace(this.itemAttributePrefix, ""));
                    newChild.setAttribute(attribute, this[prop]);
                }
            }
            // Set attributes based on the append button.
            for (const attribute in (attributes || {})) {
                newChild.setAttribute(attribute, attributes[attribute]);
            }
            newChild.setAttribute("part", "list-item");
            list.appendChild(newChild);
        };

        // Remove item button
        const slot2 = this.shadowRoot.querySelector(`slot[name="remove-button"`);
        const removeButton = (slot2.assignedNodes() || [])[0];
        removeButton.onRemove = () => {
            const list = this.shadowRoot.getElementById("list");
            if (list.childNodes.length === 0) {
                return;
            }
            this.removeLast(list);
            if (this.separator && list.childNodes.length > 0) {
                this.removeLast(list);
            }
        };
        for (let i = 0; i < (this.startingAmount || 0); i++) {
            appendButton.onAppend([])
        }
    };

    removeLast(list) {
        list.removeChild(list.childNodes[list.childNodes.length - 1]);
    }

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
