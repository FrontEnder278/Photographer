import './MediaCard.scss'
import { Image } from 'minista'
import Icon from "@/components/Icon";

const MediaCard = (props) => {
    const {
        img,
        title,
        date,
    } = props

    return (
        <div className="media-card">
            <div className="media-card__content">
                <Image
                    className="media-card__image"
                    src={img}
                    alt=''
                />

                <div className="media-card__body">
                    <div className="media-card__text">
                        <h3 className="media-card__title h5">
                            {title}
                        </h3>

                        <p className="media-card__date">
                            {date}
                        </p>
                    </div>

                    <a className="media-card__link" href="/">
                        <span>View Project</span>

                        <Icon
                            name="arrow-right-top"
                            hasFill
                            modeIcon="arrow-right-top"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MediaCard