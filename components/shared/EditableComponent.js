import BaseComponent from "../BaseComponent.js";

export default class EditableComponent extends BaseComponent {
    empty = true;
    node = null
    static observedAttributes = [
        "placeholder",
        "element"
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
            <${this.element}/>
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
        if (this.empty) {
            this.node.innerHTML = "";
            this.empty = false;
            this.node.classList.remove("empty-text");
        }
        this.selectTextInNode();
    };
    focusOut = () => {
        if (this.node.innerHTML === "") {
            this.empty = true;
            this.node.innerHTML = this.placeholder;
            this.node.classList.add("empty-text");
        }
    };

    script = () => {
        this.node = this.shadowRoot.querySelector("#content");
        this.node.addEventListener("focus", this.onFocus);
        this.node.addEventListener("focusout", this.focusOut);
    };

    // language=CSS
    get style() {
        return `
            .empty-text {
                color: #aaa;
            }
        `
    };
}
