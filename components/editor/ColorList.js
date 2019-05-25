import BaseComponent from "../BaseComponent.js";
import ColorHolder from "./ColorHolder.js";
import {colors} from "../../constants/themes.js";

export default class ColorList extends BaseComponent {
    static observedAttributes = [];

    usedComponents = [
        ColorHolder
    ];

    // language=HTML
    get html() {
        return ``;
    }

    script = () => {
        this.empty();
        for (const item of colors) {
            const element = document.createElement(ColorHolder.elementName);
            element.setAttribute("font-color", item.fontColor);
            element.setAttribute("background-color", item.backgroundColor);
            element.setAttribute("accent-color", item.accentColor);
            element.setAttribute("extra-background-color", item.extraBackgroundColor);
            // element.addEventListener("resize", evt => {
            //     const elm = evt.target;
            //     const width = elm.style.width;
            //     // noinspection JSSuspiciousNameCombination
            //     elm.style.height = width;
            //     console.log(width);
            // });
            new ResizeObserver(() => {
                // noinspection JSSuspiciousNameCombination
                element.style.height = element.clientWidth + "px";
                element.resizeFont();
            }).observe(element);
            this.shadowRoot.appendChild(element);
        }
    };

    externalStyles = [];

    // language=CSS
    get css() {
        return `
            :host {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }

            color-holder {
                flex: 1 1 0;
                margin: 10px;
            }

            color-holder:hover {
                box-shadow: hsla(0, 0%, 60%, 1) 0 0 7px 0;
            }

            :host(.vertical) {
                flex-direction: column;
            }

            /*@media(max-width: 340px) {*/
            /*    color-holder>p {*/
            /*        font-size: 2em;*/
            /*    }*/
            /*    */
            /*    color-holder>#outer {*/
            /*        width: 3em;*/
            /*        height: 3em;*/
            /*    }*/
            /*}*/
        `
    };
}
