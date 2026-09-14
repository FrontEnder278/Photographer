import './SliderNavigation.scss'
import classNames from 'classnames'
import Button from "@/components/Button";

const SliderNavigation = (props) => {
    const {
        className,
        isHiddenNavigationOnTablet = false,
        isVisibleNavigationOnTablet = false,
        id,
    } = props

    return (
        <div
            className={classNames(className, 'slider-navigation', {
                'hidden-tablet': isHiddenNavigationOnTablet,
                'visible-tablet': isVisibleNavigationOnTablet,
            })}
            id={id}
            data-js-slider-navigation=''
        >
            <Button
                iconName='arrow-slider-left'
                mode='slider'
                extraAttrs={{
                    'data-js-slider-previous-button': '',
                }}
            />
            <Button
                iconName='arrow-slider-right'
                mode='slider'
                extraAttrs={{
                    'data-js-slider-next-button': '',
                }}
            />
        </div>
    )
}

export default SliderNavigation