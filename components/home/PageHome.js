<<<<<<< HEAD
import BaseComponent from "../BaseComponent.js";
import Router from "../../lib/Router.js"
import RouterLink from "../shared/RouterLink.js";
import wait from "../../lib/wait.js";

// background-image: url('/img/landing-bg.webp');
// background-repeat: no-repeat;
// background-size: 100% auto;
// background-position: -20px -70px;
=======
import BaseComponent from "../../lib/BaseComponent.js";
import wait from "../../lib/wait.js";
import Router from '../../lib/Router.js';
>>>>>>> 74309b68ef71d3a1a78b4c50c2729025a29dae06

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
                    <div class="image-wrapper">
                        <div class="image-container">
                            <img src="/img/landing-bg.webp"/>
                        </div>
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
                    <div class="fake-text" style="width: 100%;"></div>
                </div>
                <div class="filler"></div>
            </div>

            <div class="infobox">
                <h1>Lad <span class="light">NemCV</span> hjælpe dig med dit CV</h1>
                <router-link class="cta" href="${Router.prefix}/templates">
                    <div class="actual-cta">Start nu</div>
                </router-link>
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

        header {
            padding-top: 50px;
            height: 100vh;
            background-image: url('/img/landing-bg.webp');
            background-repeat: no-repeat;
            background-size: 120vw auto;
            /*background-position: center 20%;*/
            background-position: left 0%;
            position: relative;
        }

        header .fakecv {
            background-color: #2B2B2B;
            padding: var(--content-padding);
            clip-path: none;
            margin: 10px;

            position: absolute;
            width: calc(100% - 20px);
            z-index: 1;

            transform: translateY(30%) scale(0.8);
            opacity: 0;
            transition: 1s cubic-bezier(0.77, 0, 0.175, 1) transform, 1s cubic-bezier(0.77, 0, 0.175, 1) clip-path, 1s cubic-bezier(0.77, 0, 0.175, 1) opacity;

            --content-padding: 30px;
            --image-height: 300px;
        }

        header .fakecv.clip {
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

        header .fakecv.visible {
            transform: translateY(0%) scale(1);
            opacity: 1;
        }

        header .fakecv .filler {
            height: 25vh;
        }

        header h1 {
            font-size: 2.5em;
            font-weight: 400;
            color: white;
            line-height: 1.2;
        }

        header .image-row {
            display: flex;
        }

        header .image-wrapper {
            overflow: hidden;
            width: 100%;
            transition: 1s cubic-bezier(0.77, 0, 0.175, 1) width;
        }

        header .image-wrapper.small {
            width: 50%;
        }

        header .image-container {
            width: 120vw;
            height: 300px;
            overflow: hidden;

            transition: 1s cubic-bezier(0.77, 0, 0.175, 1) width, 1s cubic-bezier(0.77, 0, 0.175, 1) height;
        }

        header .image-container img {
            width: 100%;
        }

        header .image-container img.animatable {
            transition: 1s cubic-bezier(0.77, 0, 0.175, 1) transform;
        }

        header .image-container.small {
            width: 50vw;
            height: 30vh;
        }

        header .fake-content-title,
        header .fake-content-body {
            opacity: 0;
            transition: 1s cubic-bezier(0.77, 0, 0.175, 1) opacity;
        }

        header .fake-content-title.visible,
        header .fake-content-body.visible {
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
            background: rgba(0,0,0,0.6);
            padding: 30px 40px;
            bottom: 5%;

            transform: translateY(100px);
            opacity: 0;
            transition: 1s cubic-bezier(0.77, 0, 0.175, 1) transform, 1s cubic-bezier(0.77, 0, 0.175, 1) opacity;
        }

        .infobox.visible {
            transform: translateY(0px);
            opacity: 1;
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
    `;

    async script() {
        const fakecv = this.shadowRoot.querySelector(".fakecv");
        const fakeContentTitle = this.shadowRoot.querySelector(".fake-content-title");
        const fakeContentBody = this.shadowRoot.querySelector(".fake-content-body");
        const imageWrapper = this.shadowRoot.querySelector(".image-wrapper");
        const imageContainer = this.shadowRoot.querySelector(".image-container");
        const image = this.shadowRoot.querySelector(".image-container img");
        const infobox = this.shadowRoot.querySelector(".infobox");

        await wait(750);
        fakecv.classList.add('visible');

        await wait(1300);

        const rect = image.getBoundingClientRect();
        image.style.transform = `translate(-${rect.left}px, -${rect.top}px)`;
        fakecv.classList.remove('clip');


        await wait(400);
        imageContainer.classList.add('small');
        image.classList.add('animatable');
        image.style.transform = `translate(-10%, -10%)`;

        imageWrapper.classList.add('small');
        infobox.classList.add('visible');

        await wait(300);

        fakeContentTitle.classList.add('visible');

        await wait(100);

        fakeContentBody.classList.add('visible');
    }
}
