import BaseComponent from "../../lib/BaseComponent.js";
import Router from "../../lib/Router.js";

export default class PageNotFound extends BaseComponent
{
    html = `
        <h1>404</h1>
        <h2>Page not found</h2>
        <a href="${Router.prefix}/">Back to Home</a>
    `;
}
