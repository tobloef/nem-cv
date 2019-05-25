import BaseComponent from "../BaseComponent.js";
import ProfileImage from "./shared/ProfileImage.js";

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
                    <profile-image class="image" aspect-ratio="1.5"></profile-image>
                </div>
                <div class = "right">
                    <h1>JENS</h1>
                    <h1>HANSEN</h1>
                    <div class="color1"></div>
                    <ul class="listinfo">
                        <li>23 år</li>
                        <li>København Ø</li>
                        <li>mail@nemcv.me</li>
                    </ul>
                </div>
            </header>
            
            <section class="about">
                <div class="content">
                        <h2 class="aboutme">OM MIG</h2>
                        <p class="text">Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. 
                        </p>
                        <h2 class="workareas">BRANCHER</h2>
                        <ul class = "listindustry">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                </div>
            </section>
            
            <section class="education">
                <div class="content">
                    <h2 class="educationtitle">UDDANNELSE</h2>
                    <div class = "educations">
                        <div class = "oneeducation">
                            <div class="left1">
                                <p class="year">2018-2019</p> 
                            </div>
                            <div class = "right1">
                                <p class="place">IT Universitetet</p>
                                <p class="title">Softwareudvikling</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="experience">
                <div class="content">
                    <h2 class="experiencetitle">ERFARING</h2>
                    <div class="experiences">
                        <div class="oneexperience">
                            <div class="left2">
                                <p class = "place">Arbejdsplads</p>
                                <p class = "title">Beskrivelse</p>
                            </div>
                            <div class="right2">
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
            :host{
                font-family: 'Open Sans', sans-serif;
                background-color: #F6F5EE;
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
            
            h1 {
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
                background-color: #302f2d;
                position: relative;
                margin-bottom: 30px;
            }

            .about .content {
                padding: 50px;
                max-width: 40%;
                background-color: #E4E3D9;
            }
            
            .experience .content{
                padding: 50px;
                max-width: 40%;
                background-color: #E4E3D9;
            }

            .color3 {
                height: 200px;
                width: 300px;
                background-color: #E4E3D9;
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

            .educations {
                margin-left: auto;
                margin-right: auto;
                width: 100%;
                max-width: 30%;
            }

            .oneeducation {
                display: flex;
                justify-content: space-between;
                border-top: 1px solid black;
                padding: 5px;
            }

            .experiences {
                transform: translateX(15%);
            }

            .oneexperience {
                display: flex;
                justify-content: space-between;
            }
            
            @media(max-width: 800px) {
                :host{
                    background-color: #F6F5EE;
                }
                
                header{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                
                .right{
                    justify-content: center;
                    width: 100%;
                    max-width: 200px;
                }
                
                .left{
                    justify-content: center;
                    padding: 50px;
                    max-height: 550px;
                }
                
                .about .content{
                    padding: 50px;
                    max-width: 100%;
                    background-color: #E4E3D9;
                }

                .experience .content{
                    padding: 50px;
                    max-width: 100%;
                    background-color: #E4E3D9;
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
