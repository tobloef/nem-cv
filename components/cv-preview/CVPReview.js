import BaseComponent from "../BaseComponent.js";
import {getStorageItem} from "../../lib/storage-helper.js";
import Router from "../../lib/Router.js";
import {templates} from "../../constants/themes.js";

export default class CVPReview extends BaseComponent {
    usedComponents = [
        ...(templates.map(t => t.class))
    ];

    script = () => {
        // Load CV data
        const content = getStorageItem("cv-content");
        const template = getStorageItem("template");
        const colors = getStorageItem("colors");
        // Check if data is valid
        if (content == null || template == null || colors == null) {
            alert("Intet CV at vise, omdirigerer dig til forsiden.");
            Router.navigate("/");
            return;
        }
        // Set the theme data
        BaseComponent.template = template;
        BaseComponent.colors = colors;
        BaseComponent.editMode = false;
        // Create a CV from the given template.
        if (templates[template] == null) {
            alert("Den valgte skabelon kunne ikke vises, omdirigerer dig til forsiden.");
            Router.navigate("/");
            return;
        }
        const cvComponent = templates[template].class;
        const cvElement = document.createElement(cvComponent.elementName);
        // Insert the CV into the page
        this.shadowRoot.innerHTML = "";
        this.shadowRoot.appendChild(cvElement);
    };
}
