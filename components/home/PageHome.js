import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js"
import RouterLink from "../shared/RouterLink.js";
import wait from "../../lib/wait.js";


export default class PageHome extends BaseComponent {
    usedComponents = [
        RouterLink
    ];

    html = `
        <div class="topbar">
            <img class="logo" src="/img/logo_white.svg"></img>
        </div>
        <header>
            <div class="fakecv clip">
                <div class="image-row">
                    <div class="image-container">
                        <img src="/img/landing-bg.webp"/>
                        <div class="image-bg"></div>
                    </div>
                    <div class="fake-content-title">
                        <div class="fake-text lighter large" style="width: 100%; margin-bottom: 10px;"></div>
                        <div class="fake-text lighter tight" style="width: 80%;"></div>
                        <div class="fake-text lighter tight" style="width: 40%;"></div>
                        <div class="fake-text lighter tight" style="width: 100%;"></div>
                    </div>
                </div>
                <div class="fake-content-body">
                    <div class="fake-text" style="width: 100%;"></div>
                    <div class="fake-text" style="width: 100%;"></div>
                    <div class="fake-text" style="width: 100%;"></div>
                    <div class="fake-text" style="width: 100%;"></div>
                    <div class="fake-text" style="width: 100%;"></div>
                    <div class="fake-text" style="width: 60%;"></div>
                </div>
                <div class="fake-content-extra">
                    <div class="fake-content-extra-col">
                        <div class="fake-text large" style="width: 40%;"></div>
                        <div class="fake-text" style="width: 70%;"></div>
                        <div class="fake-text" style="width: 30%;"></div>
                        <div class="fake-text" style="width: 45%;"></div>
                        <br>
                        <div class="fake-text" style="width: 70%;"></div>
                        <div class="fake-text" style="width: 30%;"></div>
                        <div class="fake-text" style="width: 45%;"></div>
                        <br>
                        <div class="fake-text" style="width: 70%;"></div>
                        <div class="fake-text" style="width: 30%;"></div>
                        <div class="fake-text" style="width: 45%;"></div>
                    </div>

                    <div class="fake-content-extra-col">
                        <div class="fake-text large" style="width: 40%;"></div>
                        <div class="fake-text" style="width: 70%;"></div>
                        <div class="fake-text" style="width: 30%;"></div>
                        <div class="fake-text" style="width: 45%;"></div>
                        <br>
                        <div class="fake-text" style="width: 70%;"></div>
                        <div class="fake-text" style="width: 30%;"></div>
                        <div class="fake-text" style="width: 45%;"></div>
                        <br>
                        <div class="fake-text" style="width: 70%;"></div>
                        <div class="fake-text" style="width: 30%;"></div>
                        <div class="fake-text" style="width: 45%;"></div>
                    </div>
                </div>
                <div class="filler"></div>
            </div>

            <div class="infobox">
                <h1>Lad <span class="light">NemCV</span> hjælpe dig med dit CV</h1>
                <router-link class="cta" href="${Router.prefix}/templates">
                    <div class="actual-cta">Start nu</div>
                </router-link>
            </div>

            <div class="background-container">
                <img class="background" src="/img/landing-bg.webp"/>
            </div>
        </header>
        <h2>Stuff</h2>
        <h3>Stuff</h3>
        <router-link href="${Router.prefix}/templates">Templates</router-link>
        <router-link href="${Router.prefix}/editor">Editor</router-link>
        <router-link href="${Router.prefix}/blabla">Blabla (Not found)</router-link>
    `;

    // language=CSS
    style = `
        @import url('/css/reset.css');

        .topbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 10;
            padding: 20px;
        }

        .topbar .logo {
            max-width: 120px;
        }

        .background-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            overflow: hidden;
            justify-content: center;
        }

        .background {
            height: 100%;
        }

        header {
            padding-top: 60px;
            height: 100vh;
            background: hsl(12, 5%, 80%);
            background: radial-gradient(circle, hsl(12, 5%, 80%) 0%, hsl(12, 5%, 30%) 100%);

            display: flex;
            justify-content: center;

            position: relative;
        }

        .fakecv {
            background-color: #2B2B2B;
            padding: var(--content-padding);
            clip-path: none;
            margin: 10px 0;

            min-height: 40em;

            position: absolute;
            width: calc(100% - 20px);
            max-width: 500px;
            z-index: 1;

            transform: translateY(30%) scale(0.8);
            opacity: 0;
            transition: 1s cubic-bezier(0.77, 0, 0.175, 1) transform, 1s cubic-bezier(0.77, 0, 0.175, 1) clip-path, 1s cubic-bezier(0.77, 0, 0.175, 1) opacity;

            --content-padding: 30px;
            --image-height: 300px;
        }


        .fakecv.clip {
            clip-path: polygon(0px 0px,
                               0px calc(var(--image-height) + var(--content-padding)),
                               var(--content-padding) calc(var(--image-height) + var(--content-padding)),
                               var(--content-padding) var(--content-padding),
                               calc(100% - var(--content-padding)) var(--content-padding),
                               calc(100% - var(--content-padding)) calc(var(--image-height) + var(--content-padding)),
                               0px calc(var(--image-height) + var(--content-padding)),
                               0% 100%,
                               100% 100%,
                               100% 0%);
        }

        .fakecv.visible {
            transform: translateY(0px) scale(1);
            opacity: 1;
        }

        header .image-row {
            display: flex;
        }

        header .image-container {
            overflow: hidden;
            width: 100%;
            height: 300px;

            display: flex;
            justify-content: center;

            position: relative;

            /*background: hsl(12, 5%, 80%);
            background: radial-gradient(circle, hsl(12, 5%, 70%) 0%, hsl(12, 5%, 30%) 160%);*/

            transition: 1s cubic-bezier(0.77, 0, 0.175, 1) width, 1s cubic-bezier(0.77, 0, 0.175, 1) height;
        }


        header .image-container img {
            height: calc(100vh - 60px);
        }

        header .image-container img.animatable {
            transition: 1s cubic-bezier(0.77, 0, 0.175, 1) transform;
        }

        header .image-container.small {
            width: 50%;
            height: 200px;
        }

        header .image-container.small img {
            transform: scale(0.5) translateY(-50%);
        }

        header .image-container .image-bg {
            background: hsl(12, 5%, 80%);
            background: radial-gradient(circle, hsl(12, 5%, 80%) 0%, hsl(12, 5%, 30%) 100%);
            /*background: red;*/
            position: absolute;
            z-index: -1;
            width: 100vw;
            height: 100vh;
            top: -100px;
        }

        header .fake-content-title,
        header .fake-content-body,
        header .fake-content-extra {
            opacity: 0;
            transition: 1s cubic-bezier(0.77, 0, 0.175, 1) opacity;
        }

        header .fake-content-title.visible,
        header .fake-content-body.visible,
        header .fake-content-extra.visible {
            opacity: 1;
        }

        header .fake-content-title {
            flex: 1;

            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        header .fake-content-title.visible {
            padding-left: 20px;
            padding-top: 0px;
        }

        header .fake-content-body {
            margin-top: 30px;
        }

        header .fake-content-extra {
            display: flex;
        }

        header .fake-content-extra-col {
            flex: 1;
            margin-top: 10px;
        }

        header .fake-content-extra-col:not(:last-child) {
            padding-right: 20px;
        }

        .fake-text {
            background: #5D5D5D;
            width: 100%;
            height: 12px;
            margin: 12px 0;
        }

        .fake-text.lighter {
            background: #929292;
        }

        .fake-text.large {
            height: 25px;
        }

        .fake-text.tight {
            margin: 4px 0;
        }

        .light {
            font-weight: 100;
        }

        .infobox {
            position: absolute;
            z-index: 3;
            width: 100%;
            max-width: 550px;
            background: rgba(0,0,0,0.6);
            padding: 30px 40px;
            top: 60vh;

            transform: translateY(100px);
            opacity: 0;
            transition: 1s cubic-bezier(0.77, 0, 0.175, 1) transform, 1s cubic-bezier(0.77, 0, 0.175, 1) opacity;
        }

        .infobox.visible {
            transform: translateY(0px);
            opacity: 1;
        }

        .infobox h1 {
            font-size: 2.5em;
            font-weight: 400;
            color: white;
            line-height: 1.2;
        }

        .cta {
            display: inline-block;
            margin: 5px 0;
        }

        .actual-cta {
            color: white;
            text-decoration: none;
            border: 2px solid white;
            padding: 10px;
        }

        @media(min-width: 1024px) {
            .fakecv {
                max-width: 750px;
            }

            .infobox {
                max-width: 800px;
            }
        /*}

        @media(min-width: 1200px) {*/
            .image-row {
                flex-direction: column;
            }

            header .fake-content-title.visible {
                padding-left: 0px;
            }

            header .image-container.small {
                height: 300px;
            }

            header .image-container.small img {
                transform: scale(0.7) translateY(-25%);
            }

            .infobox {
                --infobox-large-left-margin: 20px;
                top: 100px;
                left: calc(50% + var(--infobox-large-left-margin));
                /*right: 0;*/
                height: 100%;
                max-height: 300px;
                max-width: 430px;
                margin: 0 10px;
            }

            .infobox h1 {
                font-size: 3.5em;
            }
        }

        @media(min-width: 1200px) {
            .infobox {
                --infobox-large-left-margin: 75px;
                max-width: 500px;
            }
        }
    `;

    async script() {
        const fakecv = this.shadowRoot.querySelector(".fakecv");
        const fakeContentTitle = this.shadowRoot.querySelector(".fake-content-title");
        const fakeContentBody = this.shadowRoot.querySelector(".fake-content-body");
        const fakeContentExtra = this.shadowRoot.querySelector(".fake-content-extra");
        const imageContainer = this.shadowRoot.querySelector(".image-container");
        const image = this.shadowRoot.querySelector(".image-container img");
        const infobox = this.shadowRoot.querySelector(".infobox");

        await wait(750);
        fakecv.classList.add('visible');

        await wait(1300);

        const rect = image.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop;

        const xCenterOffset = (document.documentElement.clientWidth / 2) - (image.offsetWidth / 2);
        const styleString = `translate(${-rect.left + xCenterOffset}px, ${-rect.top - scrollTop + 60}px)`;

        image.style.transform = styleString;
        fakecv.classList.remove('clip');

        await wait(50);
        imageContainer.classList.add('small');
        image.classList.add('animatable');
        image.style.transform = ``;

        infobox.classList.add('visible');

        await wait(300);

        fakeContentTitle.classList.add('visible');

        await wait(100);

        fakeContentBody.classList.add('visible');

        await wait(100);

        fakeContentExtra.classList.add('visible');
    }
}
