const iconmap = {
    "add": "/img/add-outline.svg",
    "remove": "/img/minus-outline.svg"
};

export function getIcon(type) {
    return iconmap[type];
}
