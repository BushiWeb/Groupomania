import PropTypes from 'prop-types';
import style from './List.module.css';
import ListItem from './ListItem';
import { useArrowNavigation } from '../../hooks/useArrowNavigation';

/**
 * List.
 */
export default function List({ headlineLevel, data, label }) {
    const {
        handleBlur,
        handleFocus,
        handleKeyDown,
        focusId,
    } = useArrowNavigation(data.length);

    return <ul
        className={style.list}
        aria-label={label}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
    >
        {data.map((listItemData, index) =>
            <ListItem
                headlineLevel={headlineLevel}
                {...listItemData}
                linkLabel={listItemData.headline}
                key={`${listItemData.headline}-${index}`}
                focused={focusId === index}
                onFocus={handleFocus(index)}
            />)}
    </ul>;
}

List.defaultProps = {
    headlineLevel: 2,
};

List.propTypes = {
    /** Level of the headings of the list items */
    headlineLevel: PropTypes.number,

    /** Data to display */
    data: PropTypes.arrayOf(PropTypes.exact({
        headline: PropTypes.string.isRequired,
        supportingText: PropTypes.string,
        link: PropTypes.string,
    })).isRequired,

    /** Label of the list */
    label: PropTypes.string.isRequired,
};