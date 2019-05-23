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
            this.toggleSidebarIfNecessary();
            setItem("template", evt.detail);
        });

        this.addEventListener("example-click", (evt) => {
            console.log("Example selected:", evt.detail);
        });

        this.addEventListener("color-picked", (evt) => {
            this.toggleSidebarIfNecessary();
            setItem("colors", evt.detail.colors);
        });
    };

    toggleSidebarIfNecessary() {
        const width = document.documentElement.clientWidth;
        if (width <= 550) { // Is mobile-sized
            const sidebar = this.shadowRoot.querySelector("side-bar");
            sidebar.toggle();
        }
    }

    // language=CSS
    get css() {
        return `
            :host {
                
            }
        `;
    };
}
