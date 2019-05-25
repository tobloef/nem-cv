import BaseComponent from "../BaseComponent.js";
import wait from '../../lib/wait.js';

export default class TemplateSlider extends BaseComponent {
    usedComponents = [];

    slideSpeed = 3000;

    _shouldBeRunning = false;

    _current = 0;

    _timeout = null;

    _templates = null;

    get html() {
        return `
            <div class="window">
                <div class="menubar">
                    <span class="barbutton red"></span>
                    <span class="barbutton yellow"></span>
                    <span class="barbutton green"></span>
                </div>
                <div class="content">
                    <img class="template" alt="Skabelonen Moderne" src="/img/templates/template-modern.svg"></img>
                    <img class="template" alt="Skabelonen Kanter" src="/img/templates/template-octagon.svg"></img>
                    <img class="template contain" alt="Skabelonen Simpel" src="/img/templates/template-simple.svg"></img>
                </div>
            </div>
        `;
    }

    get css() {
        // language=CSS
        return `
            :host {
                --border-radius: 5px;
                --border-color:#bcbcbc;
                --bar-height: 30px;
                --bar-background-color: #e3e3e3;

                --width: 100%;
                --height: 340px;

                --bar-button-size: 15px;
                --bar-button-red: hsl(0, 100%, 65%);
                --bar-button-yellow: hsl(60, 93%, 73%);
                --bar-button-green: hsl(120, 78%, 65%);

                --window-background-color: white;
                --window-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

                display: flex;
                justify-content: center;
            }

            .window {
                display: flex;
                flex-direction: column;
                width: 100%;
                max-width: var(--width);
                box-shadow: var(--window-shadow);
            }

            .menubar {
                display: flex;
                align-items: center;
                width: 100%;
                height: var(--bar-height);
                max-width: 100%;
                background: var(--bar-background-color);
                border: 1px solid var(--border-color);
                border-radius: var(--border-radius) var(--border-radius) 0px 0px;
                border-bottom-color: transparent;
            }

            .barbutton {
                display: block;
                width: var(--bar-button-size);
                height: var(--bar-button-size);
                background-color: red;
                margin: 0px 5px;
                border-radius: 100%;
            }

            .barbutton.red {
                background-color: var(--bar-button-red);
            }

            .barbutton.yellow {
                background-color: var(--bar-button-yellow);
            }

            .barbutton.green {
                background-color: var(--bar-button-green);
            }

            .content {
                background-color: var(--window-background-color);
                position: relative;
                height: var(--height);
                width: 100%;
                border: 1px solid var(--border-color);
                overflow: hidden;
                border-radius: 0px 0px var(--border-radius) var(--border-radius);
                max-width: var(--width);
            }

            .template {
                position: absolute;
                left: 0;
                right: 0;
                width: 100vw;
                max-width: var(--width);
                height: 100%;
                margin-left: auto;
                margin-right: auto;
                opacity: 0;
                transition: 200ms ease-in-out opacity;
                object-fit: cover;
                object-position: top;
            }

            .template.contain {
                object-fit: contain;
            }

            .template.visible {
                opacity: 1;
            }

            @media(min-width: 650px) {
                :host {
                    --width: 600px;
                }
            }

            @media(min-width: 850px) {
                :host {
                    --width: 800px;
                    --height: 500px;
                }
            }

            @media(min-width: 1300px) {
                :host {
                    --height: 600px;
                    --width: 1100px;
                }
            }
        `;
    }

    script = () => {
        this._templates = this.shadowRoot.querySelectorAll('.template');

        requestAnimationFrame(_=> {
            this.start();
        });
    };

    start = () => {
        this._shouldBeRunning = true;
        this._tick();
    };

    stop = () => {
        this._shouldBeRunning = false;
    };

    resume = () => {
        this._shouldBeRunning = true;
        this._next();
    };

    _tick() {
        if(!this._shouldBeRunning) return;

        this._templates.forEach(template => {
            template.classList.remove("visible");
        });

        const template = this._templates[this._current];

        template.classList.add("visible");

        this._current = (this._current + 1) % this._templates.length;

        this._next();
    }

    _next() {
        if(this._timeout != null) {
            clearTimeout(this._timeout);
            this._timeout = null;
        }

        this._timeout = setTimeout(_=> {
            this._tick();
        }, this.slideSpeed);
    }
}
