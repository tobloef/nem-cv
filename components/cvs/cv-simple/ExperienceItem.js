import EditableComponent from "../../shared/EditableComponent.js";
import BaseComponent from "../../BaseComponent.js";

export default class ExperienceItem extends BaseComponent {
    static observedAttributes = [
        "experience-type"
    ];

    usedComponents = [
        EditableComponent
    ];

    // language=HTML
    get html() {
        return `
            <div content-type="object">
                <span class="divider">
                    <editable-component
                            placeholder="${this.experienceType}"
                            element="div"
                            content-key="name"
                            content-type="component"
                    ></editable-component> -
                    <editable-component
                            placeholder="Titel"
                            element="div"
                            content-key="title"
                            content-type="component"
                    ></editable-component>
                </span>
                <span class="divider">
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
