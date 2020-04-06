import $ from 'jquery';
import {TimelineMax, Power4, Expo} from 'gsap';
export default class Preloader{
    constructor() {
        this.initsEls();
        this.initEvents(); 
    }
    initsEls() {
        this.$preloadOverlay = $('.preload-overlay');
        this.$containerOverlay = $('.preload-overlay .container');
        this.$textContainerOverlay = $('.preload-overlay .container div .text');
        this.innerOverlay = $('.preload-overlay .overlay');
        this.list_feature = ['naturel', 'artisanal', 'fais avec amour'];
    }
    initEvents() { 
        this.preloadAnimation();
        this.randomFeature();
    }

    randomFeature() {
        let randIndex = Math.floor(Math.random() * this.list_feature.length);
        return this.list_feature[randIndex];
    }

    preloadAnimation() {
        $(window).on('load', ()=> {
            this.$containerOverlay.css({
                display: 'flex',
            })
            let text_feature = this.randomFeature();
            $('#feature').text(`${text_feature} et`)
            let tl = new TimelineMax();
            tl
            .staggerTo(this.$textContainerOverlay, 3, {
                y: '0%',
                stagger: 0.8,
                ease: Expo.easeOut,
            }, '+=1')
            .to(this.innerOverlay, 1.2, {
               y: '0%',
                ease: Power4.easeInOut,
            },'+=0.5')
            .to(this.$preloadOverlay, 1.5, {
                y: '100%',
                 ease: Power4.easeInOut,
             },'-=1')
             .from($('.item-keyword'), 1.5, {
                y: '-5%',
                opacity: 0,
                 ease: Power4.easeInOut,
             })
        });
    }
}