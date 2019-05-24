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
            <div content-type="object" part="experience-item">
                <span class="divider where">
                    <editable-component
                            placeholder="${this.experienceType}"
                            element="p"
                            content-key="name"
                            content-type="component"
                    ></editable-component>${this.whereSeparator || ""}
                    <editable-component
                            placeholder="Titel"
                            element="p"
                            content-key="title"
                            content-type="component"
                    ></editable-component>
                </span>
                <span class="divider when">
                    <editable-component
                            placeholder="Startår"
                            element="p"
                            content-key="from"
                            content-type="component"
                    ></editable-component><p> - </p>
                    <editable-component
                            placeholder="Slutår"
                            element="p"
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
            :host {
                display: flex;
                justify-content: space-between;
                width: 100%;
            }
            .divider {
                display: flex;
                flex-direction: row;
            }

            button {
                display: inline;
            }
        `
    };
}
