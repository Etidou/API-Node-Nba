import '../css/app.scss';
import Background from './background';
// import SecondBackground from './second_background';

class App {
    constructor () {
        this.initApp();
    }

    initApp () {
        // Start applicationn

        new Background();
        // new SecondBackground();
    }
}

new App();


