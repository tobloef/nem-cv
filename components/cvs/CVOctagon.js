import IntroBox from "./shared/IntroBox.js";
import ExperienceItem from "./shared/ExperienceItem.js";
import WorkAreaItem from "./shared/WorkAreaItem.js";
import ListButton from "./shared/ListButton.js";
import AppendableComponentList from "./shared/AppendableComponentList.js";
import AbstractCV from "./AbstractCV.js";
import BaseComponent from "../BaseComponent.js";
import octagon from "./templates/octagon.js";

export default class CVOctagon extends AbstractCV {
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
                <section class="higher">
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
                <section class="lower">
                    
                </section>
                <section class="higher">
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
            </main>
        `;
    }

    script = () => {
        BaseComponent.template = octagon;
    };

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
