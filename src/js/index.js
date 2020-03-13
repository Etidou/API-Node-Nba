import $ from 'jquery';

import '../css/app.scss';
import Background from './background';
import SecondBackground from './second_background';

class App {
    constructor () {
        this.initApp();
    }

    initApp () {
        // Start applicationn

        // new Background();
        // // new SecondBackground();

        if($('.js-second-background').length){
            console.log("second_background");
        	 new SecondBackground();
        }

        if($('.js-background')){
        	 new Background();
        }
    }
}

new App();


