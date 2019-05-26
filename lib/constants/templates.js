import CVEdges from "../../components/cvs/CVEdges.js";
import CVModern from "../../components/cvs/CVModern.js";
import CVSimple from "../../components/cvs/CVSimple.js";
import paths from "./paths.js";

// Defines templates; What they are called, their description,
// image and what WebComponent they relate to
const templates = {
    edges: {
        name: "Kanter",
        description: "Et flot og skarpt CV i hårde kanter, men med god præsentation af indholdet.",
        image: paths["cv-edges-illustration"],
        class: CVEdges,
    },
    modern: {
        name: "Moderne",
        description: "Et moderne CV til dig som gerne vil være moderne og tænke ud af boksen.",
        image: paths["cv-modern-illustration"],
        class: CVModern,
    },
    simple: {
        name: "Simpel",
        description: "Et CV som er rent, simpelt og overskueligt. Ikke noget ekstra hurlumhej, bare det klare, enkle CV.",
        image: paths["cv-simple-illustration"],
        class: CVSimple,
    }
};

export default templates;
