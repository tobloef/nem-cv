//assorted functions to help with dealing with local storage more easily
const storagePrefix = "grp2_"; //to avoid mixing with local storage from other groups, all storage keys are prefixed with a unique identifier

export function addStorageHook() {
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function(key, value) {
        const event = new CustomEvent("itemInserted", {detail:{key:key, value:value}});
        document.dispatchEvent(event);

        originalSetItem.apply(this, arguments);
    };
}

export function addStorageItemListener(key, handler) {
    document.addEventListener("itemInserted", (evt) => {
        if (evt.detail.key === key) {
            handler(key, evt.detail.value);
        }
    }, false);
}

export function getStorageItem(key) {
    const str = localStorage.getItem(storagePrefix + key);
    if (str == null) {
        return null;
    }
    return JSON.parse(str);
}

export function setStorageItem(key, value) {
    localStorage.setItem(storagePrefix + key, JSON.stringify(value));
}
