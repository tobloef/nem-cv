import {getStorageItem} from "../../lib/storage-helper.js";
import dummyContent from "../../lib/constants/dummy-content.js";
import {getDefaultColors} from "../../lib/constants/colors.js";
import PagePreview from "./PagePreview.js";

export default class PageThemePreview extends PagePreview {
    script = () => {
        // Load CV data
        const content = dummyContent;
        const templateId = getStorageItem("preview-template-id");
        const colors = getDefaultColors();
        this.createPreview(content, templateId, colors);
    };
}
