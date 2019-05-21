export default class PageHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>NemCV</h1>
            <a href="/theme">Get Started</a>
        `;
    }
}

customElements.define('page-home', PageHome);
