const storagePrefix = "grp2_";

export function addStorageHook() {
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function(key, value) {
        const event = new CustomEvent("itemInserted", {detail:{key:key, value:value}});
        document.dispatchEvent(event);

        originalSetItem.apply(this, arguments);
    };
}

export function addListener(key, handler) {
    document.addEventListener("itemInserted", (evt) => {
        if (evt.detail.key === key) {
            handler(key, evt.detail.value);
        }
    }, false);
}

export function getItem(key) {
    const str = localStorage.getItem(storagePrefix + key);
    if (str == null) {
        return null;
    }
    return JSON.parse(str);
}

export function setItem(key, value) {
    localStorage.setItem(storagePrefix + key, JSON.stringify(value));
}