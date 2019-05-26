import BaseComponent from "../../BaseComponent.js";
import {validateObject} from "../../../lib/validation.js";
import paths from "../../../lib/constants/paths.js";

export default class EditableProfileImage extends BaseComponent {
    static observedAttributes = [
        "aspect-ratio",
        "src",
        "weirdfix"
    ];

    // language=HTML
    get html() {
        return `
            <div class="square">
                <img class="profile-picture"
                     src=${this.src || this.getPlaceholder()}
                     alt="Image of you">
            </div>
        `;
    }

    onClick = () => {
        let newURL = prompt("Indtast URL'en til dit billede.");
        this.setContent(newURL);
    };

    script = () => {
        this.image = this.shadowRoot.querySelector(".profile-picture");
        //if we are currently editing, add the capability to change the image by clicking on it
        if (BaseComponent.editMode) {
            this.image.addEventListener("click", this.onClick);
        }
    };

    getPlaceholder = () => {
        return paths["placeholder-person"];
    };

    getContent = () => {
        return this.image.src;
    };

    setContent = (content) => {
        if (content == null || this.validate(content) != null) {
            content = this.getPlaceholder();
        }
        this.setAttribute("src", content);
        this.render();
        this.updateValidationStyle();
    };

    validate = (url) => {
        url = url || this.image.src;
        if (url.includes(this.getPlaceholder())) { //if the contents are the same as the placeholder, it is invalid
            return "Du mangler et profilbillede."
        }
        if (!validateObject(url, "url") || url.endsWith("/null")) { //validate if the given url is actually a url
            return "Den indtastede URL for profilbilledet er ugyldigt."
        }
        return null;
    };

    updateValidationStyle = () => { //makes the image signify that there is an error with it.
        if (this.validate() != null) {
            this.image.classList.add("error");
        } else {
            this.image.classList.remove("error");
        }
    };

    // language=CSS
    get css() {
        return `
            :host {
                display: block;
                max-height: 100%;
                ${this.weirdfix || ""} /* this is a fix to an unresolved issue with webcomponents that don't act 
                properly for different pages. Due to time constraints, no better solution has been found so far*/
            }
            .square {
                width: 100%;
                height: 100%;
                max-height: 100%;
                position: relative;
                display: block;
            }
            .square:after {
                content: "";
                display: block;
                padding-bottom: ${(this.aspectRatio || 1) * 100}%;
            }
            .profile-picture {
                position: absolute;
                width: 100%;
                height: 100%;
                max-height: 100%;
                object-fit: cover;
            }
            
            .error {
                border: 2px solid red;
                border-radius: 3px; 
            }
        `
    };
}
