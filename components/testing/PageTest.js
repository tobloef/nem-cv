import BaseComponent from "../BaseComponent.js";
import ContentGetTest from "./ContentGetTest.js";

export default class PageTest extends BaseComponent {
    usedComponents = [
        ContentGetTest
    ];

    get html() {
        return `
            <div>
                <content-get-test content-key="name" content-type="custom">Tobias Løfgren</content-get-test>
                <div content-key="experiences" content-type="array">
                    <div>
                        <div content-type="object">
                            <content-get-test content-key="title" content-type="custom">Apple picker</content-get-test>
                            <content-get-test content-key="company" content-type="custom">Apple</content-get-test>
                        </div>
                        <div content-type="object">
                            <content-get-test content-key="title" content-type="custom">Janitor</content-get-test>
                            <content-get-test content-key="company" content-type="custom">Google</content-get-test>
                        </div>
                        <div content-type="object">
                            <content-get-test content-key="title" content-type="custom">CEO</content-get-test>
                            <content-get-test content-key="company" content-type="custom">Tobias Løfgren</content-get-test>
                        </div>
                    </div>
                </div>
                <content-get-test content-key="test" content-type="custom">Cool!</content-get-test>
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
