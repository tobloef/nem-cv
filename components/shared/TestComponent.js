import BaseComponent from "../BaseComponent.js";

export default class TestComponent extends BaseComponent {
    static observedAttributes = [
        "color",
        "cool"
    ];

    get html() {
        return `<p style="color: ${this.color || "unset"}" contenteditable="true">${this.cool ? "Cool Test" : "Test"}</p>`;
    }

    get style() {
        // language=CSS
        return `
            p {
                font-size: var(--test-size);    
            }
        `;
    }
}