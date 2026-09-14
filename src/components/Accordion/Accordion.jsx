import './Accordion.scss'
import classNames from 'classnames'

const Accordion = (props) => {
    const {
        className,
        id, // связать заголовок аккордиона с его содержимым
        name, // для того чтобы при открытии одного аккордиона остальные закрывались
        title,
        children,
        isOpen,
    } = props

    return (
        <div
            className='accordion'
        >
            <details className="accordion__details"
                name={name}
                open={isOpen}
            >
                <summary className="accordion__summary">
                    <h3 className="accordion__title h5">
                        <span
                            role='term'
                            aria-details={id}
                        >
                            {title}
                        </span>
                    </h3>
                </summary>
            </details>
        <div
            className="accordion__content"
            id={id}
            role='definition'
        >
            <div className="accordion__content-inner">
               {children}
            </div>
        </div>
        </div>
    )
}

export default Accordion