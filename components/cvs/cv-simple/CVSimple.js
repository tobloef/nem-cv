import BaseComponent from "../../BaseComponent.js";
import EditableComponent from "../../shared/EditableComponent.js";
import IntroBox from "./IntroBox.js";
import simple from "../../../templates/simple.js";
import theme1 from "../../../templates/theme1.js";
import EducationItem from "./EducationItem.js";
import AppendButton from "./AppendButton.js";
import AppendableComponentList from "../../shared/AppendableComponentList.js";
import ExperienceItem from "./ExperienceItem.js";
import WorkAreaItem from "./WorkAreaItem.js";
import RemoveButton from "./RemoveButton.js";

export default class CVSimple extends BaseComponent {
    static observedAttributes = [];

    usedComponents = [
        IntroBox,
        EducationItem,
        ExperienceItem,
        WorkAreaItem,
        AppendButton,
        RemoveButton,
        AppendableComponentList
    ];

    // language=HTML
    get html() {
        return `
            <main>
                <intro-box></intro-box>
                <div class="other">
                    <section class="experience">
                        <h1>Erfaring</h1>
                        <appendable-component-list item-component="${ExperienceItem.elementName}" starting-amount="1">
                            <append-button slot="append-button"></append-button>
                            <remove-button slot="remove-button"></remove-button>
                        </appendable-component-list>
                        <appendable-component-list class="work-areas" item-component="${WorkAreaItem.elementName}" separator=", ">
                            <append-button slot="append-button"></append-button>
                            <remove-button slot="remove-button"></remove-button>
                        </appendable-component-list>
                    </section>
                    <section class="education">
                        <h1>Uddannelse</h1>
                        <appendable-component-list item-component="${EducationItem.elementName}" starting-amount="1">
                            <append-button slot="append-button"></append-button>
                            <remove-button slot="remove-button"></remove-button>
                        </appendable-component-list>
                    </section>
                </div>
            </main>
        `;
    }

    script = () => {
        BaseComponent.template = simple;
        BaseComponent.colors = theme1;

    };

    externalStyles = [];

    // language=CSS
    get css() {
        return `
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
                font-family: var(--h1);
                font-size: var(--h1-size);
                color: var(--font);
                margin-bottom: 0.5em;
            }
            .education {
                background-color: darkgreen;
            }
            .experience {
                background-color: rebeccapurple;
            }
            
            .education, .experience {
                padding: 2em;
            }
            
            appendable-component-list {
                display: block;
                padding-left: 1em;
            }
            
            appendable-component-list::part(list) {
                margin-bottom: 0.8em;
            }
            appendable-component-list::part(list-item) {
                margin-bottom: 0.8em;
            }
            .work-areas::part(container) {
                display: flex;
                flex-direction: row;
            }
        `
    };
}
