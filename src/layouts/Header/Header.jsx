import './Header.scss'
import Logo from "@/components/Logo";
import classNames from "classnames";
import Button from "@/components/Button";
import BurgerButton from "@/components/BurgerButton";
import getPageHref from '@/utils/getPageHref'

const Header = (props) => {

    const {
        url,
    } = props

    const menuItems = [
        {
            link: 'Home',
            href: getPageHref(),
        },
        {
            link: 'About Me',
            href: getPageHref('about'),
        },
        {
            link: 'Portfolio',
            href: getPageHref('portfolio'),
        },
        {
            link: 'Services',
            href: getPageHref('services'),
        },
    ]

    const normalizePath = (path = '') => path
        .replace(/^\/Photographer(?=\/|$)/, '')
        .replace(/\.html$/, '')
        .replace(/\/$/, '') || '/'

    const currentPath = normalizePath(url)

    return (
        <header
            className="header"
            data-js-overlay-menu=''
        >
            <div className="header__inner ">
                <Logo className='header__logo'/>
                <dialog
                    className="header__overlay-menu"
                    data-js-overlay-menu-dialog=''
                >
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            {menuItems.map(({link, href}, index) => (
                                <li className='header__menu-item' key={index}>
                                    <a
                                        className={classNames('header__menu-link', {
                                            'is-active': currentPath === normalizePath(href)
                                        })}
                                        href={href}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="header__actions">
                        <Button
                            classname='header__button'
                            label='Contact Me'
                            href={getPageHref('contact')}
                        />
                    </div>
                </dialog>
                <BurgerButton
                    className='header__burger-button visible-tablet'
                    extraAttrs={{
                        'data-js-overlay-menu-burger-button': ''
                    }}
                />
            </div>
        </header>
    )
}

export default Header
