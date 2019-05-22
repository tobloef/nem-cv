function toggleAllEditors() {
    const editors = document.querySelectorAll(".editable");
    const addButtons = document.querySelectorAll(".add-button");

    function toggleEdit(item) {
        const edit = "contenteditable";
        item.setAttribute(edit, "" + !(item.getAttribute(edit) === "true"));
    }

    editors.forEach(toggleEdit);
    addButtons.forEach(item => item.style.visibility === "hidden" ? item.style.display = "block" : item.style.display = "none");

}
