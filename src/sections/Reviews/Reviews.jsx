import './Reviews.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section";
import SliderNavigation from "@/components/SliderNavigation";
import Button from "@/components/Button";
import ReviewCard from "@/components/ReviewCard";
import Slider from "@/components/Slider";

const Reviews = (props) => {
    const {
        className,
    } = props

    const sliderNavigationId = 'reviews-slider-navigation'

    const reviewCardItems = [
        {
            title: 'Emily Johnson',
            description: 'Damien\'s photography doesn\'t just capture moments; it captures emotions. Hes work is simply mesmerizing.',
        },
        {
            title: 'John Smith',
            description: 'Damien has an incredible talent for making every event feel effortless, and the results speak for themselves.',
        },
        {
            title: 'Samantha Davis',
            description: 'I was blown away by Damien\'s ability to capture the essence of our wedding day. Hes photographs are our cherished memories.',
        },
        {
            title: 'Samantha Davis',
            description: 'Damien\'s photography doesn\'t just capture moments; it captures emotions. Hes work is simply mesmerizing.',
        },
        {
            title: 'Michael Brown',
            description: 'Damien has an incredible talent for making every event feel effortless, and the results speak for themselves.',
        },
        {
            title: 'Olivia Wilson',
            description: 'I was blown away by Damien\'s ability to capture the essence of our wedding day. Hes photographs are our cherished memories.',
        },
        {
            title: 'James Anderson',
            description: 'Damien\'s photography doesn\'t just capture moments; it captures emotions. Hes work is simply mesmerizing.',
        },
        {
            title: 'Sophia Taylor',
            description: 'Damien has an incredible talent for making every event feel effortless, and the results speak for themselves.',
        },
        {
            title: 'Daniel Thomas',
            description: 'I was blown away by Damien\'s ability to capture the essence of our wedding day. Hes photographs are our cherished memories.',
        },
    ]

    return (
        <Section
            title='What My Clients Say'
            titleId='reviews-title'
            subtitle='Testimonials'
            mode='group'
            column='column'
            mod='wrapper'
            actions={(
                <>
                    <div className="section__actions-wrapper">
                        <div className="section__actions-review">
                            <p className='section__actions-review-title'>Total Reviews</p>
                            <span className='section__actions-review-num'>323</span>
                        </div>
                    </div>
                    <div className="section__actions-action-group">
                    <SliderNavigation
                        isHiddenNavigationOnTablet
                        id={sliderNavigationId}
                    />
                    <Button
                        label='View All Works'
                        href='/'
                        iconPosition='after'
                        iconName='arrow-right'
                    />
                    </div>
                </>
            )}
        >

            <Slider
                navigationTargetElementId={sliderNavigationId}
                sliderParams={{
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 20,


                    breakpoints: {
                        1024: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,

                        },

                        1441: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 30,
                        },
                    },
                }}
            >
                {reviewCardItems.map((reviewCardItem, index) => (
                    <ReviewCard

                        {...reviewCardItem}
                        key={index}
                    />
                ))}
            </Slider>

        </Section>
    )
}

export default Reviews