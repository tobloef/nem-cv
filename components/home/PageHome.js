import BaseComponent from "../BaseComponent.js";
import RouterLink from "../shared/RouterLink.js";
import AppendableComponentList from "../shared/AppendableComponentList.js";
import TestComponent from "../shared/TestComponent.js";
import AppendButton from "../shared/AppendButton.js";

export default class PageHome extends BaseComponent {
    usedComponents = [
        RouterLink,
        AppendableComponentList,
        AppendButton,
        TestComponent
    ];

    externalStyles = [
        "css/theme1.css"
    ];

    get html() {
        return `
            <div>
              <h1>PageHome</h1>
              <router-link href="/templates">Templates</router-link>
              <router-link href="/editor">Editor</router-link>
              <router-link href="/blabla">Blabla (Not found)</router-link>
            </div>
            <appendable-component-list item-component="${TestComponent.elementName}">
              <append-button slot="append-button"></append-button>
            </appendable-component-list>
            <button id="theme-switch">Switch to blue</button>
        `;
    };

    script = () => {
        const button = this.shadowRoot.getElementById("theme-switch");
        button.onclick = () => {
            let newStyles = this.externalStyles;
            if (newStyles.some(s => s.includes("theme1.css"))) {
                newStyles = newStyles.filter(s => !s.includes("theme1.css"));
                newStyles.push("css/theme2.css");
            } else if (newStyles.some(s => s.includes("theme2.css"))) {
                newStyles = newStyles.filter(s => !s.includes("theme2.css"));
                newStyles.push("css/theme1.css");
            }
            this.externalStyles = newStyles;
            this.render();
        }
    }
}
