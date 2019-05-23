import BaseComponent from "../BaseComponent.js";
import CustomButton from "../shared/CustomButton.js";

export default class LayoutDescriptor extends BaseComponent {
    static observedAttributes = [
        "theme-id",
        "name",
        "image",
        "description"
    ];

    usedComponents = [
        CustomButton
    ];

    // language=HTML
    get html() {
        return `
            <div id="image">
                <img src="${this.image}" alt="${this.name}">
            </div>
            <h1>${this.name}</h1>
            <p>${this.description}</p>
            <div id="buttons">
                <custom-button id="select">Vælg tema</custom-button>
                <custom-button secondary id="example">Se eksempel</custom-button>
            </div>
        `;
    }

    script = () => {
        const selectButton = this.shadowRoot.getElementById("select");
        selectButton.addEventListener("click", () => this.onSelect(this.themeId));

        const exampleButton = this.shadowRoot.getElementById("example");
        exampleButton.addEventListener("click", () => this.onExample(this.themeId));
    };

    externalStyles = [];

    // language=CSS
    get css() {
        return `            
            :host {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                font-family: 'Open Sans', sans-serif;
            }
            
            #buttons {
                display: flex;
                justify-content: space-between;
                font-size: 1.5rem;
            }
            
            #image {
                padding: 2px;
                margin: 0 0 1rem 0;
                border: 1px solid #aaa;
            }
            
            img {
                width: 100%;
                padding: 0;
            }
            
            h1, p {
                margin: 0 0 1rem 0;
                padding: 0;
            }
            
            h1 {
                font-size: 2rem;
            }
        `
    };
}
