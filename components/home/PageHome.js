import AbstractComponent from '../../lib/AbstractComponent.js';

export default class PageHome extends AbstractComponent {
    html = `
        <h1>NemCV</h1>
        <a href="/theme">Get Started</a>
        <a href="/about">About</a>
    `;

    script() {}
}

customElements.define('page-home', PageHome);
