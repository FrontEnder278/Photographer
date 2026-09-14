import './Footer.scss'
import Button from "@/components/Button";
import Socials from "@/components/Socials";

const Footer = () => {

    const menuItems = [
        {
            title: "Home",
            links: ['About Me', 'My Works', 'Testimonials']
        },
        {
            title: "Clients",
            links: ['Klovesto', 'Nukeway', 'Cloven’s', 'MenVol']
        },
        {
            title: "Portfolio",
            links: ['Events', 'Portrait', 'Branding', 'Commerciale', 'Wedding']
        },
        {
            title: "Services",
            links: ['Portraits', 'Events', 'Commercial']
        },
    ]

    const extraLinks = ['Terms & Conditions', 'Privacy Policy']

    return (
        <footer className="footer ">
            <div className="footer__inner container">
                <div className="footer__content">
                <div className="footer__body">
                    <div className="footer__collab">
                        <span className='footer__subtitle'>A more meaningful home for photography</span>
                        <h2 className="footer__title">
                        <a className="hero__header-link" href="/">
                            <span className='hero__header-span h2'>Let's</span>
                            <Button
                                className='hero__header-button'
                                label='Arrow'
                                isLabelHidden
                                iconName='arrow-top-right-button'
                                mode='arrow'
                                hasFillIcon
                            />
                            <span className='hero__header-span--2 h2'>Work Together</span>
                        </a>
                        </h2>
                    </div>
                    <nav className="footer__menu">
                            {menuItems.map(({title, links}, index) => (
                                <div className="footer__menu-column" key={index}>
                                <a className='footer__menu-title' href='/'>
                                    {title}
                                </a>
                                <ul className="footer__menu-list">
                                    {links?.map((link , index) => (
                                        <li className='footer__menu-item' key={index}>
                                            <a className="footer__menu-link"
                                               href="/"
                                            >
                                              {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                </div>
                            ))}
                    </nav>
                </div>
                <div className="footer__extra">
                    <div className="footer__extra-info">
                        {extraLinks.map((link, index) => (
                            <a className='footer__extra-link'
                               href='/'
                               key={index}
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                        <Socials className="footer__extra-soc1als"/>
                    <p className='footer__extra-copiright'>
                        © <time dateTime='2024'>2024</time> Damien Braun Photography. All rights reserved.
                    </p>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer