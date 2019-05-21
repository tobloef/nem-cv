import Router from "./lib/Router.js";
import Pages from "./lib/Pages.js";
import RootPages from "./components/RootPages.js"

RootPages.define();

const root = document.querySelector('root-pages');

const pages = new Pages();

//Set router mode. Can either be history (use pure urls) or hash (uses a # before the url).

//Register pages
pages.add("home", root.shadowRoot.querySelector("page-home"))
    .add("templates", root.shadowRoot.querySelector("page-templates"))
    .add("editor", root.shadowRoot.querySelector("page-editor"))
    .add("not-found", root.shadowRoot.querySelector("page-not-found"));

//Register routes
Router.add(/editor/, args => {
    console.log("Router hit \"editor\"");
    pages.show("editor");
});
Router.add(/templates/, () => {
    console.log("Router hit \"templates\"");
    pages.show("templates");
});
Router.add("", () => {
    if (Router.currentUrl === "") {
        return pages.show("home");
    }
    pages.show("not-found");
});
Router.listen();