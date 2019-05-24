import BaseComponent from "../BaseComponent.js";
import wait from '../../lib/wait.js';

export default class SliderButton extends BaseComponent {
    usedComponents = [];

    static observedAttributes = [
        "active"
    ];

    get html() {
        return `
            <button></button>
        `;
    }

    get css() {
        return `
            :host {
                display: block;

                --active-color: white;
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

            :host([active]) button {
                background: var(--active-color);
            }
        `;
    }

    styles() {

    }
}
