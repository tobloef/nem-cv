import BaseComponent from "../BaseComponent.js";
import wait from "../../lib/wait.js";
import whenReady from '../../lib/whenReady.js';
import RouterLink from "../shared/RouterLink.js";
import CustomButton from "../shared/CustomButton.js";
import NavBar from "../shared/NavBar.js";
import HomeHeader from './HomeHeader.js';
import TestimonialSlider from './TestimonialSlider.js';
import TemplateSlider from './TemplateSlider.js';
import Logo from "../shared/Logo.js";

export default class PageHome extends BaseComponent {
    usedComponents = [
        RouterLink, HomeHeader, CustomButton, NavBar, Logo, TestimonialSlider, TemplateSlider
    ];

    get html() {
        return `
            <nav-bar transparent>
                <div>
                    <logo-></logo->
                    <router-link href="/templates">
                        <custom-button label="Opret CV" inverted style="font-size: 1.1em">Opret CV</custom-button>
                    </router-link>
                </div>
            </nav-bar>
            <home-header></home-header>

            <section class="templates">
                <h2>Vælg mellem <b class="underline">tre</b> <i>forskellige</i> templates</h3>
                <template-slider></template-slider>
            </section>

            <section class="colors">
                <h2>Vælg farver efter din personlighed</h2>

                <div class="color-wheel-container">
                    <div class="color-wheel"></div>
                </div>
            </section>

            <section class="testimonials">
                <testimonial-slider></testimonial-slider>
            </section>
            <section class="cta">
                <div class="wrapper">
                    <p class="cta-text">Kom i gang med at lave dit eget professionelle CV nu</p>
                    <router-link href="/templates">
                        <custom-button solid label="Kom i gang">
                            Kom i gang
                        </custom-button>
                    </router-link>
                </div>
            </section>
            <footer>
                <div class="wrapper">
                    <div class="left">
                        <logo-></logo->
                        <p>Rued Langgaards Vej 7, 2300 København S</p>
                    </div>

                    <div class="right">
                        <p>Denne hjemmeside er udarbejdet i forbindelse med eksamen i Systematisk Design af Brugergrænseflader på IT Universitetet i København, og repræsentere derfor ikke en rigtig virksomhed.</p>
                    </div>
                </div>
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

            section.templates {
                display: flex;
                flex-direction: column;
                padding: 50px;
                align-items: center;
                background: hsl(47, 50%, 85%);
            }

            section.templates h2 {
                text-align: center;
                margin-bottom: 40px;
                max-width: 600px;
            }

            section.templates template-slider {
                width: 100%;
            }

            section.colors {
                display: flex;
                flex-direction: column;
                padding: 50px;
                align-items: center;
                text-align: center;
                background: hsla(227, 85%, 95%);
                overflow: hidden;
            }

            section.colors h2 {
                text-align: center;
                margin-bottom: 40px;
                max-width: 600px;
            }

            section.colors .color-wheel-container {
                --color-wheel-size: calc(100vw - 100px);
                height: var(--color-wheel-size);
                width: var(--color-wheel-size);
                border-radius: 100%;
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            }

            section.colors .color-wheel {
                display: block;
                height: 100%;
                width: 100%;
                border-radius: 100%;
                transform: rotate(0deg);
                background: conic-gradient(
                        #EF3339 0 14.285%,
                        #F47B37 0 28.571%,
                        #F2BC64 0 42.857%,
                        #38BA5E 0 57.142%,
                        #5079BA 0 71.428%,
                        #7A5EA8 0 85.714%,
                        #BD54A2 0 100.00%
                );
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
                background-color: #f8f0d3;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%23ada176' fill-opacity='0.24' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E");
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
                display: flex;
                justify-content: center;
                padding: 30px;
            }

            footer .wrapper {
                display: flex;
                width: 100%;
                max-width: 1100px;
                flex-direction: column;
            }

            footer logo- {
                display: flex;
                margin-bottom: 5px;
            }

            footer p {
                line-height: 1.4;
                margin-bottom: 10px;
            }

            @media (min-width: 400px) {
                section.cta .cta-text {
                    font-size: 3em;
                }
            }

            @media (max-width: 600px) {
                testimonial-slider {
                    --button-padding: 0px 0px 30px 0px;
                    --text-padding: 20px 30px 30px 30px;
                }
            }

            @media (min-width: 600px) {
                testimonial-slider {
                    padding: 0px;

                    --text-padding: 20px 50px 30px 10%;
                    --button-padding: 20px 50px 20px 0px;
                }

                section.colors .color-wheel-container {
                    --color-wheel-size: calc(75vw - 100px);
                }

                section.cta .cta-text {
                    font-size: 4em;
                }

                section.cta custom-button {
                    display: inline-block;
                    font-size: 2em;
                }

                footer {
                    padding: 60px;
                }

                footer .wrapper {
                    flex-direction: row;
                    justify-content: space-between;
                }

                footer .left,
                footer .right {
                    flex: 1;
                    max-width: 400px;
                }
            }

            @media (min-width: 650px) {
                h2 {
                    font-size: 3em;
                    line-height: 1.5;
                }
            }

            @media (min-width: 800px) {
                section.colors .color-wheel-container {
                    --color-wheel-size: 500px;
                }
            }
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this._observeHeader();
        this._observeTemplates();
        this._observeTestimonials();
        this._handleRotateColorWheel();
    }

    _observeHeader() {
        const navBar = this.shadowRoot.querySelector("nav-bar");

        this.headerObserver = new IntersectionObserver(entries => {
            if (entries[0].intersectionRatio <= 0.5) {
                navBar.removeAttribute("transparent");
            } else {
                navBar.setAttribute("transparent", "");
            }
        }, { threshold: [0, 0.25, 0.5, 1]});

        // start observing
        this.headerObserver.observe(this.shadowRoot.querySelector("home-header"));
    }

    _observeTestimonials() {
        const testimonialSlider = this.shadowRoot.querySelector("testimonial-slider");

        this.headerObserver = new IntersectionObserver(entries => {
            if (entries[0].intersectionRatio <= 0.1) {
                testimonialSlider.stop();
            } else {
                testimonialSlider.resume();
            }
        }, { threshold: [0, 0.1]});

        // start observing
        this.headerObserver.observe(this.shadowRoot.querySelector("section.testimonials"));
    }

    _observeTemplates() {
        const templateSlider = this.shadowRoot.querySelector("template-slider");

        this.templateObserver = new IntersectionObserver(entries => {
            if (entries[0].intersectionRatio <= 0.1) {
                templateSlider.stop();
            } else {
                templateSlider.resume();
            }
        }, { threshold: [0, 0.1]});

        // start observing
        this.templateObserver.observe(this.shadowRoot.querySelector("section.templates"));
    }

    _handleRotateColorWheel() {
        const wheel = this.shadowRoot.querySelector(".color-wheel");
        document.addEventListener('scroll', e => {
            const angle = (window.pageYOffset / 7) % 360;
            wheel.style.transform = `rotate(${angle}deg)`;
        })
    }

    script = () => {
        const header = this.shadowRoot.querySelector("home-header");

        //Wait for the window to be ready before playing header animation
        whenReady(_ => {
            header.play();
        })
    };
}
