export function removeSlashes(str) {
    if (str == null) {
        return str;
    }
    return str.toString().replace(/\/$/, "").replace(/^\//, "");
}

export function classNameToElementName(str) {
    if (str == null) {
        return str;
    }
    return str.replace(/\.?([A-Z]+)/g, (x, y) => "-" + y.toLowerCase()).replace(/^-/, "");
}