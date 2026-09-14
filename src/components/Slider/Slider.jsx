import 'swiper/css'
import './Slider.scss'
import classNames from 'classnames'
import SliderNavigation from "@/components/SliderNavigation";


const defaultSliderParams = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
}

const Slider = (props) => {
    const {
        children,
        navigationTargetElementId = null,
        sliderParams = defaultSliderParams,
    } = props

    return (
        <div className="slider container" data-js-slider={JSON.stringify({
            sliderParams,
            navigationTargetElementId,
        })}>
            <div className="slider__swiper swiper" data-js-slider-swiper=''>
                <ul className="slider__list swiper-wrapper">
                    {children.map((slide, index) => (
                        <li className="slider__item swiper-slide" key={index}>
                            {slide}
                        </li>
                    ))}
                </ul>
                <SliderNavigation
                    className="slider__navigation"
                    isVisibleNavigationOnTablet
                    data-js-slider-navigation=''
                />
            </div>
        </div>
    )
}

export default Slider