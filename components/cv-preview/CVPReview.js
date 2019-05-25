import BaseComponent from "../BaseComponent.js";
import {getStorageItem} from "../../lib/storage-helper.js";
import Router from "../../lib/Router.js";
import templates from "../../lib/constants/templates.js";

export default class CVPReview extends BaseComponent {
    usedComponents = [
        ...(templates.map(t => t.class))
    ];

    script = () => {
        // Load CV data
        const content = getStorageItem("cv-content");
        const templateId = getStorageItem("template-id");
        const colors = getStorageItem("colors");
        // Check if data is valid
        if (content == null || templateId == null || colors == null) {
            alert("Intet CV at vise, omdirigerer dig til forsiden.");
            Router.navigate("/");
            return;
        }
        // Set the static component data
        BaseComponent.templateId = templateId;
        BaseComponent.colors = colors;
        BaseComponent.editMode = false;
        // Create a CV from the given template.
        if (templates[templateId] == null) {
            alert("Den valgte skabelon kunne ikke vises, omdirigerer dig til forsiden.");
            Router.navigate("/");
            return;
        }
        const cvComponent = templates[templateId].class;
        const cvElement = document.createElement(cvComponent.elementName);
        // Insert the CV into the page
        this.shadowRoot.innerHTML = "";
        this.shadowRoot.appendChild(cvElement);
    };
}
