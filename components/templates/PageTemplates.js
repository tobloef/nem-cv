import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js";
import RouterLink from "../shared/RouterLink.js";
import LayoutList from "../editor/LayoutList.js";
import {setItem} from "../../lib/storage-helper.js";
import NavBar from "../shared/NavBar.js";
import CustomButton from "../shared/CustomButton.js";
import Logo from "../shared/Logo.js";

export default class PageTemplates extends BaseComponent {
    usedComponents = [
        LayoutList,
        NavBar,
        CustomButton,
        Logo
    ];

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
                font-size: 4em;
                font-weight: bold;
                line-height: 1.2;
                margin-bottom: 15px;
                max-width: 60%;
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

            .back {
                display: block;
                font-size: 2em;
                color: black;
                line-height: 1.1;
                margin-bottom: 30px;
            }

            .content {
                max-width: 900px;
            }

            @media(min-width: 680px) {
                h1 {
                    font-size: 4.5em;
                }

                .back {
                    font-size: 2.2em;
                    margin-bottom: 1em;
                }
            }

            @media(min-width: 1100px) {
                h1 {
                    font-size: 5.5em;
                    margin-bottom: 0.3em;
                }
            }
        `;
    }

    script = () => {
        this.addEventListener("select-click", (evt) => {
            setItem("template", evt.detail);
            Router.navigate(Router.prefix + "/editor");
        });
        this.addEventListener("example-click", (evt) => {
            console.log("Example selected:", evt.detail);
        });
    };

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
                <router-link class="back" href="/">Tilbage</router-link>
                <layout-list class="resizing"></layout-list>
            </div>
        `;
    };
}
