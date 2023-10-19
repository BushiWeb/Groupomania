import PropTypes from 'prop-types';
import style from './UserHeader.module.css';
import StandardIconButton from '../../components/icon-button/StandardIconButton/StandardIconButton.jsx';
import { useNavigate } from 'react-router-dom';
import HiddenNavigationLink from '../../components/HiddenNavigationLink/HiddenNavigationLink';
import { useSelector, useStore } from 'react-redux';
import { selectRighInfos, selectTheme } from '../../utils/selectors';
import { useMutation } from '@tanstack/react-query';
import { simpleFetch } from '../../utils/fetch';
import { logout } from '../../features/authentication/user.slice';
import { THEMES_NAMES, themeToggle } from '../../features/theme/theme.slice';
import Menu from '../../components/Menu/Menu';
import { useEffect, useState } from 'react';
import Icon from '../../components/Icon/Icon';

/**
 * User header.
 * Can be used as a top level header or as a section header.
 */
export default function UserHeader({
    email,
    admin,
    userId,
    backArrow,
    topLevelHeader,
    mainContentId,
    small,
}) {
    const navigate = useNavigate();

    const theme = useSelector(selectTheme);

    // Action buttons to display
    const { isAdmin, userId: currentUserId } = useSelector(selectRighInfos);
    const deleteButton = isAdmin || currentUserId === userId,
        editButton = currentUserId === userId,
        editRoleButton = isAdmin;
    const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
    const [menuAnchor, setMenuAnchor] = useState(null);
    const menuItems = [
        ...editButton ?
            [
                {
                    label: 'Modifier le profil',
                    onClick: () => console.log('Modification du profil'),
                    leadingIcon: topLevelHeader ? <Icon name="edit"/> : 'edit',
                },
            ] :
            [],
        ...deleteButton ?
            [
                {
                    label: 'Supprimer le profil',
                    onClick: () => console.log('Suppression du profil'),
                    leadingIcon: topLevelHeader ? <Icon name="delete_forever"/> : 'delete_forever',
                },
            ] :
            [],
        ...editRoleButton ?
            [
                {
                    label: 'Modifier le role de l\'utilisateur',
                    onClick: () => console.log('Modification du role'),
                    leadingIcon: topLevelHeader ? <Icon name="admin_panel_settings"/> : 'admin_panel_settings',
                },
            ] :
            [],
    ];

    const { dispatch } = useStore();
    const { mutate } = useMutation({
        mutationFn: async () => {
            return simpleFetch({
                url: '/data/logout',
                method: 'POST',
            });
        },
        onSettled: () => {
            dispatch(logout());
        },
    });

    function handleLogoutClick(e) {
        mutate();
    }

    useEffect(() => {
        document.body.classList.forEach((value) => {
            if (THEMES_NAMES[value]) {
                document.body.classList.remove(value);
            }
        });
        document.body.classList.add(theme);
    }, [theme]);

    return <header className={small ? style.smallHeader : style.header}>
        {topLevelHeader && <HiddenNavigationLink target={mainContentId}>
            Accéder directement au contenu
        </HiddenNavigationLink>}

        {backArrow && <div className={style.navigation}>
            <StandardIconButton name="arrow_back" onClick={() => {
                navigate('/reseau');
            }} label="Retourner à la liste"/>
        </div>}

        <div className={style.headingGroup}>
            <h1 className={style.heading}>{email}</h1>
            {admin && <p className={style.subHeading}>admin</p>}
        </div>

        {topLevelHeader && <>
            <StandardIconButton name={theme === THEMES_NAMES.dark ? 'light_mode' : 'dark_mode'} onClick={() => {
                dispatch(themeToggle());
            }} label={theme === THEMES_NAMES.dark ? 'Passer au mode clair' : 'Passer au mode sombre'} />

            <StandardIconButton name="logout" onClick={handleLogoutClick} label="Se déconnecter" />
        </>}

        {topLevelHeader && menuItems.length > 0 ?
            <>
                <StandardIconButton
                    label={'Plus d\'actions'}
                    name="more_vert"
                    onClick={(e) => {
                        setMenuAnchor(e.currentTarget);
                        setIsActionMenuOpen(previous => !previous);
                    }}
                />
                <Menu
                    label={`Actions pour l'utilisateur ${email}`}
                    open={isActionMenuOpen}
                    onClose={() => setIsActionMenuOpen(false)}
                    menuItems={menuItems}
                    anchor={menuAnchor}
                />
            </> :
            <>
                {menuItems.map(({ label, leadingIcon, onClick }) => <StandardIconButton
                    label={label}
                    name={leadingIcon}
                    onClick={onClick}
                    key={label}
                />)}
            </>
        }
    </header>;
}

UserHeader.defaultProps = {
    admin: false,
    topLevelHeader: false,
    backArrow: false,
    small: false,
};

UserHeader.propTypes = {
    /** UserEmail. Required */
    email: PropTypes.string.isRequired,

    /** Weither the user is admin or not, defaults to false */
    admin: PropTypes.bool,

    /**
     * If the header is a top level header,
     *  adds a hidden link to the content,
     *  the logout button and
     *  the theme button
     */
    topLevelHeader: PropTypes.bool,

    /** Id of the main content, required if the header is top level */
    mainContentId: PropTypes.string,

    /** Weither to display the back navigation arrow */
    backArrow: PropTypes.bool,

    /** Displayed user id, required */
    userId: PropTypes.number.isRequired,

    /** If true, the header will be thiner */
    small: PropTypes.bool,
};