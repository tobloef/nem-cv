import BaseComponent from "../BaseComponent.js";

export default class AbstractCV extends BaseComponent {
    // A baseline for CVs that takes care of tasks that are common between them
    static observedAttributes = [];

    usedComponents = [];

    commonScript = () => {
        // Assign mandatory attirbutes to expperienceList
        const experienceList = this.shadowRoot.getElementById("experience-list");
        if (experienceList != null) {
            experienceList.itemAttributes = {
                "experience-type": "Firma",
                "end-date-optional": ""
            };
            // Assigns seperator for where (a component in ExperienceItem
            if (this.experienceWhereSeparator !== null) {
                experienceList.itemAttributes["where-separator"] = this.experienceWhereSeparator;
            }
            experienceList.render();
        }

        // Does the same as above for educationList
        const educationList = this.shadowRoot.getElementById("education-list");
        if (educationList) {
            educationList.itemAttributes = {
                "experience-type": "Uddannelsessted"
            };
            if (this.experienceWhereSeparator !== null) {
                educationList.itemAttributes["where-separator"] = this.educationWhereSeparator;
            }
            educationList.render();
        }

        const sectorList = this.shadowRoot.getElementById("sector-list");
        if (sectorList) {
            sectorList.itemAttributes = {
            "content-type": "component",
            "tabindex": "0"
        };
            sectorList.render();
        }
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
