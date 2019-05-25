import BaseComponent from "../BaseComponent.js";
import whenReady from "../../lib/whenReady.js";
import {addStorageItemListener, getStorageItem} from "../../lib/storage-helper.js";

export default class AbstractCV extends BaseComponent {
    static observedAttributes = [];

    usedComponents = [];

    commonScript = () => {
        const experienceList = this.shadowRoot.getElementById("experience-list");
        experienceList.itemAttributes = {
            "experience-type": "Firma",
            "end-date-optional": ""
        };
        if (this.experienceWhereSeparator !== null) {
            experienceList.itemAttributes["where-separator"] = this.experienceWhereSeparator;
        }
        experienceList.render();

        const educationList = this.shadowRoot.getElementById("education-list");
        educationList.itemAttributes = {
            "experience-type": "Uddannelsessted"
        };
        if (this.experienceWhereSeparator !== null) {
            educationList.itemAttributes["where-separator"] = this.educationWhereSeparator;
        }
        educationList.render();

        const sectorList = this.shadowRoot.getElementById("sector-list");
        sectorList.itemAttributes = {"content-type": "component"};
        sectorList.render();

        whenReady(() => {
            const content = getStorageItem("cv-content");
            this.setContent(content);
            addStorageItemListener("cv-content", this.setContent);
        });
    };

    educationWhereSeparator = null;
    experienceWhereSeparator = null;

    render = () => {
        super.render();
        this.commonScript();
    };

    getContent = () => {
        const obj = {};
        super.getContent(obj);
        return obj;
    };

    setContent = (content) => {
        if (content != null) {
            super.setContent(content);
        }
    }
}
