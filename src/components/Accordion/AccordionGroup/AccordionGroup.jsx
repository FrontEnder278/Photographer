import './AccordionGroup.scss'
import classNames from 'classnames'

const AccordionGroup = (props) => {
    const {
        className,
        children,
        columns = 1,
        isOrderedList = true,
    } = props

    const ListTag = isOrderedList ? 'ol' : 'ul'
    const itemsPerColumn = Math.ceil(children.length / columns)

    return (
        <ListTag
            className={classNames('accordion-group', {
                [`accordion-group--${columns}-columns`]: columns > 1,

            })}
        >
            {children.map((item, index) => (
                <li className={classNames('accordion-group__item', {
                    'accordion-group__item--last-column-item': columns > 1 && (index + 1) % itemsPerColumn === 0
                })} key={index}>
                    {item}
                </li>
            ))}
        </ListTag>
    )
}

export default AccordionGroup