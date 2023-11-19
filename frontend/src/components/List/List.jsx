import PropTypes from 'prop-types';
import style from './List.module.css';
import ListItem from './ListItem';
import { useArrowNavigation } from '../../hooks/useArrowNavigation';

/**
 * List.
 */
export default function List({
    headlineLevel,
    data,
    label,
    className,
    ...props
}) {
    const { handleBlur, handleFocus, handleKeyDown, focusId } =
        useArrowNavigation(data.length, {
            usePageKeys: true,
            useHomeEnd: true,
        });

    return (
        <ul
            className={`${style.list} ${className}`}
            aria-label={label}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            {...props}
        >
            {data.map((listItemData, index) => (
                <ListItem
                    headlineLevel={headlineLevel}
                    {...listItemData}
                    linkLabel={listItemData.headline}
                    key={`${listItemData.headline}-${index}`}
                    focused={focusId === index}
                    onFocus={handleFocus(index)}
                />
            ))}
        </ul>
    );
}

List.defaultProps = {
    headlineLevel: 2,
    className: '',
};

List.propTypes = {
    /** Level of the headings of the list items */
    headlineLevel: PropTypes.number,

    /** Data to display */
    data: PropTypes.arrayOf(
        PropTypes.exact({
            headline: PropTypes.string.isRequired,
            supportingText: PropTypes.string,
            link: PropTypes.string,
            selected: PropTypes.bool,
        }),
    ).isRequired,

    /** Label of the list */
    label: PropTypes.string.isRequired,

    /** Additionnal class names */
    className: PropTypes.string,
};
