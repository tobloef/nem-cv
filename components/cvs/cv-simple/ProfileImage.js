import BaseComponent from "../../BaseComponent.js";

export default class ProfileImage extends BaseComponent {
    static observedAttributes = [];
    usedComponents = [];

    // language=HTML
    get html() {
        return `
            <img class="profile-picture" src="../../../img/placeholder-person.png" alt="image of you">
        `;
    }

    onClick = () => {
        let newURL = prompt("Enter the link to your image. You must have this uploaded elsewhere");

        function isValid(url) {
            return url != null;
        }

        if (isValid(newURL)) {
            this.image.src = newURL;
        }
        else {
            alert("Invalid URL. Please try with another")
        }
    };

    script = () => {
        this.image = this.shadowRoot.querySelector(".profile-picture");
        this.image.addEventListener("click", this.onClick);
    };

    externalStyles = [];

    // language=CSS
    get style() {
        return `
            :host {
                padding-top: 100%;
            }
            .profile-picture {
                object-fit: cover;
                max-width: 100%;
                height: auto;
            }
        `
    };
}
