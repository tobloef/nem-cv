import {getPath} from "./paths.js";
import CVOctagon from "../components/cvs/CVOctagon.js";
import CVModern from "../components/cvs/CVModern.js";
import CVSimple from "../components/cvs/CVSimple.js";

export const colors = [
    {fontColor:"#373737", backgroundColor:"#F6F5EE", accentColor:"#E4E3D9", extraBackgroundColor:"#d6d5ce"},
    {fontColor:"#222222", backgroundColor:"#E9E9E9", accentColor:"#595959", extraBackgroundColor:"#d4d3cc"},
    {fontColor:"#222222", backgroundColor:"#E6F4F2", accentColor:"#2B62B4", extraBackgroundColor:"#c3c2bb"},
    {fontColor:"#282828", backgroundColor:"#F6E5E4", accentColor:"#33B827", extraBackgroundColor:"#d3d2cb"},
    {fontColor:"#cfcfcf", backgroundColor:"#39312D", accentColor:"#C00000", extraBackgroundColor:"#282724"}
];

export const templates = {
    edges: {
        name: "Kanter",
        description: "Et flot og skarpt CV i hårde kanter, men med god præsentation af indholdet.",
        image: getPath("cv-placeholder"),
        class: CVOctagon
    },
    simplicity: {
        name: "Moderne",
        description: "Et moderne CV til dig som gerne vil være moderne og tænke ud af boksen.",
        image: getPath("cv-placeholder"),
        class: CVModern
    },
    basic: {
        name: "Simpel",
        description: "Et CV som er rent, simpelt og overskueligt. Ikke noget ekstra hurlumhej, bare det klare, enkle CV.",
        image: getPath("cv-placeholder"),
        class: CVSimple
    }
};
