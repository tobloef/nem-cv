import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js"
import RouterLink from "../shared/RouterLink.js";

export default class PageHome extends BaseComponent {
    usedComponents = [
        RouterLink
    ];

    html = `
        <div>
          <h1>PageHome</h1>
          <router-link href="${Router.prefix}/templates">Templates</router-link>
          <router-link href="${Router.prefix}/editor">Editor</router-link>
          <router-link href="${Router.prefix}/blabla">Blabla (Not found)</router-link>
        </div>
    `;
}
