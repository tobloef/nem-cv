export default class PageTheme extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>Choose a theme</h1>

            <a href="/editor/red">Red theme</a>
            <a href="/editor/blue">Blue theme</a>
            <a href="/editor/green">Green theme</a>
            <a href="/editor/purple">Purple theme</a>
            <a href="/editor/special">Special theme</a>
            <a href="/editor/invalid">Invalid theme</a>

            <br>

            <a href="/">Back</a>
        `;
    }
}

customElements.define('page-theme', PageTheme);
