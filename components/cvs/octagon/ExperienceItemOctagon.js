import EditableComponent from "../shared/EditableComponent.js";
import BaseComponent from "../../BaseComponent.js";

export default class ExperienceItemOctagon extends BaseComponent {
    static observedAttributes = [
        "experience-type",
        "where-separator"
    ];

    usedComponents = [
        EditableComponent
    ];

    // language=HTML
    get html() {
        return `
            <div content-type="object" part="experience-item">
                <span class="when small">
                    <editable-component
                            placeholder="Startår"
                            element="p"
                            content-key="from"
                            content-type="component"
                    ></editable-component>
                    &nbsp;-&nbsp;
                    <editable-component
                            placeholder="Slutår"
                            element="p"
                            content-key="to"
                            content-type="component"
                    ></editable-component>
                </span>
                <editable-component id="bigger"
                        placeholder="${this.experienceType}"
                        element="p"
                        content-key="name"
                        content-type="component"
                ></editable-component>
                <editable-component
                        placeholder="Titel"
                        element="p"
                        content-key="title"
                        content-type="component"
                ></editable-component>
            </div>
        `;
    }

    // language=CSS
    get css() {
        return `
            :host {
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding: 34px;
                background-color: #F3F3F3;
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
