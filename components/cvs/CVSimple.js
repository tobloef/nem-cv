import BaseComponent from "../BaseComponent.js";
import IntroBox from "./shared/IntroBox.js";
import simple from "./templates/simple.js";
import colors from "./templates/colors.js";
import EditableList from "./shared/EditableList.js";
import ExperienceItem from "./shared/ExperienceItem.js";
import WorkAreaItem from "./shared/WorkAreaItem.js";
import ListButton from "./shared/ListButton.js";
import AbstractCV from "./AbstractCV.js";
import {getStorageItem} from "../../lib/storage-helper.js";

export default class CVSimple extends AbstractCV {
    usedComponents = [
        IntroBox,
        ExperienceItem,
        WorkAreaItem,
        ListButton,
        EditableList
    ];

    colors = null;

    // language=HTML
    get html() {
        return `
            <main>
                <intro-box></intro-box>
                <div class="other">
                    <section class="experience">
                        <h1>Erfaring</h1>
                        <${EditableList.elementName}
                            id="experience-list"
                            content-key="employers"
                            content-type="array"
                            item-component="${ExperienceItem.elementName}" 
                            starting-amount="1"
                            name="Erfaringer"
                        >
                            <list-button icon="add" slot="append-button"></list-button>
                            <list-button icon="remove" slot="remove-button"></list-button>
                        </${EditableList.elementName}>
                        <${EditableList.elementName}
                            id="sector-list"
                            content-key="sectors"
                            content-type="array"
                            class="work-areas"
                            item-component="${WorkAreaItem.elementName}"
                            separator=", "
                            starting-amount="1"
                            name="Brancher"
                        >
                            <list-button icon="add" slot="append-button"></list-button>
                            <list-button icon="remove" slot="remove-button"></list-button>
                        </${EditableList.elementName}>
                    </section>
                    <section class="education">
                        <h1>Uddannelse</h1>
                        <${EditableList.elementName}
                            id="education-list"
                            content-key="education"
                            content-type="array"
                            item-component="${ExperienceItem.elementName}" 
                            starting-amount="1"
                            name="Uddannelser"
                        >
                            <list-button icon="add" slot="append-button"></list-button>
                            <list-button icon="remove" slot="remove-button"></list-button>
                        </${EditableList.elementName}>
                    </section>
                </div>
            </main>
        `;
    }

    script = () => {
        BaseComponent.template = simple;
        BaseComponent.colors = colors;
        this.colors = JSON.parse(getStorageItem("grp2_colors"));
    };

        educationWhereSeparator = ", ";
        experienceWhereSeparator = ", ";

    // language=CSS
    get css() {
        return `
            body {
                margin: 0;
                color: ${"black" || this.colors.fontColor};
            }
            li {
                user-select: none;
            }

            .divider {
                display: flex;
            }
            .facts li {
                display: flex;
            }

            main {
                display: flex;
                flex-direction: column;
            }

            .other {
                background-color: lightgray;
                width: 100%;
            }
            .other section {
                min-height: 50vh;
            }
            .other section h1 {
                font-family: var(--h1);
                font-size: var(--h1-size);
                color: var(--font);
                margin-bottom: 0.5em;
            }
            .education {
                background-color: ${"gray" || this.colors.accentColor};
            }
            .experience {
                background-color: rebeccapurple;
            }

            .education, .experience {
                padding: 2em;
            }

            ${EditableList.elementName} {
                display: block;
                padding-left: 1em;
            }

            ${EditableList.elementName}::part(list) {
                margin-bottom: 0.8em;
            }
            ${EditableList.elementName}::part(list-item) {
                margin-bottom: 0.8em;
                font-family: var(--p);
            }

            .work-areas::part(list) {
                margin-bottom: 0;
                margin-right: 1em;
            }
            
            .work-areas::part(container) {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            .work-areas::part(list-item) {
                font-family: var(--p);
                font-size: 1.2em;
            }
            .work-areas::part(button) {
                height: 1em;
            }
            
            #experience-list {
                margin-bottom: 3em;
            }

            @media screen and   (min-width: 1024px) {
                main {
                    flex-direction: row;
                    min-height: 100vh;
                }
                
                intro-box {
                min-width: 500px;
                }
                
                .other section {
                }
            }
        `
    };
}
