const storagePrefix = "grp2_";

export function addStorageHook() {
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function(key, value) {
        const event = new CustomEvent("itemInserted", {detail:{key:key, value:value}});
        document.dispatchEvent(event);
        originalSetItem.apply(this, arguments);
    };
}

export function addStorageItemListener(key, handler) {
    document.addEventListener("itemInserted", (e) => {
        if (e.detail.key === key) {
            handler(key, e.detail.value);
        }
    }, false);
}

export function getStorageItem(key) {
    const str = localStorage.getItem(storagePrefix + key);
    if (str == null) {
        return null;
    }
    try {
        return JSON.parse(str);
    } catch (error) {
        console.error(error);
        return null;
    }
}

export function setStorageItem(key, value) {
    localStorage.setItem(storagePrefix + key, JSON.stringify(value));
}