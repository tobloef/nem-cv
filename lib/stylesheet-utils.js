export function stringToStyleSheet(str) {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replace(str);
    return styleSheet;
}