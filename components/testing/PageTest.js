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

    currentTheme = "red";

    get html() {
        return `
            <h1>PageTest</h1>
            
            <appendable-component-list item-component="${TestComponent.elementName}">
              <append-button slot="append-button"></append-button>
            </appendable-component-list>
            
            <button id="theme-switch">${this.getButtonText()}</button>
            <button id="use-theme-size">Use the cool size!</button>
        `;
    };

    getButtonText() {
        return `Switch theme to ${this.currentTheme === "blue" ? "red" : "blue"}`;
    }

    script = () => {
        const button1 = this.shadowRoot.getElementById("theme-switch");
        button1.addEventListener("click", () => {
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
            button1.innerText = this.getButtonText();
            this.updateStyles();
        });

        const button2 = this.shadowRoot.getElementById("use-theme-size");
        button2.addEventListener("click", () => {
            // language=CSS
            BaseComponent.template = `
                :host {
                    --test-size: 2em;
                }
            `;
            this.updateStyles();
        });
    }
}
