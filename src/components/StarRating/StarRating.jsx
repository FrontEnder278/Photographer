import './StarRating.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";

const StarRating = (props) => {
    const {
        className,
    } = props

    return (
        <div
            className='star-rating'
        >
            <Icon name='star' hasFill modeIcon='star'/>
            <Icon name='star' hasFill modeIcon='star'/>
            <Icon name='star' hasFill modeIcon='star'/>
            <Icon name='star' hasFill modeIcon='star'/>
            <Icon name='star' hasFill modeIcon='star'/>
        </div>
    )
}

export default StarRating