import BaseComponent from "../BaseComponent.js";
import AppendableComponentList from "../shared/AppendableComponentList.js";
import TestAppendButton from "../shared/TestAppendButton.js";
import TestComponent from "../shared/TestComponent.js";

export default class PageTest extends BaseComponent {
    usedComponents = [
        AppendableComponentList,
        TestAppendButton,
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
              <test-append-button slot="append-button"></test-append-button>
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
