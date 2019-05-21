"use strict";

import BaseComponent from "../lib/BaseComponent.js";
import PageHome from "./home/PageHome.js";
import PageTheme from "./theme/PageTheme.js";
import PageEditor from "./editor/PageEditor.js";
import PageAbout from "./about/PageAbout.js";
import PageNotFound from "./not-found/PageNotFound.js";



export default class RootPages extends BaseComponent {
    usedComponents = [
        PageHome,
        PageTheme,
        PageEditor,
        PageAbout,
        PageNotFound
    ];

    // language=HTML
    html = `
        <div class="pages">
            <page-home class="page"></page-home>
            <page-theme class="page"></page-theme>
            <page-editor class="page"></page-editor>
            <page-about class="page"></page-about>
            <page-not-found class="page"></page-not-found>
        </div>
    `;

    // language=CSS
    style = `
        .pages {
            height: 100%;
            position: relative;
        
            overflow: hidden;
        }
        
        .page {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
        
            min-height: 100%;
            height: 100%;
        
            visibility: collapse;
            overflow-y: auto;
            opacity: 0;
        }
        
        .page.should-show {
            visibility: visible;
            transition: 250ms cubic-bezier(0.82, 0.01, 0.2, 1.01) opacity;
        }
        
        .page.visible {
            opacity: 1;
        }
    `;
}