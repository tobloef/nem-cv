'use strict';
import BaseComponent from "../../lib/BaseComponent.js";

export default class AddButton extends BaseComponent {
    html = `
        <span id="root">+</span>
    `;

    script = () => {
        this.addEventListener("click", () => console.log("Cool"))
    };

    style = `
        #root {
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            font-size: 18px;
            font-weight: 900;
            width: 20px;
            height: 20px;
            border: 2px solid black;
            border-radius: 50%;
        }
    `;
}
