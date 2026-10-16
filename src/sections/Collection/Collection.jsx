import './Collection.scss'
import classNames from 'classnames'
import ServiceCollection from "@/components/ServiceCollection";


const Collection = (props) => {
    const {
        className,
    } = props

    const titleId = 'collection-title'

    const collectionItems = [
        {
            title: 'Portrait Photography',
            description: 'Our portrait photography service is all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self. We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your story.',
            id: 'portraits',
            imgSrc: [
                {
                    desktop: '/src/assets/images/collection/1.png',
                    tablet: '/src/assets/images/collection/1-mobile.png',
                },
                {
                    desktop: '/src/assets/images/collection/1.png',
                    tablet: '/src/assets/images/collection/1-mobile.png',
                },
                {
                    desktop: '/src/assets/images/collection/1.png',
                    tablet: '/src/assets/images/collection/1-mobile.png',
                },
            ],
            cards: [
                {
                    titleItem: 'Individual Session',
                    price: '$250',
                    items: [
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Ideal for capturing your unique personality and style.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Includes a 2-hour photoshoot and 20 professionally edited images.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Additional images can be purchased at $10 each.',
                        },
                    ]
                },
                {
                    titleItem: 'Family Session',
                    price: '$400',
                    items: [
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Ideal for capturing your unique personality and style.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Includes a 2-hour photoshoot and 20 professionally edited images.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Additional images can be purchased at $10 each.',
                        }
                    ]
                },
                {
                    titleItem: 'Couple Session',
                    price: '$300',
                    items: [
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Ideal for capturing your unique personality and style.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Includes a 2-hour photoshoot and 20 professionally edited images.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Additional images can be purchased at $10 each.',
                        }
                    ]
                },
            ]
        },
        {
            title: 'Events Photography',
            description: 'Our event photography service is dedicated to capturing the magic of your special occasions. Whether it\'s a wedding, corporate event, or milestone celebration, we\'re there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.',
            id: 'events',
            imgSrc: [
                {
                    desktop: '/src/assets/images/collection/2.png',
                    tablet: '/src/assets/images/collection/2-mobile.png',
                },
                {
                    desktop: '/src/assets/images/collection/2.png',
                    tablet: '/src/assets/images/collection/2-mobile.png',
                },
                {
                    desktop: '/src/assets/images/collection/2.png',
                    tablet: '/src/assets/images/collection/2-mobile.png',
                },
            ],
            cards: [
                {
                    titleItem: 'Wedding Photography',
                    price: '$1,500',
                    items: [
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Ideal for capturing your unique personality and style.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Includes a 2-hour photoshoot and 20 professionally edited images.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Additional images can be purchased at $10 each.',
                        }
                    ]
                },
                {
                    titleItem: 'Party Coverage',
                    price: '$800',
                    items: [
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Ideal for capturing your unique personality and style.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Includes a 2-hour photoshoot and 20 professionally edited images.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Additional images can be purchased at $10 each.',
                        }
                    ]
                },
                {
                    titleItem: 'Corporate Events',
                    price: 'Custom Pricing',
                    items: [
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Ideal for capturing your unique personality and style.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Includes a 2-hour photoshoot and 20 professionally edited images.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Additional images can be purchased at $10 each.',
                        }
                    ]
                },
            ]
        },
        {
            title: 'Commercial Photography',
            description: 'In the world of business, a compelling image can make all the difference. Our commercial photography service is designed to enhance your brand\'s visual identity. We create striking images for your products, services, and marketing campaigns that leave a lasting impact on your audience.',
            id: 'commercial',
            imgSrc: [
                {
                    desktop: '/src/assets/images/collection/3.png',
                    tablet: '/src/assets/images/collection/3-mobile.png',
                },
                {
                    desktop: '/src/assets/images/collection/3.png',
                    tablet: '/src/assets/images/collection/3-mobile.png',
                },
                {
                    desktop: '/src/assets/images/collection/3.png',
                    tablet: '/src/assets/images/collection/3-mobile.png',
                },
            ],
            cards: [
                {
                    titleItem: 'Product Photography',
                    price: '$500',
                    items: [
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Ideal for capturing your unique personality and style.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Includes a 2-hour photoshoot and 20 professionally edited images.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Additional images can be purchased at $10 each.',
                        }
                    ]
                },
                {
                    titleItem: 'Real Estate Photography',
                    price: '$700',
                    items: [
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Ideal for capturing your unique personality and style.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Includes a 2-hour photoshoot and 20 professionally edited images.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Additional images can be purchased at $10 each.',
                        }
                    ]
                },
                {
                    titleItem: 'Brand Photography',
                    price: 'Custom Pricing',
                    items: [
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Ideal for capturing your unique personality and style.',
                        },
                        {
                            icon: 'icon-stripe-gray',
                            text: 'Includes a 2-hour photoshoot and 20 professionally edited images.',
                        },
                    ]
                },
            ]
        },
    ]

    return (
        <section className={classNames(className, 'collection container')}>
            <h2 className="visually-hidden" id={titleId}>Collection</h2>
            {collectionItems.map((item, index) => (
                <ServiceCollection
                    {...item}
                    key={index}
                />
            ))}
        </section>
    )
}

export default Collection
