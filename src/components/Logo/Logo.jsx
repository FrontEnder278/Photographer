import './Logo.scss'
import classNames from 'classnames'

const Logo = (props) => {
    const {
        className,
        title,
        loading = 'eager',
    } = props

    return (
        <a
            className={classNames(className, 'logo')}
            href='/'
            title={title}
            aria-label={title}
        >
            <img
                className='logo__image'
                src={`${import.meta.env.BASE_URL}logo.svg`}
                alt=""
                width={135}
                height={27}
                loading={loading}
            />
        </a>
    )
}

export default Logo