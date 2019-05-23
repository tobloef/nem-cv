export function addStorageHook() {
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function(key, value) {
        const event = new Event("itemInserted");
        event.key = key;
        event.value = value;
        document.dispatchEvent(event);

        originalSetItem.apply(this, arguments);
    };
}

export function addListener(key, handler) {
    document.addEventListener("itemInserted", (e) => {
        if (e.key === key) {
            handler(key, e.value);
        }
    }, false);
}

export function getItem(key) {
    const str = localStorage.getItem(key);
    if (str == null) {
        return null;
    }
    return JSON.parse(str);
}

export function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}