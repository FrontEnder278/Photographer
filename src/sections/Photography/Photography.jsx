import './Photography.scss'
import classNames from 'classnames'
import {Image} from "minista";

const Photography = (props) => {
    const {
        className,
    } = props

    return (
        <section className='photography container'>
            <div className="photography__inner">
                <div className="photography__header">
                    <Image
                        className='photography__image visible-tablet'
                        src='/src/assets/images/services/bg-services-mobile.jpg'
                    />
                    <div className="photography__info">
                        <span className="photography__subtitle h5">services</span>
                        <h1 className="photography__title h2">
                            Diverse Photography Offerings
                        </h1>
                        <div className="photography__description">
                            <p>Unlock the full spectrum of professional photography services tailored to your vision. From timeless portraits to captivating event coverage, I bring a unique blend of creativity and technical expertise to each project.</p>
                        </div>
                    </div>
                    <Image
                        className='photography__icon hidden-laptop'
                        src='/src/assets/images/about/about-icon.png'
                    />
                    <span className='photography__text hidden-laptop'>Scroll Down To See My Journey</span>
                </div>
            </div>
        </section>
    )
}

export default Photography