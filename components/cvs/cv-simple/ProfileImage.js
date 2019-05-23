import BaseComponent from "../../BaseComponent.js";

export default class ProfileImage extends BaseComponent {
    static observedAttributes = [
        "aspect_ratio"
    ];
    usedComponents = [];

    // language=HTML
    get html() {
        return `
            <div class="square">
                <img class="profile-picture"
                     src="../../../img/landing-bg.jpeg"
                     alt="image of you">
            </div>
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
            .square {
                width: 100%;
                max-width: 400px;
                position: relative;
            }
            .square:after {
                content: "";
                display: block;
                padding-bottom: ${this.aspect_ratio * 100}%;
            }
            .profile-picture {
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        `
    };
}
