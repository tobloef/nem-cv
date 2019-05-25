export function stringToStyleSheet(str) {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replace(str);
    return styleSheet;
}

export function colorsToStyleSheet(colors) {
    if (colors == null) {
        return null;
    }
    return stringToStyleSheet(`
        :host {
            --font-color: ${colors.fontColor};
            --background-color: ${colors.backgroundColor};
            --accent-color: ${colors.accentColor};
            --extra-background-color: ${colors.extraBackgroundColor};
        }
    `);
}