// Returns a Promise, resolving after 'amount' milliseconds
export function wait(amount) {
    return new Promise((res, rej) => {
        setTimeout(res, amount);
    })
}

// Runs 'callback' once when page is loaded
export function whenReady(callback) {
    if (document.readyState === "complete") {
        callback();
    } else {
        window.addEventListener("load", callback);
    }
}