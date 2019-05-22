import EditableComponent from "../../shared/EditableComponent.js";
import BaseComponent from "../../BaseComponent.js";

export default class IntroBox extends BaseComponent {
    static observedAttributes = [];
    usedComponents = [
        EditableComponent
    ];

    // language=HTML
    get html() {
        return `
            <section class="introbox">
                <img class="profile-picture" src="../../../img/placeholder-person.png" alt="image of you">
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
                <h1>Om mig</h1>
                <editable-component element="p" placeholder="Her kan du skrive en kort beskrivelse af dig selv."/>
            </section>
        `;
    }

    script = () => {

    };

    externalStyles = [];

    // language=CSS
    get style() {
        return `
            :host {
            
            }
            .introbox {
                background-color: aquamarine;
                height: 100vh;
                max-height: 100vh;
                padding: 2em;
            }
            
            .profile-picture {
                max-width: 400px;
                margin-bottom: 2em;
            }
            
            h1 {
                font-size: 2em;
                margin-bottom: 1em;
            }
            
            .facts {
                list-style-type: disc;
                padding-left: 1.6em;
                margin-bottom: 1.5em;
            }
        `
    };
}
