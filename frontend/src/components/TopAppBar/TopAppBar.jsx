import style from './TopAppBar.module.css';
import HiddenNavigationLink from '../HiddenNavigationLink/HiddenNavigationLink.jsx';
import PropTypes from 'prop-types';
import NavigationArrowButton from './NavigationArrowButton';
import Actions from './Actions';

/**
 * Generic top app bar
 */
export default function TopAppBar({
    type,
    navigationArrowTarget,
    navigationArrowLabel,
    navigationArrowState,
    hiddenLinkTargetId,
    actions,
    className,
    children,
    ...props
}) {
    return <header
        className={`${style.topAppBar} ${className}`}
        data-type={type}
        {...navigationArrowTarget && navigationArrowLabel && { 'data-navigation': true }}
        {...actions && { 'data-actions': true }}
        {...props}
    >
        {hiddenLinkTargetId && <HiddenNavigationLink target={hiddenLinkTargetId}>
            Accéder directement au contenu
        </HiddenNavigationLink>}

        {
            navigationArrowTarget &&
            navigationArrowLabel &&
            <NavigationArrowButton
                to={navigationArrowTarget}
                label={navigationArrowLabel}
                state={navigationArrowState}
            />
        }

        <div className={style.content}>
            {children}
        </div>

        {actions && <Actions actions={actions}/>}
    </header>;
}

TopAppBar.defaultProps = {
    type: 'main',
    className: '',
};

TopAppBar.propTypes = {
    /* Type of top app bar, either 'main', 'small' or 'medium', defaults to main */
    type: PropTypes.oneOf(['main', 'small', 'medium']),

    /* Link of the navigation arrow, only displayed if a link is given */
    navigationArrowTarget: PropTypes.string,

    /* Label of the navigation arrow, required if the link is given */
    navigationArrowLabel: PropTypes.string,

    /* State given to the new history entry after using the arrow navigation button */
    navigationArrowState: PropTypes.any,

    /* Id of the target of the hidden link, if not specified, the hidden link is removed */
    hiddenLinkTargetId: PropTypes.string,

    /* Other actions to add, if there is more than 3 actions, the last ones will be in a menu */
    actions: PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        icon: PropTypes.string.isRequired,
    })),

    /* Additional classnames */
    className: PropTypes.string,
};