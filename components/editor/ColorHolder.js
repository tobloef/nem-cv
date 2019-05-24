import BaseComponent from "../BaseComponent.js";
import {setItem} from "../../lib/storage-helper.js";

export default class ColorHolder extends BaseComponent {
    static observedAttributes = [
        "font-color",
        "background-color",
        "accent-color",
        "selected"
    ];

    // language=HTML
    get html() {
        return `
	        <div id="outer" role="button">
		        <p>T</p>
		        <div id="accent"></div>
	        </div>
        `;
    }

    script = () => {
        const div = this.shadowRoot.querySelector("#outer");
        div.addEventListener("click", evt => {
            evt.preventDefault();
            this.dispatchEvent(new CustomEvent("color-picked", {
                bubbles: true,
                composed:true,
                detail: {
                    colors: {
                        fontColor: this.fontColor,
                        backgroundColor: this.backgroundColor,
                        accentColor: this.accentColor
                    }
                }
            }));
        });
    };

    resizeFont = () => {
        this.shadowRoot.querySelector("p").style.fontSize = (this.offsetWidth*0.6) + "px";
    };

    // language=CSS
    get css() {
        return `
            p {
                font-family: "Times New Roman", "serif";
                font-size: 2.5em;
                color: ${this.fontColor};
                user-select: none;
            }
            
            #outer {
                cursor: pointer;
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                background-color: ${this.backgroundColor};
            }
            
            #accent {
                width: 100%;
                height: 12.5%;
                position: absolute;
                bottom: 0;
                background-color: ${this.accentColor};
            }
        `;
    };
}
