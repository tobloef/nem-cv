import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js";
import SideBar from "./SideBar.js";
import {getStorageItem, setStorageItem} from "../../lib/storage-helper.js";
import NavBar from "../shared/NavBar.js";
import {templates, colors} from "../../constants/themes.js";
import CustomButton from "../shared/CustomButton.js";
import Logo from "../shared/Logo.js";
import {postCV} from "../../lib/api.js";

export default class PageEditor extends BaseComponent {
    cvType = null;
    colorScheme = null;
    cv = null;

    usedComponents = [
        CustomButton,
        NavBar,
        SideBar,
        CustomButton,
        Logo,
        ...Object.keys(templates).map(t => templates[t].class)
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

        BaseComponent.editMode = true; //since we are in the editor, turn editing on.
        //if no cv is chosen, redirect to choose a cv
        if (getStorageItem("template") == null) {
            return Router.navigate(Router.prefix + "/templates");
        } else {
            this.changeCVType();
        }

        //add the ability to toggle the sidebar
        const sidebar = this.shadowRoot.querySelector("side-bar");
        if (sidebar != null) {
            const settingsButton = this.shadowRoot.getElementById("settings-button");
            settingsButton.addEventListener("click", () => {
                sidebar.toggle();
            });
        }

        //add custom event listener for when a template is selected
        this.addEventListener("select-click", (e) => {
            this.toggleSidebarIfNecessary();
            setStorageItem("template", e.detail);
            this.changeCVType();
            sidebar.toggle();
        });

        //todo maybe we should either do something with this or remove the corresponding event
        this.addEventListener("example-click", (e) => {
            console.log("Example selected:", e.detail);
        });

        //add custom event listener for when a color scheme is selected
        this.addEventListener("color-picked", (e) => {
            this.toggleSidebarIfNecessary();
            setStorageItem("colors", e.detail.colors);
            this.changeColors();
        });

        const finishButton = this.shadowRoot.getElementById("finish-button");
        finishButton.addEventListener("click", this.handleFinish);
        this.setDefaultColors();
    };

    handleFinish = async () => {
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
        Router.navigate("/preview");
    };

    setDefaultColors() {
        const defaultColor = 0; //should be an index of the list of color schemes found in editorDefinitions
        setStorageItem("colors", {
            fontColor: colors[defaultColor].fontColor,
            backgroundColor: colors[defaultColor].backgroundColor,
            accentColor: colors[defaultColor].accentColor,
            extraBackgroundColor: colors[defaultColor].extraBackgroundColor
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
            this.cv = document.createElement(templates[cvType].class.elementName); // Spawn a new CV
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
