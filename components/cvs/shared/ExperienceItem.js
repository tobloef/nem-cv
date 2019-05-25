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
            <div content-type="object" class="container" part="experience-item">
                <span class="divider where">
                    <${EditableText.elementName}
                            placeholder="${this.experienceType}"
                            element="p"
                            content-key="name"
                            content-type="component"
                    ></${EditableText.elementName}><span class="separator">${this.whereSeparator || ""}</span>
                    <${EditableText.elementName}
                            placeholder="Titel"
                            element="p"
                            content-key="title"
                            content-type="component"
                    ></${EditableText.elementName}>
                </span>
                <span class="divider when">
                    <${EditableText.elementName}
                            placeholder="Startår"
                            element="p"
                            content-key="from"
                            content-type="component"
                    ></${EditableText.elementName}><p> - </p>
                    <${EditableText.elementName}
                            placeholder="Slutår"
                            element="p"
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
