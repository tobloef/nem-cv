import BaseComponent from "../BaseComponent.js";
import RouterLink from "../shared/RouterLink.js";
import CustomButton from "../shared/CustomButton.js";

export default class PageHome extends BaseComponent {
    usedComponents = [
        RouterLink,
        CustomButton
    ];

    // language=CSS
    style = `
        custom-button {
            width: 200px;
        }
    `;

    get html() {
        return `
            <h1>PageHome</h1>
            <div>
              <router-link href="/testing">Testing</router-link>
              <router-link href="/templates">Templates</router-link>
              <router-link href="/editor">Editor</router-link>
              <router-link href="/blabla">Blabla (Not found)</router-link>
            </div>
            <custom-button id="button1">Primary</custom-button>
            <custom-button id="button2" secondary>Secondary</custom-button>
        `;
    };

    script = () => {
        const button1 = this.shadowRoot.getElementById("button1");
        const button2 = this.shadowRoot.getElementById("button2");
        button1.addEventListener("click", () => {
            console.log("Primary");
        });
        button2.addEventListener("click", () => {
            console.log("Secondary");
        })
    }
}
