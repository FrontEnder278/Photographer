import './Button.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";

const Button = (props) => {
    const {
        className,
        href,
        target,
        type = 'button',
        label,
        isLabelHidden,
        iconName,
        hasFillIcon,
        iconPosition = 'before',
        mode='',
        extraAttrs,
    } = props

    const linkComponent = href !== undefined
    const Component = linkComponent ? 'a' : 'button'
    const linkAttrs = {target, href}
    const buttonAttrs = {type}
    const specificAttrs = linkComponent ? linkAttrs : buttonAttrs
    const title = isLabelHidden ? label : undefined
    const IconComponent = iconName && (
        <Icon
          className='button-icon'
          name={iconName}
          hasFill={hasFillIcon}
        />
    )

    return (
        <Component
            className={classNames(className, 'button', {
                [`button--${mode}`]: mode,
            })}
            {...specificAttrs}
            aria-label={title}
            title={title}
            {...extraAttrs}
        >
            {iconPosition === 'before' && IconComponent}
            {!isLabelHidden && (
                <span className='button__label'>{label}</span>
            )}
            {iconPosition === 'after' && IconComponent}
        </Component>
    )
}

export default Button