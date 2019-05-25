export default function whenReady(callback) {
    if (document.readyState === "complete") {
        callback();
    } else {
        window.addEventListener('load', callback);
    }
}
//todo maybe put this in the same lib as wait.js?
