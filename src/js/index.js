import $ from 'jquery';

import '../css/app.scss';
import Background from './background';
import SecondBackground from './second_background';
import ThirdBackground from './third';
import Second from './second';




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
        	 new Second();
        }

        if($('.js-third-background').length){
            console.log("third_background");
             new Third();
        }

        if($('.js-background')){
        	 new Background();
        }
    }
}

new App();


