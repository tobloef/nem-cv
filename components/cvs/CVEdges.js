import ExperienceItemEdges from "./octagon/ExperienceItemEdges.js";
import WorkAreaItem from "./shared/WorkAreaItem.js";
import ListButton from "./shared/ListButton.js";
import EditableList from "./shared/EditableList.js";
import AbstractCV from "./AbstractCV.js";
import EditableText from "./shared/EditableText.js";
import EditableProfileImage from "./shared/EditableProfileImage.js";

export default class CVEdges extends AbstractCV {
    static observedAttributes = [];

    usedComponents = [
        ExperienceItemEdges,
        EditableProfileImage,
        WorkAreaItem,
        ListButton,
        EditableList,
        EditableText
    ];

    // language=HTML
    get html() {
        return `
            <main>
                <!-- Top section, contains picture and info -->
                <section id="top" class="higher">
                    <${EditableProfileImage.elementName} 
                            class="octagon" 
                            aspect-ratio="1" 
                            content-key="picture" 
                            content-type="component"
                            tabindex="0"> 
                    </${EditableProfileImage.elementName}>
                    <div id="info-box">
                        <div id="name-box">
                            <editable-text
                                        content-key="name"
                                        content-type="component"
                                        class="name"
                                        placeholder="DIT FULDE NAVN"
                                        element="h1"
                                        multiline="false">
                            </editable-text>
                        </div>
                        <!-- For bunching together info under name -->
                        <div id="under-name">
                            <div class="column">
                                <h2>Info</h2>
                                <ul class="facts">
                                    <li class="age">
                                        <editable-text
                                                validate-type="age"
                                                is-age
                                                content-key="age"
                                                content-type="component"
                                                placeholder="Din alder"
                                                name="Alder"
                                                element="p">
                                        ></editable-text>
                                    </li>
                                    <li class="city">
                                        <editable-text
                                                validate-type="string"
                                                content-key="city"
                                                content-type="component"        
                                                placeholder="Din by"
                                                name="By"
                                                element="p"
                                        ></editable-text>
                                    </li>
                                    <li class="email">
                                        <editable-text
                                                validate-type="email"
                                                placeholder="Din email" 
                                                element="p"
                                                content-key="email"
                                                name="Email"
                                                content-type="component"
                                        ></editable-text>
                                    </li>
                                </ul>
                            </div>
                            <div class="column">
                                <h2>Brancher</h2>
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
                                    <list-button icon="add" slot="append-button" tabindex="0"></list-button>
                                    <list-button icon="remove" slot="remove-button" tabindex="0"></list-button>
                                </${EditableList.elementName}>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section class="lower">
                    <div id="about">
                        <h1>OM MIG</h1>
                        <editable-text
                                validate-type="string"
                                class="description"
                                element="p"
                                content-key="description"
                                content-type="component"
                                name="Beskrivelse"
                                multiline
                                placeholder="Her kan du skrive en kort beskrivelse af dig selv."
                        </editable-text>
                    </div>
                </section>
                
                <section id="experiences" class="higher">
                    <div class="experience">
                        <h2>ERFARING</h2>
                        <${EditableList.elementName}
                            id="experience-list"
                            content-key="employers"
                            content-type="array"
                            item-component="${ExperienceItemEdges.elementName}" 
                            starting-amount="1"
                            name="Erfaringer"
                        >
                            <list-button icon="add" slot="append-button" tabindex="0"></list-button>
                            <list-button icon="remove" slot="remove-button" tabindex="0"></list-button>
                        </${EditableList.elementName}>
                    </div>
                    
                    <div class="experience">
                        <h2>UDDANNELSE</h2>
                        <${EditableList.elementName}
                            id="education-list"
                            content-key="education"
                            content-type="array"
                            item-component="${ExperienceItemEdges.elementName}" 
                            starting-amount="1"
                            name="Uddannelser"
                        >
                            <list-button icon="add" slot="append-button" tabindex="0"></list-button>
                            <list-button icon="remove" slot="remove-button" tabindex="0"></list-button>
                        </${EditableList.elementName}>
                    </div>
                </section>
            </main>
        `;
    }

    // language=CSS
    get css() {
        return `
            :host {
                font-size: 1.2em;
                --filter: sepia(100%) hue-rotate(-50deg);
            }
            
            main {
                padding-top: 70px;
                /* align all items in column */
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            h1, h2 {
                font-family: var(--h1);
                /* headings should have some spacing between letters */
                letter-spacing: 0.2em;
                margin-bottom: 0.5em;
            }
            
            ul {
                /* Give lists back their list disc after reset.css.js removed them */
                list-style-type: disc;
                color: black;
                margin-left: 1em;
            }
            
            editable-profile-image {
                height: 80%;
                width: 80%;
                margin-bottom: 1em;
            }

            /* "higher" refers to z-axis space as can be seen in the mock-up */
            .higher {
                background-color: #99B2B4;
                padding: 5%;
                width: 80%;
            }

            .higher li {
                font-family: var(--p);
            }

            .lower {
                /* An artifact of an attempt to change the low contrast text color */
                --editable-empty-text-color: #aaa;
                
                color: white;
                background-color: #3F3F3F;
                /* Center items on column */
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                padding: 1em;
            }
            
            .experience {
                margin-bottom: 2em;
            }
            
            .column {
                display: flex;
                flex-direction: column;
                margin-bottom: 1em;
                flex-grow: 0;
                font-size: 0.9em;
            }
            
            .work-areas {
                display: inline-block;
            }
            
            *::part(container) {
                display: flex;
                flex-direction: row;
            }
            
            *::part(list) {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
            }

            .column *::part(list) {
                list-style-type: disc;
                color: black;
                margin-left: 1em;
                font-family: var(--p);
            }
            
            *::part(buttons) {
                padding: 5px;
            }
            
            #top {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            #name-box {
                /* Make text box wrapping */
                word-wrap: break-word;
                max-width: 100%;
                padding: 15px;
                margin-bottom: 1em;
                color: white;
                --editable-empty-text-color: #ddd;
                text-align: center;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                background-color: #595959;
            }
            
            #experiences {
                display: flex;
                flex-direction: column;
            }
            
            #about {
                min-width: 250px;
                max-width: 55%;
                margin-top: 2em; /* breaks principle on purpose to let boxes touch */
                margin-bottom: 3em;
            }
            
            .octagon {
                /* Heavily inspired by https://stackoverflow.com/questions/19418486/hexagon-shape-with-a-border-outline */
                /* Clips the content to an octagon */
                --l: 14.645%;
                --h: 85.355%;
                -webkit-clip-path: polygon(50% 0%, var(--h) var(--l), 100% 50%, var(--h) var(--h), 50% 100%, var(--l) var(--h), 0% 50%, var(--l) var(--l));
                clip-path: polygon(50% 0%, var(--h) var(--l), 100% 50%, var(--h) var(--h), 50% 100%, var(--l) var(--h), 0% 50%, var(--l) var(--l));
            }
            
            @media(max-width: 400px) {
                /* Make top padding less extreme on narrow screens */
                main {
                    padding-top: 30px;
                }
                
                /* Make content go further towards the edges */
                /* such that more content can fit */
                .higher {
                    padding: 7%;
                    width: 90%;
                }
            }
            
            @media(min-width: 500px) {
                editable-profile-image {
                    min-width: 50%;
                    height: 50%;
                    width: 50%;
                }
                
                .column {
                    padding: 10px;
                }

                .column *::part(container) {
                    display: flex;
                    flex-direction: column;
                    line-height: 1.2em;
                }
                
                /* Make top be compressed vertically instead of 
                   some long list on mobile platforms           */
                #top {
                    padding: 5% 8%;
                    flex-direction: row;
                    justify-content: space-between;
                }
                
                #info-box {
                    margin-left: 5%;
                }

                #under-name {
                    display: flex;
                }
            }
            
            @media(min-width: 1200px) {
                /* Cap width out on desktop platforms */
                .higher {
                    width: 1000px;
                    max-width: 1000px;
                    padding: 50px;
                }
                
                #about {
                    max-width: 700px;
                }
            }
        `
    };
}
