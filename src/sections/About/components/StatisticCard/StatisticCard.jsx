import './StatisticCard.scss'
import classNames from 'classnames'

const StatisticCard = (props) => {
    const {
        num,
        description,
    } = props

    return (
        <div
            className='statistic-card'
        >
            <div className="statistic-card__inner">
                <h3 className="statistic-card__title">{num}</h3>
                <div className='statistic-card__description'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default StatisticCard