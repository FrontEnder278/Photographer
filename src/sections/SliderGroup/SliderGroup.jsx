import './SliderGroup.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section";
import SliderNavigation from "@/components/SliderNavigation";
import Button from "@/components/Button";
import getPageHref from "@/utils/getPageHref";
import Slider from "@/components/Slider";
import MediaCard from "@/components/MediaCard";

const SliderGroup = (props) => {
    const {
        className,
    } = props

    const sliderGroupItems = [
        {
            titleGroup: 'Portraits Photography',
            id: 'portraits',
            items: [
                {
                    img: '/src/assets/images/slider-group/1.jpg',
                    title: 'Faces of Resilience',
                    date: 'March 2022',
                },
                {
                    img: '/src/assets/images/slider-group/2.jpg',
                    title: 'Innocence Unveiled',
                    date: 'January 2020',
                },
                {
                    img: '/src/assets/images/slider-group/3.jpg',
                    title: 'Elegance in Monochrom',
                    date: 'January 2020',
                },
                {
                    img: '/src/assets/images/slider-group/1.jpg',
                    title: 'Faces of Resilience',
                    date: 'March 2022',
                },
                {
                    img: '/src/assets/images/slider-group/2.jpg',
                    title: 'Innocence Unveiled',
                    date: 'January 2020',
                },
                {
                    img: '/src/assets/images/slider-group/3.jpg',
                    title: 'Elegance in Monochrom',
                    date: 'January 2020',
                },
                {
                    img: '/src/assets/images/slider-group/1.jpg',
                    title: 'Faces of Resilience',
                    date: 'March 2022',
                },
                {
                    img: '/src/assets/images/slider-group/2.jpg',
                    title: 'Innocence Unveiled',
                    date: 'January 2020',
                },
                {
                    img: '/src/assets/images/slider-group/3.jpg',
                    title: 'Elegance in Monochrom',
                    date: 'January 2020',
                },
            ]
        },
        {
            titleGroup: 'Events Photography',
            id: 'events',
            items: [
                {
                    img: '/src/assets/images/slider-group/4.jpg',
                    title: 'A Wedding Tale',
                    date: 'March 2022',
                },
                {
                    img: '/src/assets/images/slider-group/5.jpg',
                    title: 'Corporate Excellence Summit',
                    date: 'January 2020',
                },
                {
                    img: '/src/assets/images/slider-group/6.jpg',
                    title: 'Festival of Colors',
                    date: 'January 2020',
                },
                {
                    img: '/src/assets/images/slider-group/4.jpg',
                    title: 'A Wedding Tale',
                    date: 'March 2022',
                },
                {
                    img: '/src/assets/images/slider-group/5.jpg',
                    title: 'Corporate Excellence Summit',
                    date: 'January 2020',
                },
                {
                    img: '/src/assets/images/slider-group/6.jpg',
                    title: 'Festival of Colors',
                    date: 'January 2020',
                },
                {
                    img: '/src/assets/images/slider-group/4.jpg',
                    title: 'A Wedding Tale',
                    date: 'March 2022',
                },
                {
                    img: '/src/assets/images/slider-group/5.jpg',
                    title: 'Corporate Excellence Summit',
                    date: 'January 2020',
                },
                {
                    img: '/src/assets/images/slider-group/6.jpg',
                    title: 'Festival of Colors',
                    date: 'January 2020',
                },
            ]
        },
        {
            titleGroup: 'Commercial Photography',
            id: 'commercial',
            items: [
                {
                    img: '/src/assets/images/slider-group/7.jpg',
                    title: 'Product Elegance',
                    date: 'March 2022',
                },
                {
                    img: '/src/assets/images/slider-group/8.jpg',
                    title: 'Brand Storytelling',
                    date: 'January 2020',
                },
                {
                    img: '/src/assets/images/slider-group/9.jpg',
                    title: 'Culinary Delights',
                    date: 'January 2020',
                },
                {
                    img: '/src/assets/images/slider-group/7.jpg',
                    title: 'Product Elegance',
                    date: 'March 2022',
                },
                {
                    img: '/src/assets/images/slider-group/8.jpg',
                    title: 'Brand Storytelling',
                    date: 'January 2020',
                },
                {
                    img: '/src/assets/images/slider-group/9.jpg',
                    title: 'Culinary Delights',
                    date: 'January 2020',
                },
                {
                    img: '/src/assets/images/slider-group/7.jpg',
                    title: 'Product Elegance',
                    date: 'March 2022',
                },
                {
                    img: '/src/assets/images/slider-group/8.jpg',
                    title: 'Brand Storytelling',
                    date: 'January 2020',
                },
                {
                    img: '/src/assets/images/slider-group/9.jpg',
                    title: 'Culinary Delights',
                    date: 'January 2020',
                },
            ]
        },
    ]

    return (
        <div className={classNames(className, 'slider-group')}>
            {sliderGroupItems.map(({ titleGroup, id, items }) => {
                const sliderNavigationId = `${id}-navigation`

                return (
                    <Section
                        key={id}
                        title={titleGroup}
                        titleId={`slider-group-${id}-title`}
                        mode='group'
                        actions={
                            <SliderNavigation
                                id={sliderNavigationId}
                                isHiddenNavigationOnTablet
                            />
                        }
                    >
                        <Slider
                            navigationTargetElementId={sliderNavigationId}
                            sliderParams={{
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 30,
                                breakpoints: {
                                    1024: {
                                        slidesPerView: 2,
                                        slidesPerGroup: 2,
                                    },
                                    1441: {
                                        slidesPerView: 3,
                                        slidesPerGroup: 3,
                                    },
                                }}}
                        >
                            {items.map((workItem, index) => (
                                <MediaCard
                                    {...workItem}
                                    key={index}
                                />
                            ))}
                        </Slider>
                    </Section>
                )
            })}
        </div>
    )
}

export default SliderGroup