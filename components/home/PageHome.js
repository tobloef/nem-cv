import BaseComponent from "../BaseComponent.js";
import RouterLink from "../shared/RouterLink.js";
import CustomButton from "../shared/CustomButton.js";
import wait from "../../lib/wait.js";
import HomeHeader from './HomeHeader.js';

export default class PageHome extends BaseComponent {
    usedComponents = [
        RouterLink, HomeHeader, CustomButton
    ];

    html = `
        <div class="topbar">
            <img class="logo" src="/img/logo_white.svg"></img>
        </div>
        <home-header></home-header>
        <div class="testcontent">
            <router-link href="/testing">Testing</router-link>
            <router-link href="/templates">Templates</router-link>
            <router-link href="/editor">Editor</router-link>
            <router-link href="/blabla">Blabla (Not found)</router-link>

            <router-link href="/cv-simple">CV Simple</router-link>
            <router-link href="/cv-octagon">CV Octagon</router-link>
            <router-link href="/cv-modern">CV Modern</router-link>
            <custom-button id="button1">Primary</custom-button>
            <custom-button id="button2" secondary>Secondary</custom-button>
        </div>
    `;

    // language=CSS
    get css() {
        return `
            :host {
                font-family: 'Open Sans', sans-serif;
            }
    
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
    
            .testcontent {
                padding: 15px;
            }
    
            custom-button {
                width: 200px;
            }
        `;
    }

    script = () => {
        const button1 = this.shadowRoot.getElementById("button1");
        const button2 = this.shadowRoot.getElementById("button2");
        button1.addEventListener("click", () => {
            console.log("Primary");
        });
        button2.addEventListener("click", () => {
            console.log("Secondary");
        });
    }
}
