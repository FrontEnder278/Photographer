import './Stripe.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";

const Stripe = (props) => {
    const {
        className,
    } = props

    const stripeItems = [
        {
            title: 'Event Photography',
            icon: 'icon-stripe',
        },
        {
            title: 'Comercial Photography',
            icon: 'icon-stripe',
        },
        {
            title: 'Product Photography',
            icon: 'icon-stripe',
        },
        {
            title: 'Wedding Photography',
            icon: 'icon-stripe',
        },
        {
            title: 'Landscape Photography',
            icon: 'icon-stripe',
        },
        {
            title: 'Branding Photography',
            icon: 'icon-stripe',
        },
        {
            title: 'Portrait  Photography',
            icon: 'icon-stripe',
        },
    ]

    return (
        <div
            className={classNames(className, 'stripe')}
        >
            {stripeItems.map(({title, icon}, index) => (
                <div className="stripe__body" key={index}>
                    <Icon
                        className='stripe__icon'
                        name={icon}
                        hasFill
                    />
                    <p className="stripe__name">{title}</p>
                </div>
            ))}
        </div>
    )
}

export default Stripe