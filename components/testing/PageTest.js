import BaseComponent from "../BaseComponent.js";
import AppendableComponentList from "../shared/AppendableComponentList.js";
import AppendButton from "../shared/AppendButton.js";
import TestComponent from "../shared/TestComponent.js";

export default class PageTest extends BaseComponent {
    usedComponents = [
        AppendableComponentList,
        AppendButton,
        TestComponent
    ];

    externalStyles = [
        "css/theme1.css"
    ];

    currentTheme = "red";

    get html() {
        return `
            <h1>PageTest</h1>
            <appendable-component-list item-component="${TestComponent.elementName}">
              <append-button slot="append-button"></append-button>
            </appendable-component-list>
            <button id="theme-switch">${this.getButtonText()}</button>
        `;
    };

    getButtonText() {
        return `Switch theme to ${this.currentTheme === "blue" ? "red" : "blue"}`;
    }

    script = () => {
        const button = this.shadowRoot.getElementById("theme-switch");
        button.addEventListener("click", () => {
            if (this.currentTheme === "red") {
                this.currentTheme = "blue";
                BaseComponent.colors = `
                    * {
                        color: blue;
                    }
                `;
            } else {
                this.currentTheme = "red";
                BaseComponent.colors = `
                    * {
                        color: red;
                    }
                `;
            }
            button.innerText = this.getButtonText();
            this.updateStyles();
        });
    }
}
