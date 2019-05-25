import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js";
import SideBar from "./SideBar.js";
import {getStorageItem, setStorageItem} from "../../lib/storage-helper.js";
import NavBar from "../shared/NavBar.js";
import CVSimple from "../cvs/CVSimple.js";
import CVModern from "../cvs/CVModern.js";
import CVOctagon from "../cvs/CVOctagon.js";
import {layouts, templates} from "../../constants/editor-definitions.js";
import CustomButton from "../shared/CustomButton.js";
import Logo from "../shared/Logo.js";
import {postCV} from "../../lib/api.js";

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
        this.checkForExistingCV();

        BaseComponent.editMode = true;
        if (getStorageItem("template") == null) {
            return Router.navigate(Router.prefix + "/templates");
        } else {
            this.changeCVType();
        }

        const sidebar = this.shadowRoot.querySelector("side-bar");
        if (sidebar != null) {
            const settingsButton = this.shadowRoot.getElementById("settings-button");
            settingsButton.addEventListener("click", () => {
                sidebar.toggle();
            });
        }

        this.addEventListener("select-click", (e) => {
            this.toggleSidebarIfNecessary();
            setStorageItem("template", e.detail);
            this.changeCVType();
            sidebar.toggle();
        });

        this.addEventListener("example-click", (e) => {
            console.log("Example selected:", e.detail);
        });

        this.addEventListener("color-picked", (e) => {
            this.toggleSidebarIfNecessary();
            setStorageItem("colors", e.detail.colors);
            this.changeColors();
        });

        const finishButton = this.shadowRoot.getElementById("finish-button");
        finishButton.addEventListener("click", async () => {
            if (this.cv == null) {
                return;
            }
            // Set cv content in local storage
            const content = this.cv.getContent();
            setStorageItem("cv-content", content);
            // Validate before sending to the server
            const validationResult = this.validate();
            if (validationResult != null) {
                alert(`${validationResult} Ret venligst dette inden CV'et kan sendes til serveren.`);
                return;
            }
            // Send CV to server
            try {
                await postCV(content);
            } catch (error) {
                console.error(error);
                alert("Der opstod en fejl da CV'et skulle sendes til serveren. Dit CV vil blive gemt lokalt.");
                return;
            }
            // Navigate to the cv page
            alert("Dit CV blev sendt til serveren.");
            // TODO: Navigate to cv page
        });
        this.setDefaultColors();
    };

    setDefaultColors() {
        const defaultColor = 0;
        setStorageItem("colors", {
            fontColor: templates[defaultColor].fontColor,
            backgroundColor: templates[defaultColor].backgroundColor,
            accentColor: templates[defaultColor].accentColor,
            extraBackgroundColor: templates[defaultColor].extraBackgroundColor
        });
        this.changeColors();
    }

    checkForExistingCV = () => {
        if (getStorageItem("cv-content") == null) {
            return;
        }
        if (!confirm("Der blev fundet et eksisterende CV fra tidligere brug. Ønsker du at bruge dette?")) {
            localStorage.clear();
        }
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
            
            logo- {
                padding: 0 1em;
            }
            
            #cv-container {
                flex: 1;
            }
        `;
    };
}
