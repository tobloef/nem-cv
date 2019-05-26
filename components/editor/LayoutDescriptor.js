import BaseComponent from "../BaseComponent.js";
import CustomButton from "../shared/CustomButton.js";

export default class LayoutDescriptor extends BaseComponent {
    static observedAttributes = [
        "template-id",
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
                <router-link href="/examples/${this.templateId}" new-tab>
                    <custom-button secondary id="example">Se eksempel</custom-button>
                </router-link>
            </div>
        `;
    }

    script = () => {
        // Add event listeners to the different buttons
        const selectButton = this.shadowRoot.getElementById("select");
        selectButton.addEventListener("click", this._handleLayoutSelect);
        const image = this.shadowRoot.getElementById("image");
        image.addEventListener("click", this._handleLayoutSelect);
    };

    _handleLayoutSelect = () => {
        this.dispatchEvent(new CustomEvent("select-click", {
            bubbles: true,
            composed: true,
            detail: {
                templateId: this.templateId
            }
        }));
    };

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
            #image:hover,
            #image:focus,
            #image:active {
                cursor: pointer;
                box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
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
