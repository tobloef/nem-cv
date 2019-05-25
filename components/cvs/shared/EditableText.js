import BaseComponent from "../../BaseComponent.js";

export default class EditableText extends BaseComponent {
    node = null;

    static observedAttributes = [
        "placeholder",
        "element",
        "multiline",
    ];

    // language=HTML
    get html() {
        return `
            <${this.element} 
                id="content" 
                class="empty-text"
                part="inner" 
                contenteditable="true" 
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

    onFocus = () => {
        this.node.classList.remove("empty-text");
        this.node.style.minWidth = this.node.getBoundingClientRect().width + "px";
        if (this.node.innerText === this.placeholder) {
            this.node.innerText = "";
        } else {
            //this.selectTextInNode();
        }
    };

    focusOut = () => {
        this.node.style.minWidth = "0";
        if (this.node.innerText === "") {
            this.node.innerText = this.placeholder;
            this.node.classList.add("empty-text");
        }
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

    script = () => {
        this.node = this.shadowRoot.querySelector("#content");
        this.node.addEventListener("focus", this.onFocus);
        this.node.addEventListener("focusout", this.focusOut);
        this.node.addEventListener("keypress", this.keyPress);
    };

    getContent = () => {
        const content = this.node.innerText;
        if (content === "") {
            return null;
        }
        return content;
    };

    setContent = (content) => {
        this.node.innerText = (content || this.placeholder);
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
            }
        `
    };
}
