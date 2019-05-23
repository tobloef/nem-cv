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
            <layout-list></layout-list>
            <div>
                <color-list></color-list>
            </div>
        `;
    }

    script = () => {

    };

    externalStyles = [];

    // language=CSS
    get style() {
        return `
            div {
                padding: 0.5em;
                max-width: 100%;
                box-shadow: 0 0 5px #888;
            }
        `
    };
}
