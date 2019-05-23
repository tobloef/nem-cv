import BaseComponent from "../BaseComponent.js";
import SideBar from "./SideBar.js";
import SideToggle from "./SideToggle.js";

export default class PageEditor extends BaseComponent {
    usedComponents = [
        SideBar,
        SideToggle
    ];

    // language=HTML
    get html() {
        return `
            <h1>PageEditor</h1>
            <side-bar></side-bar>
        `;
    };

    script = () => {

    };

    // language=CSS
    get css() {
        return `
            :host {
                
            }
        `;
    };
}
