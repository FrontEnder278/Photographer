import './ContactTouch.scss'
import classNames from 'classnames'
import Socials from "@/components/Socials";
import {Image} from "minista";


const ContactTouch = (props) => {
    const {
        className,
    } = props

    const titleId = 'contact-touch-title'

    return (
        <section
            className='contact-touch'
        >
            <div className="contact-touch__inner container">
                <Image className='contact-touch__image visible-tablet' src='/src/assets/images/contact-touch/bg-mobile.png' />
                <Socials className='contact-touch__soc1als' />
                <div className="contact-touch__header">
                    <span className="contact-touch__subtitle">Contact Me</span>
                    <h1 className="contact-touch__title h2" id={titleId}>Get in Touch with Me</h1>
                    <div className="contact-tocuh__description">
                        <p>Step into a world of timeless photography with Damien Braun. Explore our range of photography services, each crafted to tell your unique story through captivating images. Whether it's the magic of portraits, the emotion of events, or the allure of commercial photography, we're here to bring your vision to life.</p>
                    </div>
                </div>
                <span className='contact-touch__hint hidden-tablet'>Scroll Down To Send me a Message</span>
            </div>
        </section>
    )
}

export default ContactTouch
