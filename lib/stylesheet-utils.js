export function stringToStyleSheet(str) {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replace(str);
    return styleSheet;
}

export function colorsToCSS(colors) {
    if (colors == null) {
        return null;
    }
    // language=CSS
    return `
        :host {
            --font-color: ${colors.fontColor};
            --background-color: ${colors.backgroundColor};
            --accent-color: ${colors.accentColor};
            --extra-background-color: ${colors.extraBackgroundColor};
        }
    `;
}