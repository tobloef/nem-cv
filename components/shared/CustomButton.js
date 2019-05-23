import BaseComponent from "../BaseComponent.js";

export default class CustomButton extends BaseComponent {
    static observedAttributes = ["secondary"];

    usedComponents = [];

    // language=HTML
    get html() {
        return `
            <button><slot></slot></button>
        `;
    }

    script = () => {

    };

    get style() {
        if (this.secondary){
            // language=CSS
            return `
                :host {
                    display: flex;
                }
                
                button {
                    width: 100%;
                    border: 2px solid transparent; 
                    border-bottom-color: black;
                    background-color: transparent;
                    color: black;
                    padding: 14px 28px;
                    cursor: pointer;
                    font-size: 0.8em;
                }
                
                button:hover{
                    background-color: black;
                    color: white;
                }
            `;
        }
        // language=CSS
        return `            
            :host {
                display: flex;
            }
            
            button {
                width: 100%;
                border: 2px solid black;
                background-color: transparent;
                color: black;
                padding: 14px 28px;
                cursor: pointer;
                font-size: 0.8em;
            }

            button:hover{
                background-color: black;
                color: white;
            }
        `;
    };
}
