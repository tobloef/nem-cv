import BaseComponent from "../../BaseComponent.js";
import EditableText from "../shared/EditableText.js";

export default class ExperienceItemOctagon extends BaseComponent {
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
            <div content-type="object" part="experience-item">
                <span class="when small">
                    <editable-text
                            placeholder="Startår"
                            element="p"
                            multiline="false"
                            content-key="from"
                            content-type="component"
                    ></editable-text>
                    &nbsp;-&nbsp;
                    <editable-text
                            placeholder="Slutår"
                            element="p"
                            multiline="false"
                            content-key="to"
                            content-type="component"
                    ></editable-text>
                </span>
                <editable-text id="bigger"
                        placeholder="${this.experienceType}"
                        element="p"
                        multiline="false"
                        content-key="name"
                        content-type="component"
                ></editable-text>
                <editable-text
                        placeholder="Titel"
                        element="p"
                        multiline="false"
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

                flex-basis: 0;
                /*flex: 1 1 0;*/
                margin: 5px;
            }
            
            div {
                border-left: 5px solid black;
                padding-left: 10px;
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
        `
    };
}
