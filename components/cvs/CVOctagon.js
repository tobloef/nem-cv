import IntroBox from "./shared/IntroBox.js";
import ExperienceItem from "./shared/ExperienceItem.js";
import WorkAreaItem from "./shared/WorkAreaItem.js";
import ListButton from "./shared/ListButton.js";
import EditableList from "./shared/EditableList.js";
import AbstractCV from "./AbstractCV.js";

export default class CVOctagon extends AbstractCV {
    static observedAttributes = [];

    usedComponents = [
        IntroBox,
        ExperienceItem,
        WorkAreaItem,
        ListButton,
        EditableList
    ];

    // language=HTML
    get html() {
        return `
            <main>
                <section class="higher">
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
                <section class="lower">
                    
                </section>
                <section class="higher">
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
            </main>
        `;
    }

    // language=CSS
    get css() {
        return `
            .higher {
                background-color: #99B2B4;
            }
            
            .lower {
                background-color: #3F3F3F;
            }
            
            /* Styling for experience items */
            
            *::part(list-item) {
                padding: 34px;
                background-color: #F3F3F3;
            }

            *::part(list-item) div {
                border-left: 5px solid black;
                padding-left: 10px;
                display: flex;
                flex-direction: column-reverse;
            }
            
            .octagon {
                /* Heavily inspired by https://stackoverflow.com/questions/19418486/hexagon-shape-with-a-border-outline */
                /* Clips the content to a octagon */
                --l: 14.645%;
                --h: 85.355%;
                -webkit-clip-path: polygon(50% 0%, var(--h) var(--l), 100% 50%, var(--h) var(--h), 50% 100%, var(--l) var(--h), 0% 50%, var(--l) var(--l));
                clip-path: polygon(50% 0%, var(--h) var(--l), 100% 50%, var(--h) var(--h), 50% 100%, var(--l) var(--h), 0% 50%, var(--l) var(--l));
            }
        `
    };
}
