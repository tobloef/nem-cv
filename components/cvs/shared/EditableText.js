import BaseComponent from "../../BaseComponent.js";
import {validateObject} from "../../../lib/validation.js";

export default class EditableText extends BaseComponent {
    node = null;

    static observedAttributes = [
        "placeholder",
        "element",
        "multiline",
        "validate-type",
        "name",
        "is-age",
        "content-key"
    ];

    // language=HTML
    get html() {
        return `
            <${this.element} 
                id="content" 
                class="empty-text"
                part="${this.contentKey}" 
                contenteditable=${BaseComponent.editMode}
                role="textbox" 
                aria-placeholder="${this.placeholder}" 
                data-placeholder="${this.placeholder}"
            >
                ${this.placeholder}
            </${this.element}>
        `;
    }

    onFocus = (e) => {
        this.node.classList.remove("empty-text");
        // Keeps the component from getting too small while the user hasn't written anything
        this.node.style.minWidth = this.node.getBoundingClientRect().width + "px";
        // If the text contains placeholder content, empty it
        if (this.node.innerText === this.placeholder) {
            this.node.innerText = "";
        }
        this.node.classList.remove("error");
    };

    focusOut = (e) => {
        // Allow the item to shrink if necessary
        this.node.style.minWidth = "0";
        // Replace the placeholder if needed
        if (this.node.innerText === "") {
            this.node.innerText = this.placeholder;
            this.node.classList.add("empty-text");
        }
        this.updateValidationStyle();
    };

    keyPress = (e) => {
        // Allows the item to shrink to fit content if the user has started typing.
        if (this.node.innerText !== "") {
            this.node.style.minWidth = "0";
        }
        if (e.key === "Enter" && !this.multiline) {
            e.preventDefault();
            this.node.blur();
        }
    };

    validate = () => {
        if (this.validateType == null || this.validateType === "") {
            return null;
        }
        const content = this.getContent();
        if (validateObject(content, this.validateType)) {
            return null;
        }
        if (this.name == null || this.name === "") {
            return "Et felt har en ugyldig værdi.";
        }
        return `Feltet "${this.name}" har en ugyldig værdi.`;
    };

    updateValidationStyle = () => {
        // Update styling to indicate if there is an error with the element
        if (this.validate() != null) {
            this.node.classList.add("error");
        } else {
            this.node.classList.remove("error");
        }
    };

    script = () => {
        this.node = this.shadowRoot.querySelector("#content");
        // if we are not editing, and the content of the component hasn't been set, remove placeholders
        if (!BaseComponent.editMode && this.node.innerText === this.placeholder) {
            this.placeholder = "";
            this.node.setAttribute("aria-placeholder", "");
            this.node.setAttribute("data-placeholder", "");
            this.node.innerText = "";

        }
        // Add event listernes
        this.node.addEventListener("focus", this.onFocus);
        this.node.addEventListener("focusout", this.focusOut);
        this.node.addEventListener("keypress", this.keyPress);
    };

    getContent = () => {
        const content = this.node.innerText;
        if (content === "") {
            return null;
        }
        if (content === this.placeholder) {
            return null;
        }
        if (this.isAge) {
            return parseInt(content);
        }
        return content;
    };

    setContent = (content) => {
        this.node.innerText = (content || this.placeholder);
        if (this.isAge && !this.node.innerText.endsWith(" år")) {
            this.node.innerText += " år";
        }
        if (this.node.innerText !== this.placeholder) {
            this.node.classList.remove("empty-text");
        }
    };

    // language=CSS
    get css() {
        return `
            .empty-text {
                color: var(--editable-empty-text-color);
            }
            :host {
                display: flex;
                align-items:center;
                ${BaseComponent.editMode ? "cursor: pointer;" : ""}
            }

            *[contenteditable="false"] {
                cursor: default;
            }
            
            .error {
                background: rgba(255, 0, 0, 0.15);
                text-decoration: underline;
                text-decoration-color: red;
            }
            
            h1 {
                font-family: var(--h1);
            }

            h2 {
                font-family: var(--h2);
            }
            
            p {
                font-family: var(--p);
            }
        `
    };
}
