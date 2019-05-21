import Router from "./lib/Router.js";
import Pages from "./lib/Pages.js";
import RootPages from "./components/RootPages.js"

RootPages.define();

const root = document.querySelector('root-pages');

const pages = new Pages();

//Set router mode. Can either be history (use pure urls) or hash (uses a # before the url).

//Register pages
pages.add("home", root.shadowRoot.querySelector("page-home"))
    .add("theme", root.shadowRoot.querySelector("page-theme"))
    .add("editor", root.shadowRoot.querySelector("page-editor"))
    .add("about", root.shadowRoot.querySelector("page-about"))
    .add("not-found", root.shadowRoot.querySelector("page-not-found"));

//Register routes
Router.add(/about/, _ => {
    pages.show("about");
})
    .add(/editor\/(.*)/, args => {
        try {
            pages.get("editor").setTheme(args);
        }
        catch (e) {
            alert(e.message);
            Router.navigate("");
            return;
        }

        pages.show("editor");
    })
    .add(/theme/, _ => {
        pages.show("theme");
    })
    //The default route, which will be called if no other match is found.
    .add(args => {
        //Since this route is both invoked for home and 404 we need to figure out which route to show
        pages.show(Router.currentUrl === "" ? "home" : "not-found");
    });

//Attach and enable Router
Router.listen().captureAnchors();
