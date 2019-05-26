// Assorted functions to help with dealing with local storage more easily


// To avoid mixing with local storage from other groups, all storage keys are prefixed with a unique identifier
const storagePrefix = "grp2_";

// Make all LocalStorage calls emit an insertion event
export function addStorageHook() {
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function(key, value) {
        const event = new CustomEvent("itemInserted", {detail:{key:key, value:value}});
        document.dispatchEvent(event);
        originalSetItem.apply(this, arguments);
    };
}

// Add a listener to react to specific key insertions into LocalStorage
export function addStorageItemListener(key, handler) {
    document.addEventListener("itemInserted", (e) => {
        if (e.detail.key === key) {
            handler(key, e.detail.value);
        }
    }, false);
}

// Get key from LocalStorage as object instead of string
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

// Put value in LocalStorage as JSON, ready to get pulled as object
export function setStorageItem(key, value) {
    localStorage.setItem(storagePrefix + key, JSON.stringify(value));
}
