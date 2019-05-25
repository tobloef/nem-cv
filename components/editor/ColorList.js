import BaseComponent from "../BaseComponent.js";
import ColorHolder from "./ColorHolder.js";
import colors from "../../lib/constants/colors.js";

export default class ColorList extends BaseComponent {
    usedComponents = [
        ColorHolder
    ];

    script = () => {
        this.empty();
        for (const colorScheme of colors) {
            const element = document.createElement(ColorHolder.elementName);
            element.addEventListener("click", (e) => {
                this.dispatchEvent(new CustomEvent("color-picked", {
                    bubbles: true,
                    composed: true,
                    detail: {
                        colors: colorScheme
                    }
                }));
            });
            element.setAttribute("font-color", colorScheme.fontColor);
            element.setAttribute("background-color", colorScheme.backgroundColor);
            element.setAttribute("accent-color", colorScheme.accentColor);
            element.setAttribute("extra-background-color", colorScheme.extraBackgroundColor);
            new ResizeObserver(() => {
                element.style.height = element.clientWidth + "px";
                element.resizeFont();
            }).observe(element);
            this.shadowRoot.appendChild(element);
        }
    };

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
        `
    };
}
