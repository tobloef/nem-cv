import BaseComponent from "../../BaseComponent.js";
import EditableComponent from "../../shared/EditableComponent.js";
import IntroBox from "./IntroBox.js";
import simple from "../../../templates/simple.js";
import {stringToStyleSheet} from "../../../lib/stylesheet-utils.js";

export default class CVSimple extends BaseComponent {
    static observedAttributes = [];

    usedComponents = [
        EditableComponent,
        IntroBox
    ];

    // language=HTML
    get html() {
        return `
            <main>
                <intro-box></intro-box>
                <div class="other">
                    <section class="education">
                        <h1>Uddannelse</h1>
                        <ul class="education-list">
                            <li class="education-item" style="display: flex; justify-content: space-between">
					<span class="divider">
						<editable-component placeholder="Uddannelsessted" element="div"></editable-component> -
						<editable-component placeholder="Titel" element="div"></editable-component>
					</span>
                                <span class="divider">
						<editable-component placeholder="Startår" element="div"></editable-component> -
						<editable-component placeholder="Slutår" element="div"></editable-component>
					</span>
                            </li>
                        </ul>
                    </section>
                    <section class="experience">
                        <h1>Erfaring</h1>
                        <ul class="experience-list">
                            <li class="experience-item" style="display: flex; justify-content: space-between">
                                <div class="divider">
                                    <editable-component placeholder="Firma" element="div"></editable-component>
                                    <div> -</div>
                                    <editable-component placeholder="Titel" element="div"></editable-component>
                                </div>
                                <div class="divider">
                                    <editable-component placeholder="Startår" element="div"></editable-component>
                                    <div> -</div>
                                    <editable-component placeholder="Slutår" element="div"></editable-component>
                                </div>
                            </li>
                        </ul>
                        <ul class="work-areas">
                        </ul>
                    </section>
                </div>
            </main>
        `;
    }

    script = () => {
        BaseComponent.template = stringToStyleSheet(simple);
        BaseComponent.color = `
            
        `;
    };

    externalStyles = [];

    // language=CSS
    get style() {
        return `
            editable-component:empty {
            }

            editable-component *:before:empty{
                content: attr(placeholder);
            }
            body {
                margin: 0;
            }
            li {
                user-select: none;
            }

            .divider {
                display: flex;
                flex-direction: row;
            }
            .facts li {
                display: flex;
            }

            main {
                display: flex;
                flex-direction: row;
                min-height: 100vh;
            }

            .other {
                background-color: lightgray;
                width: 100%;
            }
            .other section {
                height: 100%;
                max-height: 50vh;
            }
            .other section h1 {
            }
            .education {
                background-color: darkgreen;
            }
            .experience {
                background-color: rebeccapurple;
            }

        `
    };
}
