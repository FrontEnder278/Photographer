import './Icon.scss'
import classNames from 'classnames'
import { Icon as MinistaIcon } from 'minista'

const Icon = (props) => {
    const {
        className,
        hasFill = false,
        name,
        modeIcon,
    } = props

    return (
        <span
            className={classNames(className, 'icon', {
                [`icon--${modeIcon}`]: modeIcon,
            })}
        >
            <MinistaIcon
                iconId={name}
                fill={hasFill ? 'currentColor' : 'none'}
                stroke={hasFill ? 'none' : 'currentColor'}/>
        </span>
    )
}

export default Icon