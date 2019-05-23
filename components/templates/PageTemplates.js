import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js";
import LayoutList from "../editor/LayoutList.js";
import {setItem} from "../../lib/storage-helper.js";

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

    script = () => {
        this.addEventListener("select-click", (evt) => {
            setItem("template", evt.detail);
            Router.navigate(Router.prefix + "/editor");
        });
        this.addEventListener("example-click", (evt) => {
            console.log("Example selected:", evt.detail);
        });
    };

    get html() {
        return `
            <h1>Vælg en skabelon</h1>

            <layout-list class="resizing"></layout-list>
        `;
    };
}
