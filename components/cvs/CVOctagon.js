import IntroBox from "./shared/IntroBox.js";
import ExperienceItemOctagon from "./octagon/ExperienceItemOctagon.js";
import WorkAreaItem from "./shared/WorkAreaItem.js";
import ListButton from "./shared/ListButton.js";
import EditableList from "./shared/EditableList.js";
import AbstractCV from "./AbstractCV.js";
import BaseComponent from "../BaseComponent.js";
import octagon from "./templates/octagon.js";
import colors from "./templates/colors.js";
import ProfileImage from "./shared/ProfileImage.js";

export default class CVOctagon extends AbstractCV {
    static observedAttributes = [];

    usedComponents = [
        ExperienceItemOctagon,
        ProfileImage,
        WorkAreaItem,
        ListButton,
        EditableList
    ];

    // language=HTML
    get html() {
        return `
            <main>
                <section id="top" class="higher">
                    <profile-image class="octagon" aspect-ratio="1"></profile-image>
                    <div>
                        <div id="name-box">
                            <editable-component
                                            content-key="name"
                                            content-type="component"
                                            class="name"
                                            placeholder="DIT FULDE NAVN"
                                            element="h1">
                            </editable-component>
                        </div>
                        
                        <h2>Info</h2>
                        <ul class="facts">
                            <li class="age">
                                <editable-component
                                        content-key="age"
                                        content-type="component"
                                        placeholder="Din alder"
                                        element="p">
                                </editable-component>
                            </li>
                            <li class="city">
                                <editable-component
                                        content-key="city"
                                        content-type="component"        
                                        placeholder="Din by"
                                        element="p"
                                ></editable-component>
                            </li>
                            <li class="email">
                                <editable-component
                                        placeholder="Din email" 
                                        element="p"
                                        content-key="email"
                                        content-type="component"
                                ></editable-component>
                            </li>
                        </ul>
                    
                        <h2>Brancher</h2>
                        <${EditableList.elementName}
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
                        </${EditableList.elementName}>
                    </div>
                </section>
                
                <section class="lower">
                    <h1>OM MIG</h1>
                    <editable-component
                                    class="description"
                                    element="p"
                                    content-key="description"
                                    content-type="component"
                                    placeholder="Her kan du skrive en kort beskrivelse af dig selv.">
                    </editable-component>
                </section>
                
                <section id="experiences" class="higher">
                    <div class="experience">
                        <h2>ERFARING</h2>
                        <${EditableList.elementName}
                            id="experience-list"
                            content-key="employers"
                            content-type="array"
                            item-component="${ExperienceItemOctagon.elementName}" 
                            starting-amount="1"
                        >
                            <list-button icon="add" slot="append-button"></list-button>
                            <list-button icon="remove" slot="remove-button"></list-button>
                        </${EditableList.elementName}>
                    </div>
                    
                    <div class="experience">
                        <h2>UDDANNELSE</h2>
                        <${EditableList.elementName}
                            id="education-list"
                            content-key="education"
                            content-type="array"
                            item-component="${ExperienceItemOctagon.elementName}" 
                            starting-amount="1"
                        >
                            <list-button icon="add" slot="append-button"></list-button>
                            <list-button icon="remove" slot="remove-button"></list-button>
                        </${EditableList.elementName}>
                    </div>
                </section>
            </main>
        `;
    }

    script = () => {
        BaseComponent.template = octagon;
        BaseComponent.colors = colors;
    };

    // language=CSS
    get css() {
        return `
            main {
                padding-top: 70px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            h1, h2 {
                font-family: var(--h1);
                letter-spacing: 0.2em;
                margin-bottom: 0.5em;
            }
            
            ul {
                list-style-type: disc;
                color: black;
                margin-left: 1em;
            }

            .higher {
                background-color: #99B2B4;
                padding: 5%;
                width: 70%;
            }

            .lower {
                color: white;
                background-color: #3F3F3F;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                padding: 1em;
            }

            .lower p {

            }
            
            *::part(container) {
                display: flex;
                flex-direction: row;
            }
            
            *::part(list) {
                display: flex;
                flex-direction: row;
            }
            
            *::part(list-item) {
                flex: 1 1 0;
                margin: 5px;
            }
            
            profile-image {
                max-height: 50%;
                max-width: 50%;
            }
            
            #experiences {
                display: flex;
                flex-direction: column;
            }
            
            .octagon {
                /* Heavily inspired by https://stackoverflow.com/questions/19418486/hexagon-shape-with-a-border-outline */
                /* Clips the content to a octagon */
                --l: 14.645%;
                --h: 85.355%;
                -webkit-clip-path: polygon(50% 0%, var(--h) var(--l), 100% 50%, var(--h) var(--h), 50% 100%, var(--l) var(--h), 0% 50%, var(--l) var(--l));
                clip-path: polygon(50% 0%, var(--h) var(--l), 100% 50%, var(--h) var(--h), 50% 100%, var(--l) var(--h), 0% 50%, var(--l) var(--l));
            }
            
            @media(min-width: 1000px) {
                .higher {
                    width: 800px;
                    max-width: 800px;
                    padding: 50px;
                }
            }
        `
    };
}
