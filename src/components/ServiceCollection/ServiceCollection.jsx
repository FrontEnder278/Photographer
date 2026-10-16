import './ServiceCollection.scss'
import classNames from 'classnames'
import Slider from "@/components/Slider";
import {Image} from "minista";
import SliderNavigation from "@/components/SliderNavigation";
import Icon from "@/components/Icon";

const ServiceCollection = (props) => {
    const {
        className,
        title,
        description,
        imgSrc = [],
        cards = [],
    } = props

    return (
        <div
            className='service-collection'
        >
            <div className="service-collection__header">
                <div className="service-collection__info">
                    <h3 className="service-collection__title">{title}</h3>
                    <div className="service-collection__description">
                        <p>{description}</p>
                    </div>
                    <a className="service-collection__link" href="/">
                        <p className='service-collection__text'>View Projects</p>
                        <Icon modeIcon='arrow-right-top' name='arrow-right-top' hasFill/>
                    </a>
                </div>
                <Slider className="service-collection__slider">
                    {imgSrc.map((image, index) => {
                        const desktop = typeof image === 'string' ? image : image.desktop
                        const tablet = typeof image === 'string' ? null : image.tablet

                        return (
                            <picture key={index}>
                                {tablet && (
                                    <source
                                        media="(max-width: 480px)"
                                        srcSet={tablet}
                                    />
                                )}
                                <Image src={desktop} alt="" />
                            </picture>
                        )
                    })}
                </Slider>
            </div>
            <div className="service-collection__body">
                {cards.map(({titleItem, price, items: cardItems = []}, index) => {
                    return (
                        <article className="service-collection__article">
                        <div className="service-collection__rate">
                            <h4 className="service-collection__rate-title">{titleItem}</h4>
                            <div className="service-collection__rate-wrapper">
                            <span className="service-collection__rate-price h1">{price}</span>
                                <a className='service-collection__rate-link'>
                                    <p className='service-collection__text'>Book a Call</p>
                                    <Icon name='arrow-right-top' hasFill/>
                                </a>
                            </div>

                        </div>
                            <div className="service-collection__package">
                                <ul className="service-collection__list">
                                    {cardItems.map(({icon, text}, index) => (
                                        <li
                                            className="service-collection__item service-card__highlights-item"
                                            key={index}
                                        >
                                            <Icon
                                                className="service-card__highlights-icon"
                                                name={icon}
                                                hasFill
                                            />

                                            <p className="service-card__highlights-text">
                                                {text}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default ServiceCollection
