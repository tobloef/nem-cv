import BaseComponent from "../BaseComponent.js";
import RouterLink from "../shared/RouterLink.js";
import CustomButton from "../shared/CustomButton.js";
import wait from "../../lib/wait.js";
import HomeHeader from './HomeHeader.js';

export default class PageHome extends BaseComponent {
    usedComponents = [
        RouterLink, HomeHeader, CustomButton
    ];

    html = `
        <div class="topbar">
            <img class="logo" src="/img/logo_white.svg"></img>
        </div>
        <home-header></home-header>

        <section class="features">
            <div class="slide card templates">
                <div class="split">
                    <div class="left">
                        <h2>Vælg mellem <b class="underline">tre</b> <i>forskellige</i> templates</h2>
                        <div class="seperator"></div>
                    </div>
                    <div class="right">
                        <img src="/img/template1.png"></img>
                    </div>
                </div>
                <router-link href="/templates">
                    <custom-button >
                        Start nu
                    </custom-button>
                </router-link>
            </div>
            <div class="slide card colors">
                <div class="split">
                    <div class="left">
                        <h2>Vælg farver efter din personlighed</h2>
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
        </section>
        <footer>
            <p>This is a footer</p>
        </footer>
    `;

    // language=CSS
    get css() {
        return `
            :host {
                font-family: 'Open Sans', sans-serif;
            }

            .topbar {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 10;
                padding: 20px;
                z-index: 10px;
                background-color: transparent;
                transition: 400ms ease-in-out background-color;
            }

            .topbar .logo {
                max-width: 120px;
            }

            .topbar.scrolling {
                background-color: #252525;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
           }

           h2 {
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
               padding: 15px 50px;
               padding-top: 100px;
               background-color: hsl(77, 30%, 92%);
           }
           section.features router-link {
               text-decoration: none;
           }
           section.features router-link custom-button {
               display: inline-block;
               --padding-x: 30px;
               margin-top: 10px;
           }
           .card {
               background: white;
               padding: 10px 30px;
               box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
           }
           .slide h2 {
               margin-bottom: 20px;
           }
           .slide .split {
               display: flex;
               flex-direction: column;
           }
           .slide .left,
           .slide .right {
               width: 100%;
           }
           .slide.templates img {
               width: 100%;
           }
           .seperator {
               width: 100%;
               height: 3px;
               background: black;
           }
           /* temp*/
           .slide.colors {
               margin-top: 30px;
           }
           .slide.colors .line {
               display: flex;
               justify-content: space-between;
               font-size: 10vw;
           }
           .slide.colors .green {
               color: #69b168;
           }
           .slide.colors .red {
               color: #F86868;
           }
           .slide.colors .blue {
               color: #7aacb3;
           }
           .slide.colors .yellow {
               color: #FDF883;
           }
           .slide.colors .brown {
               color: #875820;
           }
           .slide.colors .purple {
               color: #AB80A7;
           }
           .slide.colors .gray {
               color: #a1a1a1;
           }
           .slide.colors .pink {
               color: #ff50a3;
           }
           .slide.colors .bordeaux {
               color: #8B0817;
           }
           .slide.colors .dark-green {
               color: #066515;
           }
           footer {
               background-color: black;
               color: white;
               padding: 60px;
           }
           @media(min-width: 600px) {
               .slide.templates {
                   padding: 50px;
               }
               .slide.templates .split {
                   flex-direction: row;
               }
               .slide.templates .left {
                   width: 50%;
               }
               .slide.templates .right {
                   padding-left: 50px;
               }
               section.features router-link custom-button {
                   --padding-x: 50px;
               }
               .slide.colors .line {
                   font-size: 4em;
               }
           }
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        const topbar = this.shadowRoot.querySelector(".topbar");

        this.intersectionObserver = new IntersectionObserver(entries => {
            if (entries[0].intersectionRatio <= 0.5) {
                topbar.classList.add("scrolling");
            } else {
                topbar.classList.remove("scrolling");
            }
        }, { threshold: [0, 0.25, 0.5, 1] });

        // start observing
        this.intersectionObserver.observe(this.shadowRoot.querySelector("home-header"));
    }
}
