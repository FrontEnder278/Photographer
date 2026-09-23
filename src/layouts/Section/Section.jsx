import './Section.scss'
import classNames from 'classnames'

const Section = (props) => {

    const {
        className,
        title,
        titleId,
        subtitle,
        actions,
        children,
        isHiddenActionsOnMobile = false,
        mode = '',
        column,
        mod = '',
    } = props

    return (
        <section
            className={classNames(className, 'section container', {
                [`section--${mode}`]: mode,
            })}
            aria-labelledby={titleId}
        >
                <div className={classNames('section__header', {
                    [`section__header--${column}`]: column,
                })}>
                    <div className="section__header-info">
                    {subtitle && (
                        <span className="section__subtitle h5">
                            {subtitle}
                        </span>
                    )}
                    <h2 className="section__title" id={titleId}>
                        {title}
                    </h2>
                    </div>
                    {actions && (
                        <div className={classNames('section__actions', {
                            'hidden': isHiddenActionsOnMobile,
                            [`section__actions--${mod}`]: mod,
                        })}>
                            {actions}
                        </div>
                    )}
                </div>
                <div className="section__body">
                    {children}
                </div>
        </section>
    )
}

export default Section