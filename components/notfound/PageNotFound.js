export default class PageNotFound extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>404</h1>
            <h2>Page not found</h2>
            <a href="">Back to Home</a>
        `;
    }
}

customElements.define('page-notfound', PageNotFound);
