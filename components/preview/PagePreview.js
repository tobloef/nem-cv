import BaseComponent from "../BaseComponent.js";
import {getStorageItem} from "../../lib/storage-helper.js";
import Router from "../../lib/Router.js";
import templates from "../../lib/constants/templates.js";
import paths from "../../lib/constants/paths.js";

export default class PagePreview extends BaseComponent {
    usedComponents = [
        // Automatically add all CV template components
        ...Object.keys(templates).map(t => templates[t].class)
    ];

    // language=HTML
    get html() {
        return `
            <router-link>
                <img src="${paths["logo-white"]}">
            </router-link>
        `
    }

    script = () => {
        // Load CV data
        const content = getStorageItem("cv-content");
        const templateId = getStorageItem("template-id");
        const colors = getStorageItem("colors");
        this.createPreview(content, templateId, colors);
    };

    createPreview = (content, templateId, colors) => {
        // Check if data is valid
        if (content == null || templateId == null) {
            alert("Intet CV at vise, omdirigerer dig til forsiden.");
            Router.navigate("/");
            return;
        }
        // Set the static component data
        BaseComponent.templateId = templateId;
        BaseComponent.colors = colors;
        BaseComponent.editMode = false;
        // Create a CV from the given template and data.
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
        // Add the content
        cvElement.setContent(content);
        this.shadowRoot.innerHtml += this.html;
    };

    get css() {
        // language=CSS
        return `
            router-link {
                position: fixed;
                right: 0;
                bottom: 0;
            }
        `
    }
}
