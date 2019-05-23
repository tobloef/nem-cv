import BaseComponent from "../BaseComponent.js";
import SideBar from "./SideBar.js";

export default class PageEditor extends BaseComponent {
    usedComponents = [
        SideBar
    ];

    get html() {
        return `
            <h1>PageEditor</h1>
            <side-bar></side-bar>
        `;
    };

    script = () => {

    };


}
