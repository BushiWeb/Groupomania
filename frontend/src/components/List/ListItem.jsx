import PropTypes from 'prop-types';
import style from './ListItem.module.css';
import Icon from '../Icon/Icon.jsx';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from '../../utils/selectors';
import Link from '../Link/Link';
import { useId } from 'react';
import InteractiveElement from '../InteractiveElement/InteractiveElement';
import { useFocusable } from '../../hooks/useFocusable';

/**
 * Item of a list, used within the List component.
 */
export default function ListItem({
    headline, headlineLevel, supportingText, link, focused, onFocus,
}) {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    const Heading = `h${headlineLevel}`;
    const headingId = useId();

    const linkRef = useFocusable(focused);

    return <li className={style.listItem} onFocus={onFocus}>
        <InteractiveElement
            rootElement={Link}
            stateLayerColor="on-surface"
            rippleDuration={350}
            to={link}
            aria-labelledby={headingId}
            className={`${style.link}`}
            ref={linkRef}
        >
            <div>
                <Heading id={headingId} className={style.headline}>{headline}</Heading>
                {supportingText && <p className={style.supportingText}>{supportingText}</p>}
            </div>
            {link && <Icon className={style.icon} name="arrow_right" isOnDark={isDarkTheme}/>}
        </InteractiveElement>
    </li>;
}

ListItem.defaultProps = {
    headlineLevel: 2,
    supportingText: undefined,
    link: undefined,
    focused: false,
};

ListItem.propTypes = {
    /** Headline of the list item */
    headline: PropTypes.string.isRequired,

    /** Level of the headline, defaults to 2 */
    headlineLevel: PropTypes.number,

    /** Optionnal surpporting text */
    supportingText: PropTypes.string,

    /** Link target of the list item. If no target is specified, the list item will not link to anything. */
    link: PropTypes.string,

    /** Weither the element is focused or not */
    focused: PropTypes.bool,

    /** Function to execute on focus of the element */
    onFocus: PropTypes.func.isRequired,
};