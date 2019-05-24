import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js";
import SideBar from "./SideBar.js";
import {getItem, setItem} from "../../lib/storage-helper.js";
import NavBar from "../shared/NavBar.js";
import CVSimple from "../cvs/cv-simple/CVSimple.js";
import CustomButton from "../shared/CustomButton.js";
import CVModern from "../cvs/cv-modern/CVModern.js";
import CVOctagon from "../cvs/cv-octagon/CVOctagon.js";
import {layouts} from "../../constants/editor-definitions.js";

export default class PageEditor extends BaseComponent {
    usedComponents = [
        CustomButton,
        CVSimple,
        CVModern,
        CVOctagon,
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
            <div id="cv-container">
                
            </div>
            
        `;
    };

    script = () => {
        if (getItem("template") == null) {
            return Router.navigate(Router.prefix + "/templates");
        } else {
            this.changeCVType();
        }

        this.addEventListener("select-click", (evt) => {
            this.toggleSidebarIfNecessary();
            setItem("template", evt.detail);
            this.changeCVType();
        });

        this.addEventListener("example-click", (evt) => {
            console.log("Example selected:", evt.detail);
        });

        this.addEventListener("color-picked", (evt) => {
            this.toggleSidebarIfNecessary();
            setItem("colors", evt.detail.colors);
            this.changeColors();
        });
    };

    toggleSidebarIfNecessary() {
        const width = document.documentElement.clientWidth;
        if (width <= 550) { // Is mobile-sized
            const sidebar = this.shadowRoot.querySelector("side-bar");
            sidebar.toggle();
        }
    }

    changeCVType() {
        const cvType = getItem("template");
        if (this.cvType !== cvType) { // If the gotten type is different from the current one
            const cvContainer = this.shadowRoot.getElementById("cv-container");
            cvContainer.innerHTML = ""; // Get content div and reset contents

            const spawnedCV = document.createElement(layouts[cvType].class.elementName); // Spawn a new CV
            // TODO: Make newly spawned CV get it's contents
            cvContainer.appendChild(spawnedCV); // Add new CV to container
            this.cvType = cvType; // Remember which type is selected
        }
    }

    cvType = null;

    changeColors() {
        const colorScheme = getItem("colors");
        if (this.colorScheme !== colorScheme) {
            // TODO: Update styles from the color scheme

            this.colorScheme = colorScheme;
        }
    }

    colorScheme = null;

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
