import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js";
import SideBar from "./SideBar.js";
import {addStorageItemListener, getStorageItem, setStorageItem} from "../../lib/storage-helper.js";
import NavBar from "../shared/NavBar.js";
import CustomButton from "../shared/CustomButton.js";
import Logo from "../shared/Logo.js";
import {postCV} from "../../lib/api.js";
import templates from "../../lib/constants/templates.js";
import {whenReady} from "../../lib/wait.js";

export default class PageEditor extends BaseComponent {
    cv = null;

    usedComponents = [
        CustomButton,
        NavBar,
        SideBar,
        CustomButton,
        Logo,
        // Automatically add all CV template components
        ...Object.keys(templates).map(t => templates[t].class)
    ];

    // language=HTML
    get html() {
        return `
            <nav-bar>
                <div>
                    <custom-button inverted id="settings-button">Indstillinger</custom-button>
                    <logo-></logo->
                    <custom-button inverted id="finish-button">Gem CV</custom-button>
                </div>
            </nav-bar>
            <side-bar></side-bar>
            <div id="cv-container"></div>
        `;
    };

    script = () => {
        BaseComponent.editMode = true;
        this._checkForExistingCV();
        // Try to create CV with template or redirect to choose template
        const templateId = getStorageItem("template-id");
        if (templateId == null || templates[templateId] == null) {
            return Router.navigate("/templates");
        }
        this._setCV(templates[templateId]);
        // Set up sidebar event listeners
        const sidebar = this.shadowRoot.querySelector("side-bar");
        this._setSidebarListeners(sidebar);
        // Set up finish button event
        const finishButton = this.shadowRoot.getElementById("finish-button");
        finishButton.addEventListener("click", this._handleFinish);
    };

    _setSidebarListeners(sidebar) {
        if (sidebar == null) {
            return;
        }
        const settingsButton = this.shadowRoot.getElementById("settings-button");
        settingsButton.addEventListener("click", sidebar.toggle);
        // Add custom event listener for when a template is selected
        sidebar.addEventListener("select-click", (e) => {
            const templateId =  e.detail.templateId;
            setStorageItem("template-id", templateId);
            BaseComponent.templateId = templateId;
            this._setCV(templates[templateId]);
            sidebar.toggle();
        });
        // Add custom event listener for when a color scheme is selected
        sidebar.addEventListener("color-picked", (e) => {
            const colors = e.detail.colors;
            setStorageItem("colors", colors);
            BaseComponent.colors = colors;
            this.cv.render();
            this.cv.updateStyles();
            const content = getStorageItem("cv-content");
            this.cv.setContent(content);
            sidebar.toggle();
        });
    }

    _checkForExistingCV = () => {
        if (getStorageItem("cv-content") == null) {
            return;
        }
        /*if (!confirm("Der blev fundet et eksisterende CV fra tidligere brug. Ønsker du at bruge dette?")) {
            setStorageItem("cv-content", null);
        }*/
    };

    _setCV = (template) => {
        if (template == null) {
            return;
        }
        // Create the CV element
        const cvContainer = this.shadowRoot.getElementById("cv-container");
        cvContainer.innerHTML = "";
        const cvElement = document.createElement(template.class.elementName);
        this.cv = cvElement;
        cvContainer.appendChild(cvElement);
        // When ready set the CV content
        whenReady(() => {
            //if the user has previously worked on the cv, the content is filled in after the page is loaded
            const content = getStorageItem("cv-content");
            this.cv.setContent(content);
            addStorageItemListener("cv-content", this.cv.setContent);
        });
    };

    _handleFinish = async () => {
        if (this.cv == null) {
            return;
        }
        // Set CV content in local storage
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
        if (confirm("Dit CV blev sendt til serveren. Vil du gerne se dit færdige CV nu?")) {
            Router.navigate("/preview")
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
