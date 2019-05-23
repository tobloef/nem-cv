import EditableComponent from "../../shared/EditableComponent.js";
import BaseComponent from "../../BaseComponent.js";

export default class EducationItem extends BaseComponent {
    static observedAttributes = [];
    usedComponents = [
        EditableComponent
    ];

    // language=HTML
    get html() {
        return `
            <span class="divider">
                <editable-component placeholder="Uddannelsessted" element="div"></editable-component> -
                <editable-component placeholder="Titel" element="div"></editable-component>
            </span>
            <span class="divider">
                <editable-component placeholder="Startår" element="div"></editable-component> -
                <editable-component placeholder="Slutår" element="div"></editable-component>
            </span>
        `;
    }

    script = () => {

    };

    externalStyles = [];

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
        `
    };
}
