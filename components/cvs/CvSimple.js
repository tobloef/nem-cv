'use strict';
import BaseComponent from "../../lib/BaseComponent.js";

export default class CvSimple extends BaseComponent {
    static toggleAllEditors() {
        const editors = document.querySelectorAll(".editable");
        const addButtons = document.querySelectorAll(".add-button");

        function toggleEdit(item) {
            const edit = "contenteditable";
            item.setAttribute(edit, "" + !(item.getAttribute(edit) === "true"));
        }

        editors.forEach(toggleEdit);
        addButtons.forEach(item => item.style.display === "block" ? item.style.visibility = "block" : item.style.display = "none");

    };

    get html() {
        return `
<div id="root">
        <main>
        <section class="introbox">
            <div class="introbox-inner">
                <img src="https://prd-wret.s3-us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/placeholder-profile_3.png" alt="image of you">
                <h1 class="editable" contenteditable="true">Full name</h1>
                <ul class="facts">
                    <li class="age editable" contenteditable="true">Din alder</li>
                    <li class="city editable" contenteditable="true">Din by</li>
                    <li class="email editable" contenteditable="true">Din email</li>
                </ul>
            </div>
        </section>
        <section class="description">
            <h1>Om mig</h1>
            <p class="editable" contenteditable="true">Her kan du skrive en kort beskrivelse af dig selv.</p>
        </section>
        <section class="education">
            <h1>Uddannelse</h1>
            <ul class="education-list">
                <li class="education-item editable" contenteditable="true">Skriv din uddannelse her</li>
            </ul>
            <add-button class="add-button">+</add-button>
        </section>
        <section class="experience">
            <h1>Erfaring</h1>
            <ul class="experience-list">
                <li class="experience-item editable" contenteditable="true">Skriv din erfaring her</li>
            </ul>
            <add-button class="add-button">+</add-button>
            <ul class="work-areas">
                <add-button class="add-button">+</add-button>
            </ul>
        </section>
    </main>
</div>
`;
    };

    script = () => {
    };

    style = `
        #root {
        
        }
    `;

}
