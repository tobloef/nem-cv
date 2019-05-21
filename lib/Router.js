import {removeSlashes} from "./string-utils.js";

class Router {
    routes = [];
    mode = "hash";
    root = "/";

    get currentUrl() {
        let url = decodeURI(location.pathname + location.search + location.hash);
        url = removeSlashes(url);
        url = this.root !== "/" ? url.replace(this.root, "") : url;
        return removeSlashes(url);
    }

    add(pattern, handler) {
        this.routes.push({pattern, handler});
    }

    remove(param) {
        for (let i = 0; i < this.routes.length; i++) {
            const route = this.routes[i];
            if (route.handler === param || route.pattern.toString() === param.toString()) {
                this.routes.splice(i, 1);
                break;
            }
        }
    }

    check(url) {
        console.log("url", url);
        for (let i = 0; i < this.routes.length; i++) {
            if (url == null) {
                continue
            }
            let match = url.match(this.routes[i].pattern);
            if (match == null) {
                continue;
            }
            match.shift();
            this.routes[i].handler.apply({}, match);
            break;
        }
    }

    listen() {
        window.addEventListener("popstate", e => {
            e.preventDefault();
            this.check(this.currentUrl);
            return false;
        });
        this.check(this.currentUrl);
    }

    navigate(path) {
        path = path ? path : "";
        history.pushState(null, null, this.root + removeSlashes(path));
        return this.check(this.currentUrl);
    }

    get prefix() {
        return this.mode === "hash" ? "/#" : "";
    }
}

export default new Router();
