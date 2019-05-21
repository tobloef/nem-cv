import BaseComponent from "../../lib/BaseComponent.js";

export default class PageNotFound extends BaseComponent
{
    html = `
        <h1>404</h1>
        <h2>Page not found</h2>
        <a href="/">Back to Home</a>
    `;
}