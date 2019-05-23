import LayoutList from "./LayoutList.js";
import ColorList from "./ColorList.js";
import BaseComponent from "../BaseComponent.js";

export default class SideBar extends BaseComponent {
    static observedAttributes = [];

    usedComponents = [
        LayoutList,
        ColorList
    ];

    // language=HTML
    get html() {
        return `
            <div id="container">
                <layout-list class="flex-list"></layout-list>
                <div id="color-list">
                    <color-list></color-list>
                </div>
            </div>
        `;
    }

    script = () => {

    };

    externalStyles = [];

    // language=CSS
    get css() {
        return `
            #container {
                background-color: #F6F6F6;
                max-width: 500px;
            }
            
            #color-list {
                background-color: inherit;
                position: fixed;
                bottom: 0;
                padding: 0.5em;
                max-width: inherit;
                width: 100%;
                box-shadow: 0 0 5px #888;
            }
            
            /*color-list {*/
            /*    position: relative;*/
            /*}*/
        `
    };
}
