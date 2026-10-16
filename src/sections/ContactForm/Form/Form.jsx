import './Form.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";

const Form = (props) => {
    const {
        className,
    } = props

    return (
        <form
            className={classNames(className, 'form')}
            data-js-form=''
        >
            <div className="form__name">
                <div className="form__name-first">
                    <label
                        htmlFor="first__name"
                        className="form__name-label"
                    >
                        First Name
                    </label>
                    <input
                        className='form__name-input'
                        type="text"
                        name='FirstName'
                        id='first__name'
                        placeholder="FIRST NAME"
                        aria-describedby="name__error"
                        required
                        minLength={3}
                        maxLength={16}
                        data-js-form-name=''
                    />
                    <span className="form-name__error" id='name__error' data-js-form-name-error></span>
                </div>
                <div className="form__name-last">
                    <label
                        htmlFor="last__name"
                        className="form__name-label"
                    >
                        Last Name
                    </label>
                    <input
                        className='form__name-input'
                        type="text"
                        name='LastName'
                        id='last__name'
                        placeholder="LAST NAME"
                    />
                </div>
            </div>
            <div className="form__contact-info">
                <div className="form__email">
                    <label
                        htmlFor="email"
                        className="form__email-label"
                    >
                        Email
                    </label>
                    <input
                        className='form__email-input'
                        type="email"
                        name='email'
                        id='email'
                        placeholder="EMAIL"
                        aria-describedby="email__error"
                        required
                        data-js-form-email=''
                    />
                    <span className="form-email__error" id='email__error' data-js-form-email-error/>
                </div>
                <div className="form__phone">
                    <label
                        htmlFor="phone"
                        className="form__phone-label"
                    >
                        Phone Number
                    </label>
                    <input
                        className='form__phone-input'
                        type="text"
                        inputMode="tel"
                        autoComplete="tel"
                        name='phone'
                        id='phone'
                        placeholder="(+7) 000-000-00-00"
                        required
                        aria-describedby="phone__error"
                        data-js-form-phone='(+7) 000-000-00-00'
                    />
                    <span className="form-phone__error" id='phone__error' data-js-form-phone-error/>
                </div>
            </div>
            <div className="form__message">
                <label
                    htmlFor="message"
                    className='form__message-label'
                >
                    Your Message
                </label>
                <textarea
                    className='form__message-input'
                    name="message"
                    id="message"
                    placeholder='MESSAGE'
                    aria-describedby="message__error"
                    data-js-form-message=''
                    required>
                </textarea>
                <span className="form-message__error" id='message__error' data-js-form-message-error/>
            </div>
            <button
                className="form__button"
                type="submit"
                data-js-form-button=''
                >
                <span className="form__button-label h2">Send Message</span>
                    <span className="form__button-icon">
                        <Icon
                            name="arrow-right-top"
                            modeIcon="arrow-right-top-purple"
                            hasFill
                        />
                    </span>
            </button>


        </form>
    )
}

export default Form
