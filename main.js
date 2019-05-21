import Router from './lib/Router.js';
import Pages from './lib/Pages.js';

import PageHome from './components/home/PageHome.js';
import PageAbout from './components/about/PageAbout.js';
import PageTheme from './components/theme/PageTheme.js';
import PageNotFound from './components/notfound/PageNotFound.js';

const pages = new Pages();
const router = new Router();

//Set router mode. Can either be history (use pure urls) or hash (uses a # before the url).
router.config({ mode: 'history'});

//Register pages
pages.add('home', document.querySelector('page-home'))
     .add('theme', document.querySelector('page-theme'))
     .add('about', document.querySelector('page-about'))
     .add('notfound', document.querySelector('page-notfound'));

//Register routes
router.add(/about/, _=>{
        pages.show('about');
    })
    .add(/theme\/(.*)/, args => {
        try {
            pages.get('theme').setTheme(args);
        }
        catch(e) {
            alert(e.message);
            router.navigate('');
            return;
        }

        pages.show('theme');
    })
    //The default route, which will be called if no other match is found.
    .add(args =>{
        //Since this route is both invoked for home and 404 we need to figure out which route to show
        pages.show(router.currentUrl === "" ? 'home' : 'notfound');
    });

//Attach and enable router
router.listen().captureAnchors();
