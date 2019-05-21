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
                <div class="image-container"></div>
                <div class="content">
                    <h1>Lad <span class="light">NemCV</span> hjælpe dig med dit CV</h1>
                </div>
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
            z-index: 2;
            padding: 20px;
        }

        .topbar .logo {
            max-width: 120px;
        }

        header {
            padding-top: 50px;
            height: 75vh;
            background-image: url('/img/landing-bg.webp');
            background-repeat: no-repeat;
            background-size: auto 150%;
            background-position: center 20%;
        }

        header h1 {
            font-size: 2.5em;
            font-weight: 400;
            color: white;
            line-height: 1.2;
        }

        header .image-container {
            width: 100%;
            height: 300px;
            overflow: hidden;

            background-image: url('/img/landing-bg.webp');
            background-repeat: no-repeat;
            background-size: 150% 100%;
            /*background-position: center -120px*/

            transition: 1s cubic-bezier(0.77, 0, 0.175, 1) width, 1s cubic-bezier(0.77, 0, 0.175, 1) height;
        }

        header .image-container.small {
            width: 25%;
            height: 100px;
        }

        header .fakecv {
            background-color: #2B2B2B;
            padding: var(--content-padding);
            clip-path: none;
            margin: 10px;

            transform: translateY(150%);
            transition: 1s cubic-bezier(0.77, 0, 0.175, 1) transform, 1s cubic-bezier(0.77, 0, 0.175, 1) clip-path;

            --content-padding: 10px;
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
            transform: translateY(0%);
        }

        .light {
            font-weight: 100;
        }
    `;

    async script() {
        const fakecv = this.shadowRoot.querySelector(".fakecv");
        const image = this.shadowRoot.querySelector(".image-container");

        await wait(500);
        fakecv.classList.add('visible');

        await wait(1100);

        fakecv.classList.remove('clip');

        // await wait(100);

        image.classList.add('small');
    }
}
