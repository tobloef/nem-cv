import RootRoutes from "./components/RootRoutes.js"
import {resetCSSString} from "./lib/reset-css.js";

RootRoutes.define();


const style = document.createElement("style");
style.innerText = resetCSSString;
document.body.appendChild(style);