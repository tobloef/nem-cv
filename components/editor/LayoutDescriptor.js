import BaseComponent from "../BaseComponent.js";

export default class LayoutDescriptor extends BaseComponent {
    static observedAttributes = [
        "theme-id",
        "name",
        "image",
        "description"
    ];

    usedComponents = [];

    // language=HTML
    get html() {
        return `
            <div id="image">
                <img src="${this.image}" alt="${this.name}">
            </div>
            <h1>${this.name}</h1>
            <p>${this.description}</p>
            <div id="buttons">
                <button id="select">Vælg tema</button>
                <button id="example">Se eksempel</button>
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
    get style() {
        return `
            :host {
                padding: 3pt;
            }
            
            #buttons {
                display: flex;
                justify-content: space-between;
            }
            
            #image {
                padding: 2px;
                border: 1px solid #aaa;
            }
            
            img {
                width: 100%;
            }
        `
    };
}
