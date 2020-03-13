import '../css/app.scss';
import Background from './background';

class App {
    constructor () {
        this.initApp();
    }

    initApp () {
        // Start applicationn

        new Background();
    }
}

new App();
