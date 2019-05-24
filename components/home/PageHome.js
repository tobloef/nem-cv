import BaseComponent from "../BaseComponent.js";
import wait from "../../lib/wait.js";
import whenReady from '../../lib/whenReady.js';
import RouterLink from "../shared/RouterLink.js";
import CustomButton from "../shared/CustomButton.js";
import NavBar from "../shared/NavBar.js";
import HomeHeader from './HomeHeader.js';
import {getPath} from "../../lib/paths.js";
import Logo from "../shared/Logo.js";

export default class PageHome extends BaseComponent {
    usedComponents = [
        RouterLink,
        HomeHeader,
        CustomButton,
        NavBar,
        Logo
    ];

    get html() {
        return `
            <nav-bar transparent>
                <div>
                    <logo></logo>
                    <router-link href="/templates">
                        <custom-button inverted>Start nu</custom-button>
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
                            <custom-button >
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
            </section>
            <footer>
                <p>This is a footer</p>
            </footer>
        `;
    }

    // language=CSS
    get css() {
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

           footer {
               background-color: black;
               color: white;
               padding: 60px;
           }

           @media(min-width: 650px) {
               .card {
                   padding: 50px;
               }
           }

           @media(min-width: 750px) {
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

           @media(min-width: 1200px) {
               .cards {
                   display: flex;
                   max-width: 1000px;
               }
           }
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        const navBar = this.shadowRoot.querySelector("nav-bar");

        this.intersectionObserver = new IntersectionObserver(entries => {
            if (entries[0].intersectionRatio <= 0.5) {
                navBar.removeAttribute("transparent");
            } else {
                navBar.setAttribute("transparent", "");
            }
        }, { threshold: [0, 0.25, 0.5, 1] });

        // start observing
        this.intersectionObserver.observe(this.shadowRoot.querySelector("home-header"));
    }

    script() {
        const header = this.shadowRoot.querySelector("home-header");

        //Wait for the window to be ready before playing header animation
        whenReady(_=> {
            header.play();
        })
    }
}
