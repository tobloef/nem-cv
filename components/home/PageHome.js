import BaseComponent from "../../lib/BaseComponent.js";
import Router from '../../lib/Router.js';

export default class PageHome extends BaseComponent {
    html = `
        <h1>NemCV</h1>
        <a href="${Router.prefix}/theme">Get Started</a>
        <a href="${Router.prefix}/about">About</a>
    `;
}
