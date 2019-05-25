import EditableText from "./EditableText.js";
import BaseComponent from "../../BaseComponent.js";

export default class ExperienceItem extends BaseComponent {
    static observedAttributes = [
        "experience-type",
        "where-separator"
    ];

    usedComponents = [
        EditableText
    ];

    // language=HTML
    get html() {
        return `
            <div content-type="object" class="container">
                <span class="divider where">
                    <${EditableText.elementName}
                            validate-type="string"
                            placeholder="${this.experienceType}"
                            element="div"
                            content-key="name"
                            content-type="component"
                    ></${EditableText.elementName}><span class="separator">${this.whereSeparator || ""}</span>
                    <${EditableText.elementName}
                            validate-type="string"
                            placeholder="Titel"
                            element="div"
                            content-key="title"
                            content-type="component"
                    ></${EditableText.elementName}>
                </span>
                <span class="divider when">
                    <${EditableText.elementName}
                            validate-type="date"
                            placeholder="Startår"
                            element="div"
                            content-key="from"
                            content-type="component"
                    ></${EditableText.elementName}> -
                    <${EditableText.elementName}
                            validate-type="nullable-date"
                            validate-type="string"
                            placeholder="Slutår"
                            element="div"
                            content-key="to"
                            content-type="component"
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
