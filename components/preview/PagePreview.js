import BaseComponent from "../BaseComponent.js";
import {getStorageItem} from "../../lib/storage-helper.js";
import Router from "../../lib/Router.js";
import templates from "../../lib/constants/templates.js";
import RouterLink from "../shared/RouterLink.js";
import Logo from "../shared/Logo.js";

export default class PagePreview extends BaseComponent {
    usedComponents = [
        RouterLink,
        Logo,
        // Automatically add all CV template components
        ...Object.keys(templates).map(t => templates[t].class)
    ];

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
        // Add the content to the CV
        cvElement.setContent(content);
        // Insert a watermark
        const watermark = document.createElement(Logo.elementName);
        watermark.setAttribute("color", "black");
        watermark.classList.add("watermark");
        this.shadowRoot.appendChild(watermark);
    };

    get css() {
        // language=CSS
        return `
            router-link {
                position: fixed;
                right: 0;
                bottom: 0;
            }
            
            .watermark {
                position: fixed;
                right: 20px;
                bottom: 20px;
                opacity: 0.5;
            }
        `
    }
}
