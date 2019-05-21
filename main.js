import RootPages from "./components/RootPages.js"

RootPages.define();

import Router from "./lib/Router.js";
import Pages from "./lib/Pages.js";

const root = document.querySelector('root-pages');

const pages = new Pages();
const router = new Router();

//Set router mode. Can either be history (use pure urls) or hash (uses a # before the url).
router.config({mode: "history"});

//Register pages
pages.add("home", root.shadowRoot.querySelector("page-home"))
    .add("theme", root.shadowRoot.querySelector("page-theme"))
    .add("editor", root.shadowRoot.querySelector("page-editor"))
    .add("about", root.shadowRoot.querySelector("page-about"))
    .add("not-found", root.shadowRoot.querySelector("page-not-found"));

//Register routes
router.add(/about/, _ => {
    pages.show("about");
})
    .add(/editor\/(.*)/, args => {
        try {
            pages.get("editor").setTheme(args);
        }
        catch (e) {
            alert(e.message);
            router.navigate("");
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
        pages.show(router.currentUrl === "" ? "home" : "not-found");
    });

//Attach and enable router
router.listen().captureAnchors();
