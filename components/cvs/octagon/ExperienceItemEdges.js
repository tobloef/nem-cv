import EditableText from "../shared/EditableText.js";
import ExperienceItem from "../shared/ExperienceItem.js";

export default class ExperienceItemEdges extends ExperienceItem {
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
            <div content-type="object" part="experience-item">
                <span class="when small">
                    <editable-text
                            validate-type="date"
                            placeholder="Startdato"
                            element="p"
                            name="Startdato"
                            content-key="from"
                            content-type="component"
                    ></editable-text>
                    &nbsp;-&nbsp;
                    <editable-text
                            placeholder="Slutdato"
                            name="Slutdato"
                            element="p"
                            content-key="to"
                            content-type="component"
                            ${endDateValidation}
                    ></editable-text>
                </span>
                <editable-text id="bigger"
                        validate-type="string"
                        placeholder="${experienceType}"
                        element="p"
                        content-key="name"
                        name="Navn på ${experienceType.toLowerCase()}"
                        content-type="component"
                ></editable-text>
                <editable-text
                        validate-type="string"
                        placeholder="Titel"
                        element="p"
                        name="Titel hos ${experienceType.toLowerCase()}"
                        content-key="title"
                        content-type="component"
                ></editable-text>
            </div>
        `;
    }

    // language=CSS
    get css() {
        return `
            :host {
                display: flex;
                justify-content: space-between;
                padding: 34px;
                background-color: #F3F3F3;
                max-width: 100%;
                background-color: var(--background-color);
                color: var(--font-color);;
                flex-basis: 0;
                margin: 5px;
            }
            
            div {
                border-left: 5px solid black;
                padding-left: 10px;
                max-width: 100%;
            }
            
            editable-text {
                max-width: 100%;
                word-wrap: break-word;
            }
            
            .when {
                display: flex;
                flex-direction: row;
                margin-bottom: 0.5em;
            }
            
            .small {
                font-size: 0.9em;
            }
            
            #bigger {
                font-size: 1.2em;
                margin-bottom: 0.2em;
            }
            
            @media(max-width: 350px) {
                :host {
                    font-size: 0.9em;
                }
            }
        `
    };
}
