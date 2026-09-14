import './Hero.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import Stripe from "@/components/Stripe";

const Hero = (props) => {

    const {
        className,
    } = props

    return (
        <section
            className={classNames(className, 'hero')}
        >
            <div className="hero__inner ">
                <div className="hero__header container">
                    <div className="hero__header-text">
                        <span className="hero__header-subtitle">Stunning Photography by</span>
                        <h1 className="hero__header-title">Damien Braun</h1>
                    </div>
                    <img className="hero__header-image hidden-tablet"
                         src={`${import.meta.env.BASE_URL}hero.svg`}
                         alt=""
                         width={346}
                         height={346}/>
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
                        <span className='hero__header-span h2'>Work Together</span>
                    </a>
                </div>
                <Stripe/>
                <div className="hero__footer container"></div>
            </div>
        </section>
    )
}

export default Hero