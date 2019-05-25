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
    ];

    // language=HTML
    get html() {
        return `
            <${this.element} 
                id="content" 
                class="empty-text"
                part="inner" 
                contenteditable=${BaseComponent.editMode}
                role="textbox" 
                aria-placeholder=${this.placeholder} 
                data-placeholder=${this.placeholder}
            >
                ${this.placeholder}
            </${this.element}>
        `;
    }

    selectTextInNode = () => {
        if (document.body.createTextRange) {
            const range = document.body.createTextRange();
            range.moveToElementText(this.node);
            range.select();
        } else if (window.getSelection) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(this.node);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            console.warn("Could not select text in node: Unsupported browser.");
        }
    };

    onFocus = (e) => {
        this.node.classList.remove("empty-text");
        this.node.style.minWidth = this.node.getBoundingClientRect().width + "px";
        if (this.node.innerText === this.placeholder) {
            this.node.innerText = "";
        } else {
            //this.selectTextInNode();
        }
        this.node.classList.remove("error");
    };

    focusOut = (e) => {
        this.node.style.minWidth = "0";
        if (this.node.innerText === "") {
            this.node.innerText = this.placeholder;
            this.node.classList.add("empty-text");
        }
        this.updateValidationStyle();
    };

    keyPress = (e) => {
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
        if (this.validate() != null) {
            this.node.classList.add("error");
        } else {
            this.node.classList.remove("error");
        }
    };

    script = () => {
        this.node = this.shadowRoot.querySelector("#content");
        if (!BaseComponent.editMode && this.node.innerText === this.placeholder) {
            this.placeholder = "";
            this.node.setAttribute("aria-placeholder", "");
            this.node.setAttribute("data-placeholder", "");
            this.node.innerText = "";

        }
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
        return content;
    };

    setContent = (content) => {
        this.node.innerText = (content || this.placeholder);
        if (this.node.innerText !== this.placeholder) {
            this.node.classList.remove("empty-text");
        }
        this.updateValidationStyle();
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
            }
            
            .error {
                background: rgba(255, 0, 0, 0.15);
                text-decoration: underline;
                text-decoration-color: red;
            }
        `
    };
}
