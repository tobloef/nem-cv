import EditableText from "./EditableText.js";
import BaseComponent from "../../BaseComponent.js";

export default class ExperienceItem extends BaseComponent {
    static observedAttributes = [
        "experience-type",
        "where-separator",
        "end-date-optional"
    ];

    usedComponents = [
        EditableText
    ];



    get html() {
        const experienceType = this.experienceType || "erfaring";
        let endDateValidation;
        if (this.endDateOptional) {
            endDateValidation = `validate-type="nullable-date" content-ignore-if-null`;
        } else {
            endDateValidation = `validate-type="date"`;
        }

        // language=HTML
        return `
            <div content-type="object" class="container" part="experience-item" id="experience-container">
                <span class="divider where">
                    <${EditableText.elementName}
                            validate-type="string"
                            placeholder="${experienceType}"
                            element="p"
                            content-key="name"
                            name="Navn på ${experienceType.toLowerCase()}"
                            content-type="component"
                    ></${EditableText.elementName}><span class="separator">${this.whereSeparator || ""}</span>
                    <${EditableText.elementName}
                            validate-type="string"
                            placeholder="Titel"
                            element="p"
                            name="Titel hos ${experienceType.toLowerCase()}"
                            content-key="title"
                            content-type="component"
                    ></${EditableText.elementName}>
                </span>
                <span class="divider when">
                    <${EditableText.elementName}
                            validate-type="date"
                            placeholder="Startdato"
                            element="p"
                            name="Startdato"
                            content-key="from"
                            content-type="component"
                    ></${EditableText.elementName}><p class="separator"> – </p>
                    <${EditableText.elementName}
                            placeholder="Slutdato"
                            name="Slutdato"
                            element="p"
                            content-key="to"
                            content-type="component"
                            ${endDateValidation}
                    ></${EditableText.elementName}>
                </span>
            </div>
        `;
    }

    // language=CSS
    get css() {
        return `
            .container {
                display: flex;
                justify-content: space-between;
                width: 100%;
            }
            .divider {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .separator {
                white-space: pre-wrap;
            }
            button {
                display: inline;
            }
            .where {
                padding-right: 3em;
            }
        `
    };
}
