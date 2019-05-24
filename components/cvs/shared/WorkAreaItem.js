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
        console.log(this.constructor.name, "setContent", content);
        this.span.innerText = content;
    };

    // language=CSS
    get style() {
        return `
            :host, :root, option, select, :host::part(dropdown), ::part(dropdown), :host::theme(dropdown) {
                background-color: red;
                font-family: Calibri,sans-serif;
            }
        `
    };

    addOptions = () => {
        //add options to the dropdown menu
        const choose = document.createElement("option");
        choose.appendChild(document.createTextNode("Vælg en branche"))
        this.dropdown.appendChild(choose);
        const gaming = document.createElement("option");
        gaming.appendChild(document.createTextNode("Gaming"));
        this.dropdown.appendChild(gaming);
    };

    swapToDropdown() {
        //swaps the span element with the dropdown element so that the user can choose a work area
        this.shadowRoot.removeChild(this.span);
        this.shadowRoot.appendChild(this.dropdown);
    }

    swapToSpan() {
        //swaps the dropdown element with the swap element so that the cv looks static again
        this.shadowRoot.removeChild(this.dropdown);
        this.shadowRoot.appendChild(this.span);
        this.span.innerText = this.dropdown.value;
    }

}
