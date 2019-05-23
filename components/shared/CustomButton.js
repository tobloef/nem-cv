import BaseComponent from "../BaseComponent.js";

export default class CustomButton extends BaseComponent {
    static observedAttributes = ["secondary"];

    // language=HTML
    get html() {
        return `<button><slot></slot></button>`;
    }

    get style() {
        // language=CSS
        return `
            :host {
                display: flex;
                --border-color: black;
                --text-color: black;
                --hover-background-color: var(--border-color);
                --hover-text-color: white;
                --border-thickness: 2px;
            }

            button {
                width: 100%;
                border: var(--border-thickness) solid var(--border-color);
                background-color: transparent;
                color: var(--text-color);
                padding: 14px 28px;
                cursor: pointer;
                font-size: 0.8em;
            }

            :host([secondary]) button {
                border-color: transparent;
                border-bottom-color: var(--border-color);
            }

            button:hover{
                background-color: var(--hover-background-color);
                color: var(--hover-text-color);
            }
        `;
    };

    script(){}
}
