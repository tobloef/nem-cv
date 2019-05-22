import BaseComponent from "../BaseComponent.js";
import LayoutDescriptor from "./LayoutDescriptor.js";
import ColorList from "./ColorList.js";
import LayoutList from "./LayoutList.js";

export default class PageEditor extends BaseComponent {
    usedComponents = [
        LayoutDescriptor,
        ColorList,
        LayoutList
    ];

    get html() {
        return `
            <h1>PageEditor</h1>
            <layout-list></layout-list>
            <color-list></color-list>
        `;
    };

    script = () => {

    };


}
