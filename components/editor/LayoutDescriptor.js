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
    get css() {
        return `
            @media(min-width: 700px) {
                :host-context(.resizing) {
                    padding: 0;
                    margin: 2em;
                }
            }
            
            :host {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                padding: 3em 0 2em 0;
                margin: 0 0.5em;
            }
            
            #buttons {
                display: flex;
                justify-content: space-between;
            }
            
            #image {
                padding: 2px;
                margin: 0 0 0.5rem 0;
                border: 1px solid #aaa;
            }
            
            img {
                width: 100%;
                padding: 0;
            }
            
            h1, p {
                margin: 0 0 0.5rem 0;
                padding: 0;
            }
        `
    };
}
