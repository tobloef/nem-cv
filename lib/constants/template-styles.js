import simple from "./templates/simple.js";
import edges from "./templates/edges.js";
import modern from "./templates/modern.js";

const templateStyles = {
    edges,
    modern,
    simple,
};

export function getDefaultTemplateId() {
    return Object.keys(templateStyles)[0];
}

export default templateStyles;