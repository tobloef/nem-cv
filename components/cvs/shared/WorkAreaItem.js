import BaseComponent from "../../BaseComponent.js";

export default class WorkAreaItem extends BaseComponent {
    span = null;
    dropdown = document.createElement("select");

    // language=HTML
    get html() {
        return `
            <span class="dropdown">Vælg en branche</span>
        `;
    }

    onClick = () => {
        this.swapToDropdown();
        this.addOptions();
        this.dropdown.focus();
    };

    onFocusOut = () => {
        this.swapToSpan();
    };

    script = () => {
        this.span = this.shadowRoot.querySelector(".dropdown");
        this.dropdown.setAttribute("part", "dropdown");
        this.addOptions();
        this.span.addEventListener("click", this.onClick);
        this.dropdown.addEventListener("focusout", this.onFocusOut);
        this.updateStyles();
    };

    getContent = () => {
        return this.span.innerText;
    };

    setContent = (content) => {
        this.span.innerText = content;
    };

    addOptions = () => {
        // Clear the options list
        this.dropdown.innerHTML = "";
        // Create the placeholder
        const choose = document.createElement("option");
        choose.setAttribute("disabled", "");
        choose.setAttribute("selected", "");
        choose.setAttribute("hidden", "");
        choose.appendChild(document.createTextNode("Vælg en branche"));
        this.dropdown.appendChild(choose);
        // Add the sector options
        const sectors = JSON.parse(localStorage.getItem("sectors"));
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
        this.shadowRoot.removeChild(this.dropdown);
        this.shadowRoot.appendChild(this.span);
        this.span.innerText = this.dropdown.value;
    };

}
