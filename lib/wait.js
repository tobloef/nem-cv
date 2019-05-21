export default function wait(amount) {
    return new Promise((res, rej) => {
        setTimeout(res, amount);
    })
}
