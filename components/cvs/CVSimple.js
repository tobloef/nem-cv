import BaseComponent from "../BaseComponent.js";
import IntroBox from "./shared/IntroBox.js";
import simple from "./templates/simple.js";
import colors from "./templates/colors.js";
import AppendableComponentList from "./shared/AppendableComponentList.js";
import ExperienceItem from "./shared/ExperienceItem.js";
import WorkAreaItem from "./shared/WorkAreaItem.js";
import ListButton from "./shared/ListButton.js";
import AbstractCV from "./AbstractCV.js";

export default class CVSimple extends AbstractCV {
    static observedAttributes = [];

    usedComponents = [
        IntroBox,
        ExperienceItem,
        WorkAreaItem,
        ListButton,
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
                        <appendable-component-list
                            id="experience-list"
                            content-key="employers"
                            content-type="array"
                            item-component="${ExperienceItem.elementName}" 
                            starting-amount="1"
                        >
                            <list-button icon="add" slot="append-button"></list-button>
                            <list-button icon="remove" slot="remove-button"></list-button>
                        </appendable-component-list>
                        <appendable-component-list
                            id="sector-list"
                            content-key="sectors"
                            content-type="array"
                            class="work-areas"
                            item-component="${WorkAreaItem.elementName}"
                            separator=", "
                            starting-amount="1"
                        >
                            <list-button icon="add" slot="append-button"></list-button>
                            <list-button icon="remove" slot="remove-button"></list-button>
                        </appendable-component-list>
                    </section>
                    <section class="education">
                        <h1>Uddannelse</h1>
                        <appendable-component-list
                            id="education-list"
                            content-key="education"
                            content-type="array"
                            item-component="${ExperienceItem.elementName}" 
                            starting-amount="1"
                        >
                            <list-button icon="add" slot="append-button"></list-button>
                            <list-button icon="remove" slot="remove-button"></list-button>
                        </appendable-component-list>
                    </section>
                </div>
            </main>
        `;
    }

    script = () => {
        BaseComponent.template = simple;
        BaseComponent.colors = colors;
    };

    educationWhereSeparator = ", ";
    experienceWhereSeparator = ", ";

    getContent = () => {
        const obj = {};
        super.getContent(obj);
        return obj;
    };

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
            .work-areas::part(list-item) {
                font-family: var(--p);
            }
        `
    };
}
