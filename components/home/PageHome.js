import HelloWorld from './HelloWorld.js';

export default class PageHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <hello-world></hello-world>
            <b>Choose a theme</b>
            <a href="/theme/red">Red theme</a>
            <a href="/theme/blue">Blue theme</a>
            <a href="/theme/green">Green theme</a>
            <a href="/theme/purple">Purple theme</a>
            <a href="/theme/special">Special theme</a>
            <a href="/theme/invalid">Invalid theme</a>
            <br>
            <b>Other pages</b>
            <a href="/about">About</a>
            <a href="/invalidlink">Broken link</a>

            <b>External pages</b>
            <a href="https://itu.dk">ITU</a>
            <a href="https://google.com">Google</a>
        `;
    }
}

customElements.define('page-home', PageHome);
