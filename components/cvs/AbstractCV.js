import BaseComponent from "../BaseComponent.js";
import whenReady from "../../lib/whenReady.js";
import {getStorageItem} from "../../lib/storage-helper.js";

export default class AbstractCV extends BaseComponent {
    static observedAttributes = [];

    usedComponents = [];

    commonScript = () => {
        whenReady(() => {
            const contentStr = getStorageItem("cv-content");
            if (contentStr != null) {
                this.setContent(contentStr);
            }
        });



        const experienceList = this.shadowRoot.getElementById("experience-list");
        experienceList.itemAttributes = {
            "experience-type": "Firma"
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
}
