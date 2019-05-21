import BaseComponent from "../../lib/BaseComponent.js";
import Router from "../../lib/Router.js";

export default class PageEditor extends BaseComponent {
    html = `
        <h1>Selected a theme</h1>
        <a href="${Router.prefix}/">Back</a>
    `;

    //Proof of concept. Not clean at all :)
    setTheme(name) {
        this.classList.remove("theme-red", "theme-blue", "theme-green", "theme-purple", "theme-special");

        switch(name) {
            case "blue":
                this.classList.add("theme-blue");
                break;
            case "red":
                this.classList.add("theme-red");
                break;
            case "green":
                this.classList.add("theme-green");
                break;
            case "purple":
                this.classList.add("theme-purple");
                break;
            case "special":
                this.classList.add("theme-special");
                break;
            default:
                throw new Error(`Invalid Theme "${name}".`);
        }
    }
}
