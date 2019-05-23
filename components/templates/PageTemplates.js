import BaseComponent from "../BaseComponent.js";

import LayoutList from "../editor/LayoutList.js";

export default class PageTemplates extends BaseComponent {
    usedComponents = [
        LayoutList
    ];

    get css() {
        //language=CSS
        return `
            :host {
                display: block;
                font-family: 'Open Sans', sans-serif;
                padding: 15px;
            }

            h1 {
                font-size: 2em;
                font-weight: bold;
            }
        `;
    }

    get html() {
        return `
            <h1>Vælg en skabelon</h1>

            <layout-list></layout-list>
        `;
    };
}
