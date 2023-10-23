import PropTypes from 'prop-types';
import { useState } from 'react';
import StandardIconButton from '../icon-button/StandardIconButton/StandardIconButton.jsx';
import Menu from '../Menu/Menu.jsx';
import style from './TopAppBar.module.css';
import Icon from '../Icon/Icon.jsx';

/**
 * List of actions, depending on the number, some of them are within a menu
 */
export default function Actions({
    actions,
}) {
    const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
    const [menuAnchor, setMenuAnchor] = useState(null);

    let buttonActions = actions, menuItems;

    if (actions.length > 3) {
        buttonActions = actions.slice(0, 2).concat({
            label: 'Plus d\'actions',
            onClick: (e) => {
                setMenuAnchor(e.currentTarget);
                setIsActionMenuOpen(previous => !previous);
            },
            icon: 'more_vert',
        });

        menuItems = actions.slice(2).map(({ icon, ...rest }) => ({ leadingIcon: <Icon name={icon}/>, ...rest }));
    }

    return <div className={style.actions}>
        {buttonActions.map(({ label, icon, onClick }) => <StandardIconButton
            label={label}
            name={icon}
            onClick={onClick}
            key={label}
        />)}

        {menuItems && <Menu
            label="Actions supplémentaires"
            open={isActionMenuOpen}
            onClose={() => setIsActionMenuOpen(false)}
            menuItems={menuItems}
            anchor={menuAnchor}
        />
        }
    </div>;
}

Actions.propTypes = {
    /* Weither to add the logout and theme switch actions, defaults to false */
    mainActions: PropTypes.bool,

    /* Actions to add */
    actions: PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        icon: PropTypes.string.isRequired,
    })),
};