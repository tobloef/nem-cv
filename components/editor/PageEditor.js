import BaseComponent from "../BaseComponent.js";
import SideBar from "./SideBar.js";
import SideToggle from "./SideToggle.js";
import {setItem} from "../../lib/storage-helper.js";

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
        // Use the storage-helper
        this.addEventListener("select-click", (evt) => {
            setItem("template", evt.detail);
        });
        this.addEventListener("example-click", (evt) => {
            console.log("Example selected:", evt.detail);
        });
    };

    // language=CSS
    get css() {
        return `
            :host {
                
            }
        `;
    };
}
