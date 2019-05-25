import simple from "./templates/simple.js";
import octagon from "./templates/octagon.js";
import modern from "./templates/modern.js";

const templateStyles = {
    edges: octagon,
    simplicity: modern,
    basic: simple,
};

export function getDefaultTemplateId() {
    return Object.keys(templateStyles)[0];
}

export default templateStyles;