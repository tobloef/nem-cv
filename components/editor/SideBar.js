import LayoutList from "./LayoutList.js";
import ColorList from "./ColorList.js";
import BaseComponent from "../BaseComponent.js";
import SideToggle from "./SideToggle.js";

export default class SideBar extends BaseComponent {
    static observedAttributes = [
        "open"
    ];

    usedComponents = [
        LayoutList,
        ColorList,
        SideToggle
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
            <side-toggle closed></side-toggle>
        `;
    }

    script = () => {
        const toggle = this.shadowRoot.querySelector("side-toggle");
        toggle.addEventListener("click", () => this.toggle());
    };

    toggle = () => {
        // Get valueless attribute "open" and toggle it based on if it is there
        const open = this.getAttribute("open");
        if (open != null) {
            this.removeAttribute("open");
        } else {
            this.setAttribute("open", "");
        }


    };

    // language=CSS
    get css() {
        return `
            :host {
                transform: translateX(calc(-100% - 50px));
                transition: 500ms cubic-bezier(0.77, 0, 0.175, 1) transform;
                display: block;
                height: 100%;
                max-width: 500px;
                position: relative;
            }
            
            :host([open]) {
                transform: translateX(0);
            }
            
            #container {
                display: flex;
                flex-direction: column;
                background-color: #F6F6F6;
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
            
            side-toggle {
                position: absolute;
                right: 0;
                transition: 750ms cubic-bezier(0.77, 0, 0.175, 1) right;
                top: 25px;
            }
            
            @media(max-width: 550px) {
                side-toggle[closed] {
                    right: -50px;
                }
            }
            
            @media(min-width: 550px) {
                side-toggle {
                    right: -50px;
                }
            }
            
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
                background-color: hsl(0, 0%, 99%);
                padding: 0.5em;
                max-width: 500px;
                width: 100%;
                box-shadow: -5px 0 5px #888;
                z-index: 1;
            }
        `
    };
}
