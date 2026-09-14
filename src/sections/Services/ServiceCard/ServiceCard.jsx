import './ServiceCard.scss'
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { Image } from "minista";
import SliderNavigation from "@/components/SliderNavigation";

const ServiceCard = (props) => {
    const {
        title,
        description,
        highlightsItems,
    } = props

    return (
        <div className="service-card service-card__inner">

            <div className="service-card__content">

                <a href="/" className="service-card__link">
                    <h3 className="service-card__text hero__header-link">
                        {title}
                    </h3>

                    <Button
                        className="hero__header-button"
                        label="Arrow"
                        isLabelHidden
                        iconName="arrow-top-right-button"
                        mode="arrow"
                        hasFillIcon
                    />
                </a>

                <div className="service-card__description">
                    <p>{description}</p>
                </div>

                <div className="service-card__highlights">
                    <h4 className="service-card__highlights-title">
                        Service Highlights
                    </h4>

                    <ul className="service-card__highlights-list">
                        {highlightsItems.map(({ icon, text }, index) => (
                            <li
                                className="service-card__highlights-item"
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
            </div>
            <div className="service-card__image">
                <Image src="/src/assets/images/services/services.png"/>
            </div>

        </div>
    )
}

export default ServiceCard