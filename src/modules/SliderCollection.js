import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import getParams from "@/utils/getParams";

const rootSelector = "[data-js-slider]";

class Slider {

    selectors = {
        root: rootSelector,
        swiper: '[data-js-slider-swiper]',
        navigation: '[data-js-slider-navigation]',
        previousButton: '[data-js-slider-previous-button]',
        nextButton: '[data-js-slider-next-button]',
    }

    constructor(rootElement) {
        this.rootElement = rootElement;

        this.swiperElement =
            this.rootElement.querySelector(this.selectors.swiper);

        this.params =
            getParams(this.rootElement, this.selectors.root);

        this.mediaQuery = window.matchMedia(
            "(max-width: 1023px)"
        );

        this.setNavigation();
        this.init();

        this.mediaQuery.addEventListener(
            'change',
            this.handleBreakpointChange
        );
    }

    setNavigation() {
        const isMobile = this.mediaQuery.matches;

        this.navigationElement = !isMobile && this.params.navigationTargetElementId
        ? document.getElementById(this.params.navigationTargetElementId)
        : this.rootElement.querySelector(this.selectors.navigation);

        this.previousButtonElement = this.navigationElement.querySelector(this.selectors.previousButton);
        this.nextButtonElement = this.navigationElement.querySelector(this.selectors.nextButton);
    }

    init() {
        this.swiper = new Swiper(this.swiperElement, {
            ...this.params.sliderParams,

            modules: [Navigation],

            navigation: {
                prevEl: this.previousButtonElement,
                nextEl: this.nextButtonElement,
            },
        });
    }

    handleBreakpointChange = () => {
        // Отвязываем старые кнопки
        this.swiper.navigation.destroy();

        // Находим navigation для нового breakpoint
        this.setNavigation();

        // Подставляем новые кнопки
        this.swiper.params.navigation.prevEl =
            this.previousButtonElement;

        this.swiper.params.navigation.nextEl =
            this.nextButtonElement;

        // Подключаем новые кнопки
        this.swiper.navigation.init(); // инициализируем новый слайдер
        this.swiper.navigation.update(); // обновляем состояние кнопок
    }
}

class SliderCollection {

    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach(
            (element) => {
                new Slider(element);
            });
    }
}

export default SliderCollection;