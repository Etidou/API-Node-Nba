import $ from 'jquery';

import '../css/app.scss';
import Background from './background';
import SecondBackground from './second_background';
import ThirdBackground from './East';
import FourthBackground from './West';
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
             new ThirdBackground();
        }

         if($('.js-fourth-background').length){
            console.log("fourth_background");
             new FourthBackground();
        }

        if($('.js-background')){
        	 new Background();
        }
    }
}

new App();


