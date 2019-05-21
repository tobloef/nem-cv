import wait from './wait.js';

export default class Pages {
    pages = {};

    add(name, elem) {
        this.pages[name] = elem;
        return this;
    }

    remove(name) {
        delete this.pages[name];
        return this;
    }

    get(name) {
        return this.pages[name];
    }

    async show(name) {
        //Wait for the existing page(s) to be hidden
        await this.hideAll();

        //If the given page exist in the list, then show it
        if(this.pages[name] !== undefined) {
            this.pages[name].classList.add('should-show');
            this.pages[name].classList.add('visible');
        } else {
            throw new Error(`Invalid Page "${name}".`);
        }
    }

    hideAll() {
        const promises = [];

        for(let name in this.pages) {
            const page = this.pages[name];
            page.classList.remove('visible');

            const promise = wait(50);
            promises.push(promise);

            promise.then(_=> {
                page.classList.remove('visible');
                page.classList.remove('should-show');
            });
        }

        return Promise.all(promises);
    }
}
