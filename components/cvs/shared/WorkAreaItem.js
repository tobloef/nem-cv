import BaseComponent from "../../BaseComponent.js";
import {addStorageItemListener, getStorageItem} from "../../../lib/storage-helper.js";

export default class WorkAreaItem extends BaseComponent {
    span = null;
    dropdown = document.createElement("select");
    placeholder = "Vælg en branche";

    // language=HTML
    get html() {
        return `
            <span class="dropdown">${this.placeholder}</span>
        `;
    }

    onClick = () => {
        this.swapToDropdown();
        this.dropdown.focus();
    };

    onFocusOut = () => {
        this.swapToSpan();
    };

    script = () => {
        //if we are editing, add event listener for dropdown functionality
        this.span = this.shadowRoot.querySelector(".dropdown");
        if (BaseComponent.editMode) {
            this.dropdown.setAttribute("part", "dropdown");
            this.addOptions();
            this.span.addEventListener("click", this.onClick);
            this.dropdown.addEventListener("focusout", this.onFocusOut);
            this.updateStyles();
            addStorageItemListener("sectors", this.addOptions);
        }
        this.greyIfDefault();
    };

    getContent = () => {
        const content = this.span.innerText;
        if (content === "" || content === this.placeholder) {
            return null;
        }
        return content;
    };

    setContent = (content) => {
        if (this.span != null) {
            this.span.innerText = content || this.placeholder;
            this.updateValidationStyle();
        }
        this.greyIfDefault();
    };

    validate = () => {
        const content = this.getContent();
        if (content == null) {
            return `En af de valgte brancher er ugyldig.`;
        }
        return null;
    };

    updateValidationStyle = () => {
        if (this.validate() != null) {
            this.classList.add("error");
        } else {
            this.classList.remove("error");
        }
    };

    addOptions = () => {
        // Clear the options list
        this.dropdown.innerHTML = "";
        // Create the placeholder
        const choose = document.createElement("option");
        choose.setAttribute("disabled", "");
        choose.setAttribute("selected", "");
        choose.setAttribute("hidden", "");
        choose.setAttribute("value", "");
        choose.appendChild(document.createTextNode(this.placeholder));
        this.dropdown.appendChild(choose);
        // Add the sector options
        const sectors = getStorageItem("sectors");
        if (sectors != null) {
            for (const sector of sectors) {
                const option = document.createElement("option");
                option.appendChild(document.createTextNode(sector));
                this.dropdown.appendChild(option);
            }
        }
    };

    swapToDropdown = () => {
        //swaps the span element with the dropdown element so that the user can choose a work area
        this.shadowRoot.removeChild(this.span);
        this.shadowRoot.appendChild(this.dropdown);
    };

    swapToSpan = () => {
        //swaps the dropdown element with the swap element so that the cv looks static again
        const value = this.dropdown.value || this.placeholder;
        this.shadowRoot.removeChild(this.dropdown);
        this.shadowRoot.appendChild(this.span);
        this.span.innerText = value;
        this.updateValidationStyle();
        this.greyIfDefault();
    };

    get css() {
        // language=CSS
        return `
            :host(.error) {
                background: rgba(255, 0, 0, 0.15);
                text-decoration: underline;
                text-decoration-color: red;
            }
            select,
            option {
                font-family: "Open Sans", sans-serif;
                font-size: 1em;
            }
            
            ${BaseComponent.editMode ? "span { cursor: pointer; }" : ""}
            
            .placeholder {
                color: var(--editable-empty-text-color  );
            }
        `;
    }

    greyIfDefault = () => {
        if (this.span.innerText === this.placeholder) {
            this.span.classList.add("placeholder");
        }
        else {
            this.span.classList.remove("placeholder");
        }
    }
}
