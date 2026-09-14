import './Socials.scss'
import classNames from 'classnames'
import Button from "@/components/Button";

const Socials = (props) => {
    const {
        className,
    } = props

    return (
        <div
            className={classNames(className, 'soc1als')}
        >
            <Button
                className='soc1als__button'
                href='/'
                iconName='facebook'
                label='Facebook'
                hasFillIcon
                isLabelHidden
                target='_blank'
            />
            <Button
                className='soc1als__button'
                href='/'
                iconName='twitter'
                label='Twitter'
                hasFillIcon
                isLabelHidden
                target='_blank'
            />
            <Button
                className='soc1als__button'
                href='/'
                iconName='linkedin'
                hasFillIcon
                label='Linked-In'
                isLabelHidden
                target='_blank'
            />

        </div>
    )
}

export default Socials