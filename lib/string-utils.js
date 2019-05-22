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
    // Convert PascalCase to kebab-case.
    str = str.replace(/\.?([A-Z]+)/g, (x, y) => "-" + y.toLowerCase()).replace(/^-/, "");
    // If no dash, add one, since components have to have a dash in the name.
    if (!str.includes("-")) {
        str += "-";
    }
    return str;
}