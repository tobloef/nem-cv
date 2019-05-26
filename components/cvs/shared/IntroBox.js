import EditableText from "./EditableText.js";
import BaseComponent from "../../BaseComponent.js";
import EditableProfileImage from "./EditableProfileImage.js";

export default class IntroBox extends BaseComponent {
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
                                name="Navn"
                                element="h1">
                </${EditableText.elementName}>
                <ul class="facts">
                    <li class="age">
                        <${EditableText.elementName}
                                validate-type="age"
                                content-key="age"
                                content-type="component"
                                placeholder="Din alder"
                                is-age
                                name="Alder"
                                element="div">
                        </${EditableText.elementName}>
                    </li>
                    <li class="city">
                        <${EditableText.elementName}
                                validate-type="string"
                                content-key="city"
                                content-type="component"        
                                placeholder="Din by"
                                name="By"
                                element="div"
                        ></${EditableText.elementName}>
                    </li>
                    <li class="email">
                        <${EditableText.elementName}
                                validate-type="email"
                                placeholder="Din email" 
                                element="div"
                                content-key="email"
                                name="Email"
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
                                name="Beskrivelse"
                                multiline
                                placeholder="Her kan du skrive en kort beskrivelse af dig selv.">
                </${EditableText.elementName}>
            </section>
        `;
    }

    // language=CSS
    get css() {
        return `

            .introbox {
                background-color: var(--background-color);
                padding: 4em;
                height: 100%;
                display: flex;
                flex-direction: column;
            }

            h1, .name {
                font-size: 2em;
                margin-bottom: 0.5em;
                font-family: var(--h1);
                color: var(--font-color);
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
            
            ${EditableProfileImage.elementName} {
                max-width: 600px;
            }
        `
    };
}
