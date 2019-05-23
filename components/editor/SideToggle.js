import BaseComponent from "../BaseComponent.js";

export default class SideToggle extends BaseComponent {
    static observedAttributes = [
        "open",
        "close"
    ];

    usedComponents = [];

    // language=HTML
    get html() {
        return `
            <button>
                <img id="open-image" src="/img/arrow.png" alt="Luk indstillinger">
                <img id="close-image" src="/img/sliders.png" alt="Åbn indstillinger">
            </button>
        `;
    }

    script = () => {
        const attr = [
            "open",
            "close"
        ];
        const images = [
            this.shadowRoot.getElementById("open-image"),
            this.shadowRoot.getElementById("close-image")
        ];
        const button = this.shadowRoot.querySelector("button");
        button.addEventListener("click", () => {
            let theOne = 0;

            const open = this.getAttribute(attr[0]);
            if (open != null) {
                theOne = 1;
            }

            let theOther = (theOne+1)%2;

            this.removeAttribute(attr[theOther]);
            images[theOther].style.display = "none";
            this.setAttribute(attr[theOne], "");
            images[theOne].style.display = "inline-block";
        });
    };



    externalStyles = [];

    // language=CSS
    get css() {
        return `
            #close-image {
                display: none;
            }
            
            #open-image {
                display: inline-block;
            }
            
            img {
                height: 50%;
                width: 50%;
            }
            
            button {
                width: 50px;
                height: 50px;
                box-shadow: 0 0 5px #aaa;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0;
                border: 0;
                background-color: #F3F3F3;
            }
            
            @media(min-width: 550px) {
                button {
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                }
            }
            
            @media(max-width: 550px) {
                :host([close])>button {
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                }

                :host([open])>button {
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                }
            }
        `
    };
}
