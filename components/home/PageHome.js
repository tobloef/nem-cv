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

    get html() {
        return `
            <div>
              <h1>PageHome</h1>
              <router-link href="/templates">Templates</router-link>
              <router-link href="/editor">Editor</router-link>
              <router-link href="/blabla">Blabla (Not found)</router-link>
            </div>
            <appendable-component-list item-component="${TestComponent.elementName}">
              <append-button slot="append-button"/>
            </appendable-component-list>
        `;
    };
}
