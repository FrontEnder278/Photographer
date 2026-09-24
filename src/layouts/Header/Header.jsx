import './Header.scss'
import Logo from "@/components/Logo";
import classNames from "classnames";
import Button from "@/components/Button";
import BurgerButton from "@/components/BurgerButton";

const Header = (props) => {

    const {
        url
    } = props

    const menuItems = [
        {
            link: 'Home',
            href: '/Photographer/',
        },
        {
            link: 'About Me',
            href: '/Photographer/about.html',
        },
        {
            link: 'Portfolio',
            href: '/Photographer/portfolio.html',
        },
        {
            link: 'Services',
            href: '/Photographer/services.html',
        },
    ]

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
                                            'is-active': href === url
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
                            href='/contact'
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