import RootRoutes from "./components/RootRoutes.js"
import {addStorageHook, addListener} from "./lib/storage-helper.js";

RootRoutes.define();
addStorageHook();
addListener("colors", console.log);