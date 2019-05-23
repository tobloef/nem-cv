import BaseComponent from "../BaseComponent.js";

export default class SideToggle extends BaseComponent {
    // Observe "open" and "close" attributes s.t. both can be used
    static observedAttributes = [
        "open",
        "close"
    ];

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
            // theOne decides which entry is to be displayed and which attribute is on
            let theOne = 0;

            const open = this.getAttribute(attr[0]);
            if (open != null) {
                theOne = 1; // Toggle theOne so it corresponds to "open" and "open-image"
            }

            // theOther is the one to remove, found in the array as the other one (hence the name)
            let theOther = (theOne+1)%2;

            this.removeAttribute(attr[theOther]);
            images[theOther].style.display = "none";
            this.setAttribute(attr[theOne], "");
            images[theOne].style.display = "inline-block";
        });
    };

    // language=CSS
    get css() {
        return `
            /* Starts out invisible */ 
            #close-image {
                display: inline-block;
            }
             /* Starts out invisible */
            #open-image {
                display: none;
            }
            
            img {
                height: 50%;
                width: 50%;
            }
            
            button {
                width: 50px;
                height: 50px;
                box-shadow: 0 0 5px #aaa;
                /* flex to center image in button */
                display: flex;
                justify-content: center;
                align-items: center;
                /* Reset pesky button styling and color background*/
                padding: 0;
                border: 0;
                background-color: #F3F3F3;
            }
            
            /* Selector for desktop */
            /* makes button curvy on right side */
            @media(min-width: 550px) {
                button {
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                }
            }
            
            /* Selector for mobile */
            /* Sets curvature of button based on if it is */
            /* on left or right side of screen */
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
