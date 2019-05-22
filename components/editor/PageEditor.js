import BaseComponent from "../BaseComponent.js";
import LayoutDescriptor from "./LayoutDescriptor.js";
import ColorList from "./ColorList.js";
import {layouts} from "../../constants/editor-definitions.js";

export default class PageEditor extends BaseComponent {
    usedComponents = [
        LayoutDescriptor,
        ColorList
    ];

    get html() {
        return `
            <h1>PageEditor</h1>
            <layout-descriptor 
                theme-id="edges"
                id="bleb"
                name="${layouts.edges.name}" 
                image="${layouts.edges.image}" 
                description="${layouts.edges.description}" 
            </layout-descriptor>
        `;
    };

    script = () => {
        const layout = this.shadowRoot.getElementById("bleb");
        layout.onSelect = this.handleSelect;
        layout.onExample = this.handleExample;
    };

    handleExample(themeId) {
        console.log("Showing example for:", themeId);
    };

    handleSelect(themeId) {
        console.log("Selecting:", themeId);
    };
}
