import './Work.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section";
import SliderNavigation from "@/components/SliderNavigation";
import Button from "@/components/Button";
import MediaCard from "@/components/MediaCard";
import Slider from "@/components/Slider";

const Work = (props) => {
    const {
        className,
    } = props

    const menuItems = [
        {
            img: '/src/assets/images/work/1.png',
            title: 'Faces of Resilience',
            date: 'March 2022',
        },
        {
            img: '/src/assets/images/work/2.png',
            title: 'A Wedding Tale',
            date: 'January 2020',
        },
        {
            img: '/src/assets/images/work/3.png',
            title: 'Product Elegance',
            date: 'January 2020',
        },
        {
            img: '/src/assets/images/work/1.png',
            title: 'Faces of Resilience',
            date: 'March 2022',
        },
        {
            img: '/src/assets/images/work/2.png',
            title: 'A Wedding Tale',
            date: 'January 2020',
        },
        {
            img: '/src/assets/images/work/3.png',
            title: 'Product Elegance',
            date: 'January 2020',
        },
        {
            img: '/src/assets/images/work/1.png',
            title: 'Faces of Resilience',
            date: 'March 2022',
        },
        {
            img: '/src/assets/images/work/2.png',
            title: 'A Wedding Tale',
            date: 'January 2020',
        },
        {
            img: '/src/assets/images/work/3.png',
            title: 'Product Elegance',
            date: 'January 2020',
        },
    ]

    const sliderNavigationId = 'work-slider-navigation'

    return (
       <Section
           title='Explore My photography work'
           subtitle='Portfolio'
           titleId='work-title'
           mode='group'
           actions={(
               <>
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
               </>
           )}
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
               {menuItems.map((workItem, index) => (
                   <MediaCard
                       {...workItem}
                       key={index}
                   />
               ))}
           </Slider>
       </Section>
    )
}

export default Work