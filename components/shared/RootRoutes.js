"use strict";

import BaseComponent from "../BaseComponent.js";
import PageHome from "../home/PageHome.js";
import PageEditor from "../editor/PageEditor.js";
import PageTemplates from "../templates/PageTemplates.js";
import PageNotFound from "../not-found/PageNotFound.js";
import Router from "../../lib/Router.js";
import CVModern from "../cvs/CVModern.js";
import CVSimple from "../cvs/CVSimple.js";
import CVEdges from "../cvs/CVEdges.js";
import PagePreview from "../preview/PagePreview.js";
import PageThemePreview from "../preview/PageThemePreview.js";
import templateStyles from "../../lib/constants/template-styles.js";
import {setStorageItem} from "../../lib/storage-helper.js";

export default class RootRoutes extends BaseComponent {
    usedComponents = [
        PageHome,
        PageTemplates,
        PageEditor,
        PagePreview,
        PageNotFound,
        PageThemePreview,

        CVSimple,
        CVEdges,
        CVModern,
    ];

    routes = [ //list over available pages within the website
        {pattern: "^/?$", component: PageHome},
        {pattern: "^/templates$", component: PageTemplates},
        {pattern: "^/editor$", component: PageEditor},
        {pattern: "^/preview$", component: PagePreview},

        ...Object.keys(templateStyles).map(template => ({
            pattern: `^/examples/${template}`,
            component: PageThemePreview,
            onNavigate: () => {
                setStorageItem("preview-template-id", template);
            }
        })),

        {pattern: "", component: PageNotFound},
    ];

    script = () => {
        Router.clear(); //when starting, add all routes to the router
        for (const route of this.routes) {
            if (route.pattern == null) {
                continue;
            }
            Router.add(route.pattern, () => {
                if (route.onNavigate != null) {
                    route.onNavigate();
                }
                this.empty();
                if (route.component != null) {
                    const element = document.createElement(route.component.elementName);
                    this.shadowRoot.appendChild(element);
                } else if (route.html != null) {
                    this.shadowRoot.innerHTML = route.html;
                }
            });
        }
    };
}
