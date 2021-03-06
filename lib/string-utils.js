// Assorted functions to help with strings, mostly by converting between cases of typing



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
    // Convert PascalCase to kebab-case. SomeComponent -> some-component
    return str.replace(/\.?([A-Z]+)/g, (x, y) => "-" + y.toLowerCase()).replace(/^-/, "");
}

export function kebabToCamelCase(str) {
    if (str == null) {
        return str;
    }
    // Convert kebab-case to camelCase. some-component -> someComponent
    return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
}

export function camelToKebabCase(str) {
    if (str == null) {
        return null;
    }
    // Convert camelCase to kebab-case. someComponent -> some-component
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
