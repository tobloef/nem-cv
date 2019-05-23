import BaseComponent from "../../BaseComponent.js";
import ProfileImage from "../cv-simple/ProfileImage.js";

export default class CVModern extends BaseComponent {
    static observedAttributes = [];

    usedComponents = [
        ProfileImage
    ];

    // language=HTML
    get html() {
        return `
            <header>
                <div class="left">
                    <profile-image aspect_ratio="2"></profile-image>
                </div>
                <div class = "right">
                    <h1>JENS HANSEN</h1>
                    <div class="color1"></div>
                    <h2>BRANCHER</h2>
                    <ul class="listinfo">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </header>
            
            <section class="about">
                <div class = "color2"></div>
                <div class="aboutfront">
                    <h2>OM MIG</h2>
                    <p class="text">Tekst om mig</p>
            
                    <h2>BRANCHER</h2>
                    <ul class = "listindustry">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                    </div>
            </section>
            
            <section class="education">
                    <h2>UDDANNELSE</h2>
                    <div class = "educations">
                        <div class = "oneeducation">
                            <div class="left">
                                <p class="year">2018-2019</p> 
                            </div>
                            <div class = "right">
                                <p class="place">IT Universitetet</p>
                                <p class="title">Softwareudvikling</p>
                            </div>
                        </div>
                    </div>
            </section>
            
            <section class="experience">
                <div class="color2"></div>
                <div class="experiencefront">
                    <h2>ERFARING</h2>
                    <div class="experiences">
                        <div class="oneexperience">
                            <div class="left">
                                <p class = "place">Arbejdsplads</p>
                                <p class = "title">Beskrivelse</p>
                            </div>
                            <div class="right">
                                <p class = "year">2019-2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    script = () => {

    };

    externalStyles = [];

    // language=CSS
    get css() {
        return `
            header {
                display: flex;
                margin-bottom: 50px;
            }

            h1 {
            }

            h2 {
            }

            .about {
                display: flex;
                flex-direction: column;
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
                margin-bottom: 50px;
            }

            .text {
            }

            .left {
                justify-content: flex-start;
            }

            .right {
                justify-content: flex-end;
            }

            .listinfo {
            }

            .listindustry {
            }

            .color1 {
                height: 80px;
                width: 200px;
                background-color: #1d1c1a;
                position: relative;
            }

            .color2 {
                height: 200px;
                width: 300px;
                background-color: #E4E3D9;
                position: relative;
            }

            .aboutfront {
                position: absolute;
            }

            .experiencefront {
                position: absolute;
            }

            .title {
            }

            .place {
            }

            .year {
            }

            .educations {
            }

            .oneeducation {
                display: flex;
                justify-content: center;
            }

            .experiences {
            }

            .oneexperience {
                display: flex;
                justify-content: center;
            }
        `
    };
}
