import RootRoutes from "./components/shared/RootRoutes.js"
import {addStorageHook, addStorageItemListener, getStorageItem, setStorageItem} from "./lib/storage-helper.js";
import {resetCSSString} from "./lib/reset-css.js";
import {getSectors} from "./lib/api.js";
import WorkAreaItem from "./components/cvs/shared/WorkAreaItem.js";

RootRoutes.define();
addStorageHook();
addResetCSS();
// noinspection JSIgnoredPromiseFromCall
fetchSectors();


function addResetCSS() {
    const style = document.createElement("style");
    style.innerText = resetCSSString;
    document.body.appendChild(style);
}

async function fetchSectors() {
    try {
        const sectors = await getSectors();
        setStorageItem("sectors", sectors);
    } catch (error) {
        if (getStorageItem("sectors") != null) {
            alert("Kunne ikke hente listen af brancher fra serveren, så der bruges en cached udgave.");
        } else {
            alert("Kunne ikke hente listen af brancher fra serveren, og ingen cached udgave blev fundet.");
        }
    }
}
