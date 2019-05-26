import BaseComponent from "../BaseComponent.js";

export default class AbstractCV extends BaseComponent {
    //a baseline for CVs that takes care of tasks that are common between them
    static observedAttributes = [];

    usedComponents = [];

    commonScript = () => {
        //assign mandatory attirbutes to expperienceList
        const experienceList = this.shadowRoot.getElementById("experience-list");
        experienceList.itemAttributes = {
            "experience-type": "Firma",
            "end-date-optional": ""
        };
        //assigns seperator for where (a component in ExperienceItem
        if (this.experienceWhereSeparator !== null) {
            experienceList.itemAttributes["where-separator"] = this.experienceWhereSeparator;
        }
        experienceList.render();

        //Does the same as above for educationList
        const educationList = this.shadowRoot.getElementById("education-list");
        educationList.itemAttributes = {
            "experience-type": "Uddannelsessted"
        };
        if (this.experienceWhereSeparator !== null) {
            educationList.itemAttributes["where-separator"] = this.educationWhereSeparator;
        }
        educationList.render();

        const sectorList = this.shadowRoot.getElementById("sector-list");
        sectorList.itemAttributes = {
            "content-type": "component",
            "tabindex": "0"
        };
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

    setContent = (content) => {
        if (content != null) {
            super.setContent(content);
        }
    }
}
