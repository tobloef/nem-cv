import EditableComponent from "./EditableComponent.js";
import BaseComponent from "../../BaseComponent.js";
import ProfileImage from "./ProfileImage.js";
import {getStorageItem} from "../../../lib/storage-helper.js";

export default class IntroBox extends BaseComponent {
    image = null;
    colors = null;
    static observedAttributes = [];
    usedComponents = [
        EditableComponent,
        ProfileImage
    ];

    // language=HTML
    get html() {
        return `
            <section class="introbox">
                <profile-image aspect-ratio="1" content-key="picture" content-type="component"></profile-image>
                <editable-component
                                content-key="name"
                                content-type="component"
                                class="name"
                                placeholder="Dit fulde navn"
                                element="h1">
                </editable-component>
                <ul class="facts">
                    <li class="age">
                        <editable-component
                                content-key="age"
                                content-type="component"
                                placeholder="Din alder"
                                element="div">
                        </editable-component>
                    </li>
                    <li class="city">
                        <editable-component
                                content-key="city"
                                content-type="component"        
                                placeholder="Din by"
                                element="div"
                        ></editable-component>
                    </li>
                    <li class="email">
                        <editable-component
                                placeholder="Din email" 
                                element="div"
                                content-key="email"
                                content-type="component"
                        ></editable-component>
                    </li>
                </ul>
                <h1 class="s-h1">Om mig</h1>
                <editable-component
                                class="description"
                                element="p"
                                content-key="description"
                                content-type="component"
                                multiline
                                placeholder="Her kan du skrive en kort beskrivelse af dig selv.">
                </editable-component>
            </section>
        `;
    }


    script = () => {
        this.colors = JSON.parse(getStorageItem("grp2_colors"));
    };


    externalStyles = [];

    // language=CSS
    get css() {
        return `

            .introbox {
                background-color: ${"white" || this.colors.backgroundColor};
                
                padding: 4em;
            }

            h1, .name {
                font-size: 2em;
                margin-bottom: 0.5em;
                font-family: var(--h1);
                color: var(--font);
            }

            profile-image {
                margin-bottom: 2em;
            }

            .facts {
                list-style-type: disc;
                padding-left: 1.6em;
                margin-bottom: 1.5em;
            }

            li editable-component, .description {
                font-family: var(--p);
            }

            li editable-component {
                font-size: var(--p-size);
            }
        `
    };
}
