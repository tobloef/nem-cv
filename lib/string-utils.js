export function removeSlashes(str) {
    if (str == null) {
        return str;
    }
    return str.toString().replace(/\/$/, "").replace(/^\//, "");
}

export function classNameToElementName(str) {
    str = pascalToKebabCase(str);
    // If no dash, add one, since components have to have a dash in the name.
    if (!str.includes("-")) {
        str += "-";
    }
    return str;
}

export function pascalToKebabCase(str) {
    if (str == null) {
        return str;
    }
    // Convert PascalCase to kebab-case.
    return str.replace(/\.?([A-Z]+)/g, (x, y) => "-" + y.toLowerCase()).replace(/^-/, "");
}

export function kebabToCamelCase(str) {
    if (str == null) {
        return str;
    }
    return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
}