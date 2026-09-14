import './Services.scss'
import Section from "@/layouts/Section";
import Button from "@/components/Button";
import Slider from "@/components/Slider";
import serviceItems from "@/sections/Services/serviceItems";
import ServiceCard from "@/sections/Services/ServiceCard";
import SliderNavigation from "@/components/SliderNavigation";


const Services = () => {

    const sliderNavigationId = 'services-slider-navigation'

    return (
        <Section
            className='services'
            titleId='services-title'
            title='My Photography Services'
            subtitle='Services'
            mode='group'
            actions={(
                <>
                <SliderNavigation
                    id={sliderNavigationId}
                    isHiddenNavigationOnTablet

                />
                <Button
                    label='View All Services'
                    href='/services'
                    iconPosition='after'
                    iconName='arrow-right'
                />
                </>
            )}
        >

        <Slider
            navigationTargetElementId={sliderNavigationId}
        >
            {serviceItems.map((serviceItem, index) => (

                <ServiceCard
                    {...serviceItem}
                    key={index}
                />

            ))}
        </Slider>
        </Section>
    )
}

export default Services