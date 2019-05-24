import BaseComponent from "../BaseComponent.js";

export default class CustomButton extends BaseComponent {
    static observedAttributes = ["secondary", "inverted"];

    // language=HTML
    get html() {
        return `<button><slot></slot></button>`;
    }

    get css() {
        // language=CSS
        return `
            :host {
                display: flex;
                
                --border-color: black;
                --text-color: black;
                --hover-background-color: var(--border-color);
                --hover-text-color: white;
                --border-thickness: 2px;
                --padding-y: 14px;
                --padding-x: 28px;
            }
            
            :host([inverted]) {
                --border-color: white;
                --text-color: white;
                --hover-background-color: var(--border-color);
                --hover-text-color: black;
            }

            button {
                width: 100%;
                border: var(--border-thickness) solid var(--border-color);
                background-color: transparent;
                color: var(--text-color);
                padding: var(--padding-y) var(--padding-x);
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
}
