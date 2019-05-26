import BaseComponent from "../BaseComponent.js";
import wait from '../../lib/wait.js';

export default class SliderButton extends BaseComponent {
    usedComponents = [];

    static observedAttributes = [
        "active"
    ];

    get html() {
        return `
            <button role="option"  aria-label="Vælg Billede"></button>
        `;
    }

    // language=CSS
    get css() {
        return `
            :host {
                display: block;

                --active-color: white;
                --hover-color: #aaa;
                --inactive-color: #727272;
                --size: 15px;
            }

            button {
                background: var(--inactive-color);
                transition: 200ms ease-in-out background-color;
                border: none;
                border-radius: 100%;
                width: var(--size);
                height: var(--size);
            }
            button:hover {
                cursor: pointer;
                background: var(--hover-color);
            }

            :host([active]) button {
                background: var(--active-color);
            }
        `;
    }

    styles() {

    }
}
