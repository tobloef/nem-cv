"use strict";

import BaseComponent from "../BaseComponent.js";
import PageHome from "../home/PageHome.js";
import PageEditor from "../editor/PageEditor.js";
import PageTemplates from "../templates/PageTemplates.js";
import PageNotFound from "../not-found/PageNotFound.js";
import Router from "../../lib/Router.js";
import CVModern from "../cvs/CVModern.js";
import CVSimple from "../cvs/CVSimple.js";
import CVOctagon from "../cvs/CVOctagon.js";

export default class RootRoutes extends BaseComponent {
    usedComponents = [
        PageHome,
        PageTemplates,
        PageEditor,
        PageNotFound,
    ];

    routes = [
        {pattern: "^/?$", component: PageHome},
        {pattern: "^/templates$", component: PageTemplates},
        {pattern: "^/editor$", component: PageEditor},

        {pattern: "^/cv-simple$", component: CVSimple},
        {pattern: "^/cv-octagon", component: CVOctagon},
        {pattern: "^/cv-modern$", component: CVModern},

        {pattern: "", component: PageNotFound},
    ];

    script = () => {
        Router.clear();
        for (const route of this.routes) {
            if (route.pattern == null) {
                continue;
            }
            Router.add(route.pattern, () => {
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