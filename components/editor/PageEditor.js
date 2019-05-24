import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js";
import SideBar from "./SideBar.js";
import {getItem, setItem} from "../../lib/storage-helper.js";
import NavBar from "../shared/NavBar.js";

export default class PageEditor extends BaseComponent {
    usedComponents = [
        NavBar,
        SideBar
    ];

    // language=HTML
    get html() {
        return `
            <nav-bar>
                <custom-button inverted>Færdig</custom-button>
            </nav-bar>
            <side-bar></side-bar>
            <div class="cv-container">
                
            </div>
            
        `;
    };

    script = () => {
        if (getItem("template") == null) {
            return Router.navigate(Router.prefix + "/templates");
        }

        this.addEventListener("select-click", (evt) => {
            this.toggleSidebarIfNecessary();
            setItem("template", evt.detail);
        });

        this.addEventListener("example-click", (evt) => {
            console.log("Example selected:", evt.detail);
        });

        this.addEventListener("color-picked", (evt) => {
            this.toggleSidebarIfNecessary();
            setItem("colors", evt.detail.colors);
        });
    };

    toggleSidebarIfNecessary() {
        const width = document.documentElement.clientWidth;
        if (width <= 550) { // Is mobile-sized
            const sidebar = this.shadowRoot.querySelector("side-bar");
            sidebar.toggle();
        }
    }

    // language=CSS
    get css() {
        return `
            :host {
                display: block;
                height: 100%;
                padding-top: 70px;
            }
            
            side-bar {
                position: fixed;
                left: 0;
                top: 70px;
                height: calc(100% - 70px);
                z-index: 5;
            }
            
            nav-bar {
                /*width: 100%;*/
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 10;
            }
            
            .cv-container {
                flex: 1;
            }
        `;
    };
}
