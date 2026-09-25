import './About.scss'
import classNames from 'classnames'
import { Image } from 'minista'
import StatisticCard from "@/sections/About/components/StatisticCard";

const About = (props) => {

    const {
        className,
    } = props

    const aboutItems = [
        {
            num: '15+',
            description: 'Years in Business',
        },
        {
            num: '500+',
            description: 'Happy Clients',
        },
        {
            num: '10+',
            description: 'Photography Awards',
        },
        {
            num: '0,5+',
            description: 'International Shoots',
        },
        {
            num: '10,000+',
            description: 'Social Media Followers',
        },
        {
            num: '90%',
            description: 'Client Retention Rate',
        },
    ]

    return (
        <section className={classNames('about container', className)}>
            <div className="about__inner">
                <Image className='about__image-mobile visible-tablet'
                src='/src/assets/images/about/about-mobile.png'/>
                <div className="about__header">
                <div className="about__info">
                    <span className="about__subtitle h5">About</span>
                    <h1 className="about__title">
                        About Damien Braun
                    </h1>
                </div>
                   <Image className='about__image hidden-tablet' src='/src/assets/images/about/about-1.png'/>
                </div>
                <ul className="about__list">
                    {aboutItems.map((aboutItem, index) => (
                        <li
                            className="about__item"
                            key={index}
                        >
                            <StatisticCard
                                {...aboutItem}
                            />
                        </li>
                    ))}
                </ul>
                <div className="about__body">
                    <div className="about__body-wrapper">
                    <Image
                        className='about__body-icon hidden-tablet'
                        src='/src/assets/images/about/about-icon.png'
                    />
                    <span className='about__body-text hidden-tablet'>Scroll Down To See My Journey</span>
                    </div>
                    <Image
                        className='about__image-2 hidden-tablet'
                        src='/src/assets/images/about/about-3.png'
                    />
                </div>
                <div className="about__footer">
                    <div className="about__footer-inner">
                        <h2 className="about__footer-title h3">My Biography</h2>
                        <div className="about__footer-description">
                            <p>Damien Braun's love affair with photography began at a young age, nurtured by the captivating landscapes and vibrant cultures surrounding her in the heart of the USA. Her passion for storytelling through imagery led her to embark on a photography journey that has spanned over 15 years.
                                Driven by an insatiable curiosity to explore the beauty in everyday moments, Damien has honed her craft meticulously. Her background in digital media provided her with a solid foundation, but it's her keen eye for detail and an innate ability to capture raw emotions that truly set her apart.
                                Damien's journey is more than just taking pictures; it's about capturing the essence of the human spirit, the fleeting magic of nature, and the emotions that define our lives. With each click of her camera, she weaves stories that transcend time and space.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
