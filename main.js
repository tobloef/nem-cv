import RootRoutes from "./components/shared/RootRoutes.js"
import {addStorageHook, addListener} from "./lib/storage-helper.js";
import {resetCSSString} from "./lib/reset-css.js";
import {getSectors} from "./lib/api.js";
import WorkAreaItem from "./components/cvs/shared/WorkAreaItem.js";

RootRoutes.define();
addStorageHook();
addListener("colors", console.log);

const style = document.createElement("style");
style.innerText = resetCSSString;
document.body.appendChild(style);
// noinspection JSIgnoredPromiseFromCall
fetchSectors();

async function fetchSectors() {
    try {
        const sectors = await getSectors();
        localStorage.setItem("sectors", JSON.stringify(sectors));
    } catch (error) {
        if (localStorage.getItem("sectors") != null) {
            alert("Couldn't get the list of sectors from the server, but we can use a cached one.");
        } else {
            alert("Couldn't get the list of sectors from the server and we don't have a one cached. Sorry!");
        }
    }
}