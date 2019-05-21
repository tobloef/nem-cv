import AbstractComponent from '../../lib/AbstractComponent.js';

export default class PageNotFound extends AbstractComponent
{
    html = `
        <h1>404</h1>
        <h2>Page not found</h2>
        <a href="/">Back to Home</a>
    `;

    script() {}
}

customElements.define('page-notfound', PageNotFound);
