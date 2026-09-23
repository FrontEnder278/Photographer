import './TimelineCard.scss'
import classNames from 'classnames'

const TimelineCard = (props) => {
    const {
        title,
        description,
    } = props

    return (
        <div
            className='timeline-card'
        >
            <h3 className="timeline-card__title h2">{title}</h3>
            <div className="timeline-card__description">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default TimelineCard