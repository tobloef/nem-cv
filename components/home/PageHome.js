import BaseComponent from "../BaseComponent.js";
import RouterLink from "../shared/RouterLink.js";

export default class PageHome extends BaseComponent {
    usedComponents = [
        RouterLink
    ];

    get html() {
        return `
            <h1>PageHome</h1>
            <div>
              <router-link href="/testing">Testing</router-link>
              <router-link href="/templates">Templates</router-link>
              <router-link href="/editor">Editor</router-link>
              <router-link href="/blabla">Blabla (Not found)</router-link>

              <router-link href="/cv-simple">CV Simple</router-link>
              <router-link href="/cv-octagon">CV Octagon</router-link>
              <router-link href="/cv-modern">CV Modern</router-link>
            </div>
        `;
    };
}
