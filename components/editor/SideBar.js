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
            <side-toggle open></side-toggle>
        `;
    }

    script = () => {

    };

    externalStyles = [];

    // language=CSS
    get css() {
        return `
            #container {
                display: flex;
                flex-direction: column;
                background-color: #F6F6F6;
                max-width: 500px;
                height: 100%;
                box-shadow: 0 0 5px #888;
            }
            
            layout-list {
                flex: 1 1 0;
                height: 100%;
                padding: 10px;
                margin: 0;
                overflow-y: auto;
            }
            
            /*@media(max-width: 500px) {*/
                side-toggle {
                    
                }
            /*}*/
            
            @media(max-width: 425px) {
                layout-list {
                    padding-bottom: 120px;
                }
            }
            
            @media(max-width: 320px) {
                layout-list {
                    padding-bottom: 100px;
                }
            }
            
            #color-list {
                background-color: inherit;
                padding: 0.5em;
                max-width: 500px;
                width: 100%;
                box-shadow: -5px 0 5px #888;
            }
            
            /*color-list {*/
            /*    position: relative;*/
            /*}*/
        `
    };
}
