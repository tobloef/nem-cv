// language=CSS

const css = `
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:800|Oswald:500|Raleway&display=swap');

    :host{
        --h1: 'Open Sans', sans-serif;
        --h2: 'oswald', sans-serif;
        --p: 'raleway', sans-serif;
        --h1-size: 2em;
        --p-size: 1.1em;
        --editable-empty-text-color: #aaa;
        --list-item-direction: row-reverse;
    }
    
    
    /* The following lines should not be in this file, but due to a bug with Part in webcomponents, we did not find 
    a proper solution. This works however, and it is therefore included*/
    #experience-container{
        flex-direction: row-reverse;
        justify-content: flex-end;
    }
        
    #experience-container .when {
        padding-right: 1em;
    }
`;

export default css;
