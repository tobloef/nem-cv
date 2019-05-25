import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js";
import RouterLink from "../shared/RouterLink.js";
import LayoutList from "../editor/LayoutList.js";
import {setStorageItem} from "../../lib/storage-helper.js";
import NavBar from "../shared/NavBar.js";
import CustomButton from "../shared/CustomButton.js";
import Logo from "../shared/Logo.js";

export default class PageTemplates extends BaseComponent {
    usedComponents = [
        LayoutList,
        NavBar,
        CustomButton,
        Logo,
        RouterLink
    ];

    get html() {
        // language=HTML
        return `
            <nav-bar>
                <div>
                  <router-link href="/">
                    <custom-button inverted style="font-size: 0.4em">Tilbage</custom-button>
                  </router-link>
                  <logo-></logo->
                  <div class="filler"></div>
                </div>
            </nav-bar>
            <div class="content">
                <h1>Vælg en skabelon</h1>
                <layout-list class="resizing"></layout-list>
            </div>
        `;
    };

    script = () => {
        this.addEventListener("select-click", (e) => {
            setStorageItem("template-id", e.detail.templateId);
            Router.navigate("/editor");
        });
    };

    get css() {
        //language=CSS
        return `
            :host {
                display: flex;
                justify-content: center;
                font-family: 'Open Sans', sans-serif;
                padding: 85px 15px 15px;
            }

            h1 {
                font-size: 3.5em;
                margin: 0.7em 0;
                max-width: unset;
                font-weight: normal;
                text-decoration: underline;
            }

            nav-bar {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 10;
                font-size: 3em;
                font-weight: 100;
                line-height: 1.3;
            }

            .content {
                max-width: 900px;
            }
        `;
    }
}
