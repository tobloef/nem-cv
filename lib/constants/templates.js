import CVOctagon from "../../components/cvs/CVOctagon.js";
import CVModern from "../../components/cvs/CVModern.js";
import CVSimple from "../../components/cvs/CVSimple.js";
import paths from "./paths.js";

const templates = {
    edges: {
        name: "Kanter",
        description: "Et flot og skarpt CV i hårde kanter, men med god præsentation af indholdet.",
        image: paths["cv-placeholder"],
        class: CVOctagon,
    },
    simplicity: {
        name: "Moderne",
        description: "Et moderne CV til dig som gerne vil være moderne og tænke ud af boksen.",
        image: paths["cv-placeholder"],
        class: CVModern,
    },
    basic: {
        name: "Simpel",
        description: "Et CV som er rent, simpelt og overskueligt. Ikke noget ekstra hurlumhej, bare det klare, enkle CV.",
        image: paths["cv-placeholder"],
        class: CVSimple,
    }
};

export default templates;