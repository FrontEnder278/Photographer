import './ContactForm.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";
import Form from "@/sections/ContactForm/Form";

const ContactForm = (props) => {
    const {
        className,
    } = props

    return (
        <section
            className='contact-form container'
        >
            <h2 className="contact-form__title visually-hidden">Contact Form</h2>
            <div className="contact-form__header">
                <div className="contact-form__info">
                    <h3 className="contact-form__info-title">Contact Information</h3>
                    <div className="contact-form__info-description">
                        <p>Feel free to reach out to us through various channels. We are available by phone, email, and social media for your convenience.</p>
                    </div>
                </div>
                <div className="contact-form__links">
                    <a href="tel:+1234567890" className="contact-form__tel">
                        <p className='contact-form__tel-placeholder'>+1-123-456-7890</p>
                        <Icon name="arrow-right-top" hasFill/>
                    </a>
                    <a href="mailto:info@damienbraunphotography.com" className='contact-form__email'>
                        <p className='contact-form__email-placeholder'>info@damienbraunphotography.com</p>
                        <Icon name="arrow-right-top" hasFill/>
                    </a>
                </div>
            </div>
            <div className="contact-form__body">
                <div className="contact-form__message">
                    <h3 className="contact-form__info-title">Send Me a Message</h3>
                    <div className="contact-form__info-description">
                        <p>Have a specific inquiry or message for us? Please use the contact form below, and we'll get back to you promptly.</p>
                    </div>
                </div>
                <Form className='contact-form__form'/>
            </div>
        </section>
    )
}

export default ContactForm