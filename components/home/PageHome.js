export default class PageHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>NemCV</h1>
            <b>Choose a theme</b>
            <a href="/editor/red">Red theme</a>
            <a href="/editor/blue">Blue theme</a>
            <a href="/editor/green">Green theme</a>
            <a href="/editor/purple">Purple theme</a>
            <a href="/editor/special">Special theme</a>
            <a href="/editor/invalid">Invalid theme</a>
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
