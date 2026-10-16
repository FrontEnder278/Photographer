import './Logo.scss'
import classNames from 'classnames'
import getPageHref from '@/utils/getPageHref'
import getPublicAssetUrl from '@/utils/getPublicAssetUrl'

const Logo = (props) => {
    const {
        className,
        title,
        loading = 'eager',
    } = props

    return (
        <a
            className={classNames(className, 'logo')}
            href={getPageHref()}
            title={title}
            aria-label={title}
        >
            <img
                className='logo__image'
                src={getPublicAssetUrl('logo.svg')}
                alt=""
                width={135}
                height={27}
                loading={loading}
            />
        </a>
    )
}

export default Logo
