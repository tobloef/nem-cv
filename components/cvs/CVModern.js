import EditableProfileImage from "./shared/EditableProfileImage.js";
import WorkAreaItem from "./shared/WorkAreaItem.js";
import EditableList from "./shared/EditableList.js";
import EditableText from "./shared/EditableText.js";
import ListButton from "./shared/ListButton.js";
import ExperienceItem from "./shared/ExperienceItem.js";
import AbstractCV from "./AbstractCV.js";

export default class CVModern extends AbstractCV {
    static observedAttributes = [];

    usedComponents = [
        EditableProfileImage,
        WorkAreaItem,
        EditableList,
        EditableText,
        ListButton,
        ExperienceItem
    ];


    // language=HTML
    get html() {
        return `
            <header>
                <div class="left">
                    <${EditableProfileImage.elementName}
                        class="image"
                        aspect-ratio="1.5"
                        weirdfix="height: 100%;"
                        content-key="picture"
                        content-type="component">
                    </${EditableProfileImage.elementName}>
                </div>
                <div class = "right">
                    <${EditableText.elementName}
                            validate-type="string"
                            content-key="name"
                            content-type="component"
                            class="name"
                            name="Navn"
                            placeholder="Dit fulde navn"
                            element="h1">
                    </${EditableText.elementName}>
                    <div class="color1"></div>
                    <ul class="listinfo">
                        <li class="age">
                            <${EditableText.elementName}
                                    validate-type="number"
                                    content-key="age"
                                    content-type="component"
                                    placeholder="Din alder"
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
                                    name="Email"
                                    content-key="email"
                                    content-type="component"
                            ></${EditableText.elementName}>
                        </li>
                    </ul>
                </div>
            </header>
            
            <section class="about">
                <div class="content">
                        <h2 class="aboutme">OM MIG</h2>
                        <${EditableText.elementName}
                                class="description"
                                validate-type="string"
                                name="Beskrivelse"
                                element="p"
                                content-key="description"
                                content-type="component"
                                multiline
                                placeholder="Her kan du skrive en kort beskrivelse af dig selv.">
                        </${EditableText.elementName}>
                        <h2 class="workareas">BRANCHER</h2>
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
                </div>
            </section>
            
            <section class="education">
                <div class="content">
                    <h2 class="educationtitle">UDDANNELSE</h2>
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
                </div>
            </section>
            
            <section class="experience">
                <div class="content">
                    <h2 class="experiencetitle">ERFARING</h2>
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
                </div>
            </section>
        `;
    }

    educationWhereSeparator = ", ";
    experienceWhereSeparator = ", ";

    // language=CSS
    get css() {
        return `            
            :host{
                font-family: 'Open Sans', sans-serif;
                background-color: var(--background-color);
                color: var(--font-color);
                display: block;
            }
            
            ul{
                list-style-type: disc;
                padding-left: 2em;
            }
            
            header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 40px;
            }
            
            h1, .name {
                font-size: 2em;
            }

            h2 {
                font-size: 1.5em;
            }
            
            li{
                margin-bottom: 5px;
            }

           .image {
                max-width: 400px;
               max-height: 100%;
            }

           .about {
               display: flex;
               justify-content: flex-end;
               margin-bottom: 50px;
           }
            
           .education {
               display: flex;
               flex-direction: column;
               margin-bottom: 50px;
           }
            
           .experience {
               display: flex;
               flex-direction: column;
               justify-content: center;
           }
            
            .aboutme {
                margin-bottom: 30px;
            }
            
            .workareas {
                margin-bottom: 30px;
            }
            
            .left {
                justify-content: flex-start;
                width: 100%;
                padding: 110px;
                height: 800px;
            }
            
            .right {
                display: flex;
                width: 100%;
                max-width: 400px;
                flex-direction: column;
                justify-content: center;
            }
            
            .text{
                /*max-width: 500px;*/
                transform: translateX(-50%);
                font-size: 0.9em;
                margin-bottom: 30px;
            }
            
            .experiencetitle {
                padding-left: -15em;
                margin-bottom: 10px;
                transform: translateX(20%);
                text-align: right;
            }
            
            .educationtitle {
                text-align: center;
                margin-left: -15em;
                margin-bottom: 10px;
            }
            
            .color1 {
                height: 80px;
                background-color: var(--accent-color);
                position: relative;
                margin-bottom: 30px;
            }
            
            .about .content {
                padding: 50px;
                max-width: 40%;
                background-color: var(--extra-background-color);
            }
            
            .experience .content{
                padding: 50px;
                max-width: 40%;
                background-color: var(--extra-background-color);
            }
            
            .color3 {
                height: 200px;
                width: 300px;
                background-color: var(--extra-background-color);
                position: relative;
            }
            
            .experiencefront {
                position: absolute;
            }
            
            .title {
                font-size: 0.8em;
                margin-bottom: 15px;
            }
            
            .place {
                font-size: 1em;
                margin-bottom: 5px;
            }
            
            .year {
                font-size: 0.7em;
            }
            
            .education .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            }
            
            #education-list {
                width: 100%;
                max-width: 40%;
                display: flex;
                justify-content: center;
            }
            
            .oneeducation {
                display: flex;
                justify-content: space-between;
                border-top: 1px solid black;
                padding: 5px;
            }
            
            #experience-list {
                transform: translateX(15%);
            }
            
            .oneexperience {
                display: flex;
                justify-content: space-between;
            }
            
            ${EditableList.elementName}::part(list) {
            margin-bottom: 1em;
            }
            
            
            

            
            @media(max-width: 800px) {
                
                header{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                
                .right{
                    justify-content: flex-end;
                    align-items: flex-end;
                    width: 100%;
                    max-width: 200px;
                    padding-left: 2em;
                }
                
                .left{
                    justify-content: center;
                    padding: 50px;
                    max-height: 550px;
                }
                
                .color1 {
                    height: 0;
                }
                
                .about .content{
                    padding: 50px;
                    max-width: 100%;
                }
                
                .description {
                    margin-bottom: 1em;
                }

                .experience .content{
                    padding: 50px;
                    max-width: 100%;
                }

                .education .content{
                    padding: 50px;
                    max-width: 100%;
                }

                .experiencetitle {
                    padding-left: 0em;
                    margin-bottom: 10px;
                    transform: translateX(20%);
                    text-align: right;
                }

                .educationtitle {
                    text-align: center;
                    margin-left: 0em;
                    margin-bottom: 10px;
                }

                .text{
                    /*max-width: 500px;*/
                    transform: translateX(0%);
                    font-size: 0.9em;
                    margin-bottom: 30px;
                }

                .experiencetitle {
                    padding-left: 0em;
                    margin-bottom: 10px;
                    transform: translateX(0%);
                    text-align: left;
                }

                .educationtitle {
                    text-align: left;
                    margin-left: 0em;
                    margin-bottom: 10px;
                }

                .educations {
                    margin-left: auto;
                    margin-right: auto;
                    width: 100%;
                    max-width: 100%;
                }

                .experiences {
                    transform: translateX(0%);
                }

                .oneeducation {
                    display: flex;
                    justify-content: space-between;
                    border-top: 1px solid black;
                    padding: 5px;
                }

                .oneexperience {
                    display: flex;
                    justify-content: space-between;
                    border-top: 1px solid black;
                    padding: 5px;
                }
                
            }
        `
    };
}
