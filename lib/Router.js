class Router {
    routes = [];
    mode = "hash";
    root = "/";
    _anchorsListener = null;

    get currentUrl() {
        let fragment = "";
        if(this.mode === "history") {
            fragment = this.clearSlashes(decodeURI(location.pathname + location.search));
            fragment = fragment.replace(/\?(.*)$/, "");
            fragment = this.root != "/" ? fragment.replace(this.root, "") : fragment;
        } else {
            const match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : "";
        }
        return this.clearSlashes(fragment);
    }

    clearSlashes (path) {
        return path.toString().replace(/\/$/, "").replace(/^\//, "");
    }

    add (re, handler) {
        if(typeof re == "function") {
            handler = re;
            re = "";
        }
        this.routes.push({ re: re, handler: handler});
        return this;
    }

    remove (param) {
        for(let i=0, r; i<this.routes.length, r = this.routes[i]; i++) {
            if(r.handler === param || r.re.toString() === param.toString()) {
                this.routes.splice(i, 1);
                return this;
            }
        }
        return this;
    }

    flush () {
        this.routes = [];
        this.mode = null;
        this.root = "/";
        return this;
    }

    check (f) {
        const fragment = f || this.currentUrl;
        for(let i=0; i < this.routes.length; i++) {
            let match = fragment.match(this.routes[i].re);
            if(match) {
                match.shift();
                this.routes[i].handler.apply({}, match);
                return this;
            }
        }
        return this;
    }

    listen () {
        window.addEventListener("popstate", evt => {
            this.check(this.currentUrl);
            evt.preventDefault();
            return false;
        });

        this.check(this.currentUrl);
        return this;
    }

    captureAnchors() {
        if(this._anchorsListener) {
            window.removeListener(this._anchorsListener);
        }

        document.querySelectorAll("a").forEach(anchor => {
            anchor.addEventListener("click", evt => {
                const url = evt.target.getAttribute("href");
                const pat = /^https?:\/\//i;

                if (pat.test(url)) { return true; }

                this.navigate(url);
                evt.preventDefault();
                return false;
            });
        });
    }

    navigate (path) {
        path = path ? path : "";
        if(this.mode === "history") {
            history.pushState(null, null, this.root + this.clearSlashes(path));
        } else {
            window.location.href = window.location.href.replace(/#(.*)$/, "") + "#" + path;
        }

        return this.check(this.currentUrl);
    }

    get prefix() {
        return this.mode == "hash" ? "/#" : "";
    }
}

export default new Router();
