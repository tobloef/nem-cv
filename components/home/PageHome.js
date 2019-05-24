import BaseComponent from "../BaseComponent.js";
import wait from "../../lib/wait.js";
import whenReady from '../../lib/whenReady.js';
import RouterLink from "../shared/RouterLink.js";
import CustomButton from "../shared/CustomButton.js";
import NavBar from "../shared/NavBar.js";
import HomeHeader from './HomeHeader.js';
import {
    getPath
} from "../../lib/paths.js";
import TestimonialSlider from './TestimonialSlider.js';
import Logo from "../shared/Logo.js";

export default class PageHome extends BaseComponent {
    usedComponents = [
        RouterLink, HomeHeader, CustomButton, NavBar, Logo, TestimonialSlider
    ];

    get html() {
        return `
            <nav-bar transparent>
                <div>
                    <logo-></logo->
                    <router-link href="/templates">
                        <custom-button inverted style="font-size: 1.1em">Opret CV</custom-button>
                    </router-link>
                </div>
            </nav-bar>
            <home-header></home-header>

            <section class="features">
                <h2>Derfor skal du vælge os</h2>
                <div class="cards">
                    <div class="card templates">
                        <div class="split">
                            <div class="left">
                                <h3>Vælg mellem <b class="underline">tre</b> <i>forskellige</i> templates</h3>
                                <div class="seperator"></div>
                            </div>
                            <div class="right">
                                <img src="${getPath("template-modern")}"/>
                            </div>
                        </div>
                        <router-link href="/templates">
                            <custom-button>
                                Start nu
                            </custom-button>
                        </router-link>
                    </div>
                    <div class="card colors">
                        <div class="split">
                            <div class="left">
                                <h3>Vælg farver efter din personlighed</h3>
                                <div class="seperator"></div>
                            </div>
                            <div class="right">
                                <p class="line"><span class="green">GRØN</span><span class="red">RØD</span></p>
                                <p class="line"><span class="blue">BLÅ</span><span class="yellow">GUL</span></p>
                                <p class="line"><span class="brown">BRUN</span></p>
                                <p class="line"><span class="purple">LILLA</span><span class="gray">GRÅ</span></p>
                                <p class="line"><span class="pink">LYSERØD</span></p>
                                <p class="line"><span class="bordeaux">BORDEAUX</span></p>
                                <p class="line"><span class="dark-green">MØRKEGRØN</span></p>
                            </div>
                        </div>
                        <router-link href="/templates">
                            <custom-button >
                                Start nu
                            </custom-button>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="testimonials">
            <testimonial-slider></testimonial-slider>
        </section>
        <section class="cta">
            <div class="wrapper">
                <p class="cta-text">Kom i gang med at lave dit eget professionelle CV nu</p>
                <router-link href="/templates">
                    <custom-button solid>
                        Kom i gang
                    </custom-button>
                </router-link>
            </div>
        </section>
        <footer>
            <p>This is a footer</p>
        </footer>
    `;
    }

    get css() {
        // language=CSS
        return `
            :host {
                font-family: 'Open Sans', sans-serif;
            }

            nav-bar {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 10;
            }

           h2 {
               font-size: 2.5em;
               line-height: 1.5;
           }

           h3 {
               font-size: 2em;
               line-height: 1.3;
           }

           b {
               font-weight: bold;
           }

           i {
               font-style: italic;
           }

           .underline {
               text-decoration: underline;
           }

           section.features {
               display: flex;
               flex-direction: column;
               align-items: center;
               padding: 15px 50px;
               background-color: hsl(77, 30%, 92%);
           }

           section.features h2 {
               text-align: center;
               margin-bottom: 20px;
           }

           section.features router-link {
               text-decoration: none;
           }

           section.features router-link custom-button {
               display: inline-block;
               --padding-x: 30px;
               margin-top: 10px;
               --hover-background-color: #ebece9;
           }

           .cards {
               display: flex;
               flex-direction: column;
               max-width: 750px;
           }

           .card {
               background: white;
               padding: 10px 30px;
               box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
           }

           .card h3 {
               margin-bottom: 20px;
           }

           .card .split {
               display: flex;
               flex-direction: column;
           }

           .card .left,
           .card .right {
               width: 100%;
           }

           .card.templates img {
               width: 100%;
           }

           .seperator {
               width: 100%;
               height: 3px;
               background: black;
           }

           .card.colors {
               margin-top: 30px;
           }

           .card.colors .line {
               display: flex;
               justify-content: space-between;
               font-size: 10vw;
           }

           .card.colors .green {
               color: #69b168;
           }

           .card.colors .red {
               color: #F86868;
           }

           .card.colors .blue {
               color: #7aacb3;
           }

           .card.colors .yellow {
               color: #FDF883;
           }

           .card.colors .brown {
               color: #875820;
           }

           .card.colors .purple {
               color: #AB80A7;
           }

           .card.colors .gray {
               color: #a1a1a1;
           }

           .card.colors .pink {
               color: #ff50a3;
           }

           .card.colors .bordeaux {
               color: #8B0817;
           }

           .card.colors .dark-green {
               color: #066515;
           }

           section.testimonials {
               background: #2C2C2C;
               display: flex;
               justify-content: center;
           }

           testimonial-slider {
               width: 100%;
           }

           section.cta {
               display: flex;
               justify-content: center;
               background-color: #ebece9;
               background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%23bec4b0' fill-opacity='0.53' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E");
               padding: 50px;
           }

           section.cta .wrapper {
               max-width: 700px;
               display: flex;
               justify-content: center;
               flex-direction: column;
           }

           section.cta .cta-text {
               font-size: 2.5em;
               line-height: 1.3;
               font-style: italic;
               text-align: center;
               font-weight: 400;
               color: #222;
           }

           section.cta router-link {
               display: flex;
               justify-content: center;
               padding: 20px;
           }

           section.cta custom-button {
               display: inline-block;
               font-size: 1.5em;

           }

           footer {
               background-color: black;
               color: white;
               padding: 60px;
           }

           @media(min-width: 400px) {
               section.cta .cta-text {
                   font-size: 3em;
               }
           }

           @media(max-width: 600px) {
               testimonial-slider {
                   --button-padding: 0px 0px 30px 0px;
                   --text-padding: 20px 30px 30px 30px;
               }
           }

           @media(min-width: 600px) {
               testimonial-slider {
                   /*max-width: 1500px;*/
                   padding: 0px;

                   --text-padding: 20px 50px 30px 10%;
                   --button-padding: 20px 50px 20px 0px;
               }

               section.cta .cta-text {
                   font-size: 4em;
               }

               section.cta custom-button {
                   display: inline-block;
                   font-size: 2em;
               }
           }

           @media(min-width: 650px) {
               .card {
                   padding: 50px;
               }
           }

           @media(min-width: 700px) {
               .cards {
                   flex-direction: row;
               }

               .card {
                   width: 50%;
               }

               .card.templates {
                   margin-right: 20px;
               }

               .card.colors {
                   margin-top: 0px;
               }

               .card.colors .line {
                   font-size: 3em;
               }
           }

           @media(min-width: 1100px) {
               .cards {
                   display: flex;
                   max-width: 1000px;
               }
           }
        `;
    }

    connectedCallback = () => {
        super.connectedCallback();

        const navBar = this.shadowRoot.querySelector("nav-bar");

        this.intersectionObserver = new IntersectionObserver(entries => {
            if (entries[0].intersectionRatio <= 0.5) {
                navBar.removeAttribute("transparent");
            } else {
                navBar.setAttribute("transparent", "");
            }
        }, {
            threshold: [0, 0.25, 0.5, 1]
        });

        // start observing
        this.intersectionObserver.observe(this.shadowRoot.querySelector("home-header"));
    };

    script = () => {
        const header = this.shadowRoot.querySelector("home-header");

        //Wait for the window to be ready before playing header animation
        whenReady(_ => {
            header.play();
        })
    };
}
