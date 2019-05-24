import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js";
import LayoutList from "../editor/LayoutList.js";
import {setItem} from "../../lib/storage-helper.js";
import NavBar from "../shared/NavBar.js";

export default class PageTemplates extends BaseComponent {
    usedComponents = [
        LayoutList,
        NavBar
    ];

    get css() {
        //language=CSS
        return `
            :host {
                display: block;
                font-family: 'Open Sans', sans-serif;
                padding: 85px 15px 15px;
            }

            h1 {
                font-size: 2em;
                font-weight: bold;
                margin-bottom: 1em;
            }

            nav-bar {
                /*width: 100%;*/
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 10;
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
            <nav-bar></nav-bar>

            <h1>Vælg en skabelon</h1>

            <layout-list class="resizing"></layout-list>
        `;
    };
}
