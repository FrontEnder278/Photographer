import './Damien.scss'
import Section from "@/layouts/Section";
import Button from "@/components/Button";
import {Image} from "minista";
import Icon from "@/components/Icon";
import Socials from "@/components/Socials";

const Damien = () => {


    const itemContact = [
        {
            label: "Email",
            value: "damienbraun@gmail.com",
            href: "mailto:damienbraun@gmail.com",
        },
        {
            label: "Phone Number",
            value: "+00 000000000",
            href: "tel:+00000000000",
        }
    ]

    return (
       <Section
            className='damien'
            title="I am Damien"
            titleId='damien-title'
            subtitle='about'
            actions={(
                <Button
                    href='/about'
                    label='Know More'
                    iconName='arrow-right'
                    iconPosition='after'
                />
            )}
       >
            <Image
                className='damien__image'
                src="/src/assets/images/damien/damien.png"
            />
           <div className="damien__body">
               <div className="damien__header">
                   <div className="damien__header-wrapper">
                   <Icon
                 className='damien__icon'
                 name='star-decor'
                 hasFill
                 modeIcon='purple'
                   />
                <h3 className="damien__title h4">Introduction</h3>
                   </div>
                   <div className="damien__description">
                       <p>
                           My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.
                       </p>
                   </div>
               </div>
               <div className="damien__info">
                    <div className="damien__text">
                        <div className="damien__text-wrapper">
                            <Icon
                                className='damien__icon'
                                name='star-decor'
                                hasFill
                                modeIcon='purple'
                            />
                            <h3 className="damien__title h4">Contact Information</h3>
                        </div>
                        <div className="damien__contact">
                                {itemContact.map(({label, value, href}, index) => (
                                    <div className="damien__contact-item" key={index}>
                                        <h4 className="damien__contact-label">
                                            {label}
                                        </h4>
                                        <a
                                            className="damien__contact-value"
                                            href={href}
                                        >
                                            {value}
                                        </a>
                                    </div>
                                ))}
                        </div>
                        <div className="damien__actions">
                            <Socials/>
                            <div className="damien__buttons">
                                <Button
                                    className='damien__button'
                                    label='Let’s Work'
                                />
                                <Button
                                    className='damien__button'
                                    label='Download CV'
                                />
                            </div>
                        </div>
                    </div>
               </div>
           </div>
       </Section>
    )
}

export default Damien