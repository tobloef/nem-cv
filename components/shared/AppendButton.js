import BaseComponent from "../BaseComponent.js";

export default class AppendButton extends BaseComponent {
    get html() {
        return `<div>
          <button id="button">Add</button>
          <input type="checkbox" id="red-checkbox"> Make it red<br>
        </div>`;
    };

    script = () => {
        const button = this.shadowRoot.getElementById("button");
        button.onclick = () => {
            if (this.onAppend == null) {
                return;
            }
            const redCheckbox = this.shadowRoot.getElementById("red-checkbox");
            const attributes = {};
            if (redCheckbox.checked) {
                attributes.color = "red";
            }
            this.onAppend(attributes);
        };
    }
}
