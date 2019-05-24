import BaseComponent from "../BaseComponent.js";
import whenReady from "../../lib/whenReady.js";

export default class AbstractCV extends BaseComponent {
    static observedAttributes = [];

    usedComponents = [];

    commonScript = () => {
        whenReady(() => {
            const testContent = {
                "name": "Hest McHestert",
                "age": 34,
                "email": "hest@hestenettet.dk",
                "city": "Hestved",
                "picture": "https://i.imgur.com/qmBzAu1.png",
                "description": "Håber jeg finder det fede arbejde",
                "employers": [
                    {
                        "name": "Google",
                        "title": "Pedel",
                        "from": "2012"
                    },
                    {
                        "name": "Stalden",
                        "title": "Vallak",
                        "from": "2007-01-01",
                        "to": "2012-03-01"
                    }
                ],
                "education": [
                    {
                        "name": "ITU",
                        "title": "cand.it",
                        "from": "2018",
                        "to": "2020"
                    }
                ],
                "sectors": [
                    "Byggeri",
                    "Skovbrug"
                ]
            };
            this.setContent(testContent);
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

    render() {
        super.render();
        this.commonScript();
    }

    getContent() {
        const obj = {};
        super.getContent(obj);
        return obj;
    };
}
