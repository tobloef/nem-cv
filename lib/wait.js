export function wait(amount) {
    return new Promise((res, rej) => {
        setTimeout(res, amount);
    })
}

export function whenReady(callback) {
    if (document.readyState === "complete") {
        callback();
    } else {
        window.addEventListener("load", callback);
    }
}