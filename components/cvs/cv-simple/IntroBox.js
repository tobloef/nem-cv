import EditableComponent from "../../shared/EditableComponent.js";
import BaseComponent from "../../BaseComponent.js";
import ProfileImage from "./ProfileImage.js";

export default class IntroBox extends BaseComponent {
    image = null
    static observedAttributes = [];
    usedComponents = [
        EditableComponent,
        ProfileImage
    ];

    // language=HTML
    get html() {
        return `
            <section class="introbox">
                <profile-image aspect_ratio="2"></profile-image>
                <editable-component class="name" placeholder="Dit fulde navn" element="h1"></editable-component>
                <ul class="facts">
                    <li class="age">
                        <editable-component placeholder="Din alder" element="div"></editable-component>
                    </li>
                    <li class="city">
                        <editable-component placeholder="Din by" element="div"></editable-component>
                    </li>
                    <li class="email">
                        <editable-component placeholder="Din email" element="div"></editable-component>
                    </li>
                </ul>
                <h1 class="s-h1">Om mig</h1>
                <editable-component class="description" element="p" placeholder="Her kan du skrive en kort beskrivelse af dig selv."/>
            </section>
        `;
    }




    script = () => {
    };


    externalStyles = [];

    // language=CSS
    get css() {
        return `
            :host {
                min-width: 400px;
            }
            .introbox {
                background-color: aquamarine;
                min-height: 100vh;
                padding: 2em;
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
            
            li editable-component, .description{
                font-family: var(--p);
            }
        `
    };
}
