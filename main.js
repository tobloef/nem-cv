import RootRoutes from "./components/RootRoutes.js"
import {addStorageHook, addListener} from "./lib/storage-helper.js";
import {resetCSSString} from "./lib/reset-css.js";

RootRoutes.define();
addStorageHook();
addListener("colors", console.log);

const style = document.createElement("style");
style.innerText = resetCSSString;
document.body.appendChild(style);
