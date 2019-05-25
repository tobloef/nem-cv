import EditableText from "./EditableText.js";
import BaseComponent from "../../BaseComponent.js";
import EditableProfileImage from "./EditableProfileImage.js";
import {getStorageItem} from "../../../lib/storage-helper.js";

export default class IntroBox extends BaseComponent {
    image = null;
    colors = null;
    static observedAttributes = [];
    usedComponents = [
        EditableText,
        EditableProfileImage
    ];

    // language=HTML
    get html() {
        return `
            <section class="introbox">
                <${EditableProfileImage.elementName}
                    aspect-ratio="1"
                    content-key="picture"
                    content-type="component">
                </${EditableProfileImage.elementName}>
                <${EditableText.elementName}
                                validate-type="string"
                                content-key="name"
                                content-type="component"
                                class="name"
                                placeholder="Dit fulde navn"
                                element="h1">
                </${EditableText.elementName}>
                <ul class="facts">
                    <li class="age">
                        <${EditableText.elementName}
                                validate-type="number"
                                content-key="age"
                                content-type="component"
                                placeholder="Din alder"
                                element="div">
                        </${EditableText.elementName}>
                    </li>
                    <li class="city">
                        <${EditableText.elementName}
                                validate-type="string"
                                content-key="city"
                                content-type="component"        
                                placeholder="Din by"
                                element="div"
                        ></${EditableText.elementName}>
                    </li>
                    <li class="email">
                        <${EditableText.elementName}
                                validate-type="email"
                                placeholder="Din email" 
                                element="div"
                                content-key="email"
                                content-type="component"
                        ></${EditableText.elementName}>
                    </li>
                </ul>
                <h1 class="s-h1">Om mig</h1>
                <${EditableText.elementName}
                                validate-type="string"
                                class="description"
                                element="p"
                                content-key="description"
                                content-type="component"
                                multiline
                                placeholder="Her kan du skrive en kort beskrivelse af dig selv.">
                </${EditableText.elementName}>
            </section>
        `;
    }


    script = () => {
        this.colors = getStorageItem("colors");
    };


    externalStyles = [];

    // language=CSS
    get css() {
        return `

            .introbox {
                background-color: ${this.colors.backgroundColor};
                padding: 4em;
                height: 100%;
            }

            h1, .name {
                font-size: 2em;
                margin-bottom: 0.5em;
                font-family: var(--h1);
                color: ${this.colors.fontColor};
            }

            ${EditableProfileImage.elementName} {
                margin-bottom: 2em;
            }

            .facts {
                list-style-type: disc;
                padding-left: 1.6em;
                margin-bottom: 1.5em;
            }

            li ${EditableText.elementName}, .description {
                font-family: var(--p);
            }

            li ${EditableText.elementName} {
                font-size: var(--p-size);
            }
        `
    };
}
