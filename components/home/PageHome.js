import BaseComponent from "../BaseComponent.js";
import RouterLink from "../shared/RouterLink.js";

export default class PageHome extends BaseComponent {
    usedComponents = [
        RouterLink
    ];

    html = `
        <div>
          <h1>PageHome</h1>
          <router-link href="/templates">Templates</router-link>
          <router-link href="/editor">Editor</router-link>
          <router-link href="/blabla">Blabla (Not found)</router-link>
        </div>
    `;
}
