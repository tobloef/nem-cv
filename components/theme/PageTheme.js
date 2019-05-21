import BaseComponent from "../../lib/BaseComponent.js";

export default class PageTheme extends BaseComponent {
    html = `
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