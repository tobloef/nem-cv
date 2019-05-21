import BaseComponent from "../../lib/BaseComponent.js";
import Router from "../../lib/Router.js";

export default class PageTheme extends BaseComponent {
    html = `
        <h1>Choose a theme</h1>

        <a href="${Router.prefix}/editor/red">Red theme</a>
        <a href="${Router.prefix}/editor/blue">Blue theme</a>
        <a href="${Router.prefix}/editor/green">Green theme</a>
        <a href="${Router.prefix}/editor/purple">Purple theme</a>
        <a href="${Router.prefix}/editor/special">Special theme</a>
        <a href="${Router.prefix}/editor/invalid">Invalid theme</a>

        <br>

        <a href="${Router.prefix}/">Back</a>
    `;
}
