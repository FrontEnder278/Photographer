import {Image} from "minista";

const Portfolio = (props) => {
    const {
        className,
    } = props

    const brandsFooterItems = [
        '/src/assets/images/portfolio/brands/1.svg',
        '/src/assets/images/portfolio/brands/2.svg',
        '/src/assets/images/portfolio/brands/3.svg',
        '/src/assets/images/portfolio/brands/4.svg',
        '/src/assets/images/portfolio/brands/5.svg',
    ]

    return (
       <section className='portfolio container'>
            <div className="portfolio__inner">
                <div className="portfolio__header">
                    <Image
                        className='portfolio__image visible-tablet'
                        src='/src/assets/images/portfolio/portfolio-mobile.jpg'
                    />
                    <div className="portfolio__info">
                        <span className="portfolio__subtitle h5">Portfolio</span>
                        <h1 className="portfolio__title h2">
                            Visual Poetry in Pixels
                        </h1>
                        <div className="portfolio__description">
                            <p>Step into a visual journey that encapsulates the essence of my lens. Each photograph in this portfolio is a narrative, a frozen moment in time, and a testament to the artistry and passion poured into every frame. Explore the diverse tapestry of stories I've had the privilege to capture and witness the world through my lens.</p>
                        </div>
                    </div>
                    <Image
                        className='portfolio__icon hidden-laptop'
                        src='/src/assets/images/about/about-icon.png'
                    />
                    <span className='portfolio__text hidden-laptop'>Scroll Down To See My Journey</span>
                </div>
                <div className="portfolio__footer">
                    <h3 className="portfolio__footer-title">BRANDS I HAVE WORKED WITH</h3>
                    <div className="portfolio__footer-brands" data-js-brands=''>
                        <div className="portfolio__footer-brands-track" data-js-brands-track=''>
                            <div className="portfolio__footer-brands-inner" data-js-brands-inner=''>
                                {brandsFooterItems.map((imgSrc, index) => (
                                    <Image className='portfolio__footer-brands-image' src={imgSrc} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
}

export default Portfolio
