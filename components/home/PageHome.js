import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js"
import RouterLink from "../shared/RouterLink.js";
import wait from "../../lib/wait.js";

import HomeHeader from './HomeHeader.js';


export default class PageHome extends BaseComponent {
    usedComponents = [
        RouterLink, HomeHeader
    ];

    html = `
        <div class="topbar">
            <img class="logo" src="/img/logo_white.svg"></img>
        </div>
        <home-header></home-header>
        <h2>Stuff</h2>
        <h3>Stuff</h3>
        <router-link href="${Router.prefix}/templates">Templates</router-link>
        <router-link href="${Router.prefix}/editor">Editor</router-link>
        <router-link href="${Router.prefix}/blabla">Blabla (Not found)</router-link>
    `;

    // language=CSS
    style = `
        .topbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 10;
            padding: 20px;
        }

        .topbar .logo {
            max-width: 120px;
        }
    `;

    script() {

    }
}
