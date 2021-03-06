import {removeSlashes} from "./string-utils.js";

class Router {
    routes = [];
    mode = "hash";
    root = "/";
    currentRoute = null;

    constructor() {
        this.listen();
    }

    get currentUrl() {
        let url = decodeURI(location.pathname + location.hash + location.search);
        url = url.replace(this.prefix, "");
        if (this.root !== "/") {
            url = url.replace(this.root, "");
        }
        return url;
    }

    add = (pattern, handler) => {
        this.routes.push({pattern, handler});
        this.update(this.currentUrl);
    };

    remove = (param) => {
        for (let i = 0; i < this.routes.length; i++) {
            const route = this.routes[i];
            if (route.handler === param || route.pattern.toString() === param.toString()) {
                this.routes.splice(i, 1);
                break;
            }
        }
    };

    clear = () => {
        this.routes = [];
    };

    update = (url) => {
        if (url == null) {
            // Try to recover
            url = this.currentUrl;
        }
        if (url == null) {
            // Abort update
            return;
        }
        for (const route of this.routes) {
            let match = url.match(route.pattern);
            if (match == null) {
                continue;
            }
            // Only reaches here when a match is found
            if (this.currentRoute !== route) {
                this.currentRoute = route;
                route.handler(url);
            }
            break;
        }
    };

    listen = () => {
        // "popstate" relates to when the active history is changed.
        // This code prevents ordinary page navigation and replaces it with our own.
        window.addEventListener("popstate", e => {
            e.preventDefault();
            this.update(this.currentUrl);
            return false;
        });
        this.update(this.currentUrl);
    };

    navigate = (path) => {
        path = path || "/"; // Navigate to root if no path is given
        if (!path.startsWith(this.prefix)) {
            path = this.prefix + path; // Add router prefix if missing
        }
        // Change navigation state to reflect page change
        // This way, the URI-bar updates and history to match
        history.pushState(null, null, this.root + removeSlashes(path));
        window.scrollTo(0,0);
        return this.update(this.currentUrl);
    };

    get prefix() {
        return this.mode === "hash" ? "/#" : "";
    }
}

export default new Router();
