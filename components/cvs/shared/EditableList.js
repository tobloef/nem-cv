import BaseComponent from "../../BaseComponent.js";

export default class EditableList extends BaseComponent {
    static observedAttributes = [
        "item-component",
        "starting-amount",
        "separator",
        "item-attributes",
        "button-diameter",
        "name"
    ];

    get html() {
        return `
            <div class="container" part="container">
                <ul id="list" part="list"></ul>
                <div class="button-holder" part="buttons">
                    <slot name="append-button" part="button"></slot>
                    <slot name="remove-button" part="button"></slot>
                </div>
            </div>
        `;
    };

    script = () => {
        // Add the append item button
        const slot = this.shadowRoot.querySelector(`slot[name="append-button"]`);
        const appendButton = (slot.assignedNodes() || [])[0];
        if (appendButton != null) {
            appendButton.onClick = this.addItem;
        }

        // Add the Remove item button
        const slot2 = this.shadowRoot.querySelector(`slot[name="remove-button"]`);
        const removeButton = (slot2.assignedNodes() || [])[0];
        if (appendButton) {
            removeButton.onClick = this.remove;
        }

        //if startingAmount is set, insert the given amount of items
        for (let i = 0; i < (this.startingAmount || 0); i++) {
            this.addItem();
        }

        //if the page is not supposed to be editable, remove the buttons again. Due to some quirks with slots, this is easier to do than prevent them from being made.
        if (!BaseComponent.editMode) {
            const buttonHolder = this.shadowRoot.querySelector(".button-holder");
            buttonHolder.parentNode.removeChild(buttonHolder);
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
        // Insert
        const li = document.createElement("li");
        li.appendChild(newChild);
        list.appendChild(li);
        return newChild;
    };

    remove = () => {
        //find the list, and return if it is already empty
        const list = this.shadowRoot.getElementById("list");
        if (list.childNodes.length === 0) {
            return;
        }
        //remove the last element, along with the seperator if it is present.
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

    //inserts given content into the list
    setContent = (content) => {
        this.removeAll();
        for (const item of content) {
            const element = this.addItem();
            if (element != null) {
                element.setContent(item);
            }
        }
    };

    //check if the list itself is valid
    validate = () => {
        const list = this.shadowRoot.getElementById("list");
        if (list.childNodes.length === 0) {
            if (this.name == null) {
                return `En listes indhold er tomt.`;
            } else {
                return `Ingen ${this.name.toLowerCase()} tilføjet.`;
            }
        } else {
            return super.validate();
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
