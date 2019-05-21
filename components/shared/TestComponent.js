import BaseComponent from "../BaseComponent.js";

export default class TestComponent extends BaseComponent {
    static observedAttributes = [
        "color"
    ];

    get html() {
        return `<p style="color: ${this.color || "unset"}">Test</p>`;
    }


}