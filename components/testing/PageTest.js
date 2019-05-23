import BaseComponent from "../BaseComponent.js";
import ContentGetTest from "./ContentGetTest.js";

export default class PageTest extends BaseComponent {
    usedComponents = [
        ContentGetTest
    ];

    get html() {
        return `
            <div>
                <content-get-test content-key="name" content-type="component">Tobias Løfgren</content-get-test>
                <div content-key="experiences" content-type="array">
                    <div>
                        <div content-type="component">
                            <content-get-test content-key="title" content-type="component">Apple picker</content-get-test>
                            <content-get-test content-key="company" content-type="component">Apple</content-get-test>
                        </div>
                        <div content-type="component">
                            <content-get-test content-key="title" content-type="component">Janitor</content-get-test>
                            <content-get-test content-key="company" content-type="component">Google</content-get-test>
                        </div>
                        <div content-type="component">
                            <content-get-test content-key="title" content-type="component">CEO</content-get-test>
                            <content-get-test content-key="company" content-type="component">Tobias Løfgren</content-get-test>
                        </div>
                    </div>
                </div>
                <content-get-test content-key="test" content-type="component">Cool!</content-get-test>
            </div> 
            <button id="get-content">Get the content</button>           
        `;
    };

    getContent = () => {
        const obj = {};
        super.getContent(obj);
        return obj;
    };

    script = () => {
        const button = this.shadowRoot.getElementById("get-content");
        button.addEventListener("click", () => {
            console.log(this.getContent({}));
        });
    }
}
