import {getPath} from "../lib/paths.js";
import CVOctagon from "../components/cvs/cv-octagon/CVOctagon.js";
import CVModern from "../components/cvs/cv-modern/CVModern.js";
import CVSimple from "../components/cvs/cv-simple/CVSimple.js";

export const templates = [
    {fontColor:"#373737", backgroundColor:"#F6F5EE", accentColor:"#E4E3D9"},
    {fontColor:"#222222", backgroundColor:"#E9E9E9", accentColor:"#595959"},
    {fontColor:"#222222", backgroundColor:"#E6F4F2", accentColor:"#2B62B4"},
    {fontColor:"#282828", backgroundColor:"#F6E5E4", accentColor:"#33B827"},
    {fontColor:"#cfcfcf", backgroundColor:"#39312D", accentColor:"#C00000"}
];

export const layouts = {
    edges: {
        name: "Kanter",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: getPath("cv-placeholder"),
        class: CVOctagon
    },
    simplicity: {
        name: "Simplicitet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: getPath("cv-placeholder"),
        class: CVModern
    },
    basic: {
        name: "Basal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: getPath("cv-placeholder"),
        class: CVSimple
    }
};