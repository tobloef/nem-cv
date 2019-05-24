import EditableComponent from "./EditableComponent.js";
import BaseComponent from "../../BaseComponent.js";

export default class ExperienceItem extends BaseComponent {
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
            <div content-type="object" class="container">
                <span class="divider where">
                    <editable-component
                            placeholder="${this.experienceType}"
                            element="div"
                            content-key="name"
                            content-type="component"
                    ></editable-component><span class="separator">${this.whereSeparator || ""}</span>
                    <editable-component
                            placeholder="Titel"
                            element="div"
                            content-key="title"
                            content-type="component"
                    ></editable-component>
                </span>
                <span class="divider when">
                    <editable-component
                            placeholder="Startår"
                            element="div"
                            content-key="from"
                            content-type="component"
                    ></editable-component> -
                    <editable-component
                            placeholder="Slutår"
                            element="div"
                            content-key="to"
                            content-type="component"
                    ></editable-component>
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
        `
    };
}
