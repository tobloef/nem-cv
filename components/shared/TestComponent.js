import BaseComponent from "../BaseComponent.js";

export default class TestComponent extends BaseComponent {
    static observedAttributes = [
        "color",
        "cool"
    ];

    get html() {
        return `<p style="color: ${this.color || "unset"}">${this.cool ? "Cool Test" : "Test"}</p>`;
    }
}