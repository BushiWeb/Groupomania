import PropTypes from 'prop-types';
import style from './UserHeader.module.css';
import { useSelector, useStore } from 'react-redux';
import { selectRighInfos, selectTheme } from '../../utils/selectors';
import { useMutation } from '@tanstack/react-query';
import { simpleFetch } from '../../utils/fetch';
import { logout } from '../../features/authentication/user.slice';
import { THEMES_NAMES, themeToggle } from '../../features/theme/theme.slice';
import TopAppBar from '../../components/TopAppBar/TopAppBar';

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
    ...props
}) {
    const theme = useSelector(selectTheme);

    // Action buttons to display
    const { isAdmin, userId: currentUserId } = useSelector(selectRighInfos);
    const deleteButton = isAdmin || currentUserId === userId,
        editButton = currentUserId === userId,
        editRoleButton = isAdmin;
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


    const actions = [
        ...topLevelHeader ?
            [
                {
                    label: theme === THEMES_NAMES.dark ? 'Passer au mode clair' : 'Passer au mode sombre',
                    onClick: () => dispatch(themeToggle()),
                    icon: theme === THEMES_NAMES.dark ? 'light_mode' : 'dark_mode',
                },
                {
                    label: 'Se déconnecter',
                    onClick: handleLogoutClick,
                    icon: 'logout',
                },
            ] :
            [],
        ...editButton ?
            [
                {
                    label: 'Modifier le profil',
                    onClick: () => console.log('Modification du profil'),
                    icon: 'edit',
                },
            ] :
            [],
        ...deleteButton ?
            [
                {
                    label: 'Supprimer le profil',
                    onClick: () => console.log('Suppression du profil'),
                    icon: 'delete_forever',
                },
            ] :
            [],
        ...editRoleButton ?
            [
                {
                    label: 'Modifier le role de l\'utilisateur',
                    onClick: () => console.log('Modification du role'),
                    icon: 'admin_panel_settings',
                },
            ] :
            [],
    ];

    return <TopAppBar
        type={small ? 'small' : 'medium'}
        {...topLevelHeader && mainContentId && { hiddenLinkTargetId: mainContentId }}
        {...backArrow && { navigationArrowTarget: '/reseau' }}
        actions={actions}
        className={props.className || ''}
    >
        <h1 className={style.heading}>{email}</h1>
        {admin && <p className={style.subHeading}>admin</p>}
    </TopAppBar>;
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