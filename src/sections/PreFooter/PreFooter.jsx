import './PreFooter.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section";
import Stripe from "@/components/Stripe";
import {Image} from "minista";

const PreFooter = (props) => {
    const {
        className,
    } = props

    return (
        <section className='pre-footer'>
            <div className="pre-footer__inner container">
                <h2 className="pre-footer__title visually-hidden">Pre-footer</h2>
                <Image className="pre-footer__image"
                src="/src/assets/images/pre-footer/image.png"
                />
            </div>
            <Stripe/>
        </section>
    )
}

export default PreFooter