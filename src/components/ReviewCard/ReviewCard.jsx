import './ReviewCard.scss'
import classNames from 'classnames'
import Socials from "@/components/Socials";
import StarRating from "@/components/StarRating";

const ReviewCard = (props) => {
    const {
        title,
        description,
    } = props

    return (
        <article
            className='review-card'
        >
            <div className="review-card__inner">
                <div className="review-card__header">
                    <div className="review-card__text">
                        <h3 className="review-card__title h5">{title}</h3>
                        <span className="review-card__location">USA, California</span>
                    </div>
                    <Socials className="review-card__soc1als"/>
                </div>
                <div className="review-card__stars">
                    <StarRating/>
                </div>
                <div className="review-card__description">
                    <p>{description}</p>
                </div>
            </div>
        </article>
    )
}

export default ReviewCard