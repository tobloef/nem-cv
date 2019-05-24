import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js";
import SideBar from "./SideBar.js";
import {getStorageItem, setStorageItem} from "../../lib/storage-helper.js";
import NavBar from "../shared/NavBar.js";
import CVSimple from "../cvs/CVSimple.js";
import CVModern from "../cvs/CVModern.js";
import CVOctagon from "../cvs/CVOctagon.js";
import {layouts} from "../../constants/editor-definitions.js";
import CustomButton from "../shared/CustomButton.js";
import Logo from "../shared/Logo.js";

export default class PageEditor extends BaseComponent {
    cvType = null;
    colorScheme = null;
    cv = null;

    usedComponents = [
        CustomButton,
        CVSimple,
        CVModern,
        CVOctagon,
        NavBar,
        SideBar,
        CustomButton,
        Logo
    ];

    // language=HTML
    get html() {
        return `
            <nav-bar>
                <div>
                    <custom-button inverted id="settings-button">Indstillinger</custom-button>
                    <logo-></logo->
                    <custom-button inverted id="finish-button">Færdig</custom-button>
                </div>
            </nav-bar>
            <side-bar></side-bar>
            <div id="cv-container"></div>
        `;
    };

    script = () => {
        if (getStorageItem("template") == null) {
            return Router.navigate(Router.prefix + "/templates");
        } else {
            this.changeCVType();
        }

        this.addEventListener("select-click", (e) => {
            this.toggleSidebarIfNecessary();
            setStorageItem("template", e.detail);
            this.changeCVType();
        });

        this.addEventListener("example-click", (e) => {
            console.log("Example selected:", e.detail);
        });

        this.addEventListener("color-picked", (e) => {
            this.toggleSidebarIfNecessary();
            setStorageItem("colors", e.detail.colors);
            this.changeColors();
        });

        const sidebar = this.shadowRoot.querySelector("side-bar");
        if (sidebar != null) {
            const settingsButton = this.shadowRoot.getElementById("settings-button");
            settingsButton.addEventListener("click", () => {
                sidebar.toggle();
            });
        }

        const finishButton = this.shadowRoot.getElementById("finish-button");
        finishButton.addEventListener("click", () => {
            if (this.cv == null) {
                return;
            }
            // TODO: Validate
            const content = this.cv.getContent();
            setStorageItem("cv-content", content);
            // TODO: Navigate to preview page
            alert("TEMPORARY: Your CV has been saved!");
        });
    };

    toggleSidebarIfNecessary = () => {
        const width = document.documentElement.clientWidth;
        if (width <= 550) { // Is mobile-sized
            const sidebar = this.shadowRoot.querySelector("side-bar");
            sidebar.toggle();
        }
    };

    changeCVType = () => {
        const cvType = getStorageItem("template");
        if (this.cvType !== cvType) { // If the gotten type is different from the current one
            const cvContainer = this.shadowRoot.getElementById("cv-container");
            cvContainer.innerHTML = ""; // Get content div and reset contents
            this.cv = document.createElement(layouts[cvType].class.elementName); // Spawn a new CV
            cvContainer.appendChild(this.cv); // Add new CV to container
            this.cvType = cvType; // Remember which type is selected
        }
    };



    changeColors = () => {
        const colorScheme = getStorageItem("colors");
        if (this.colorScheme !== colorScheme) {
            // TODO: Update styles from the color scheme

            this.colorScheme = colorScheme;
        }
    };

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
            
            #cv-container {
                flex: 1;
            }
        `;
    };
}
