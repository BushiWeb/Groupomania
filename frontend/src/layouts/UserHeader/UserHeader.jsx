import PropTypes from 'prop-types';
import style from './UserHeader.module.css';
import StandardIconButton from '../../components/icon-button/StandardIconButton/StandardIconButton.jsx';
import { useScrollThreshold } from '../../hooks/useScrollThreshold';
import { useNavigate } from 'react-router-dom';

/**
 * Hidden navigation link, useful for accessibility. It can be used for a "skip to main content" link for example.
 */
export default function UserHeader({
    heading, subheading, deleteUser, updateProfile, updateRole,
}) {
    const scrolled = useScrollThreshold(10);
    const navigate = useNavigate();

    return <header className={scrolled ? style.scrolledHeader : style.header}>
        <div className={style.navigation}>
            <StandardIconButton icon="arrow_back" action={() => {
                navigate(-1);
            }} label="Page précédente"/>
        </div>
        <div className={style.headingGroup}>
            <h1 className={style.heading}>{heading}</h1>
            {subheading && <p className={style.subHeading}>{subheading}</p>}
        </div>

        {updateProfile && <StandardIconButton icon="edit" action={() => {}} label="Mettre à jour le profil"/>}
        {deleteUser && <StandardIconButton icon="delete_forever" action={() => {}} label="Supprimer le compte"/>}
        {updateRole && <StandardIconButton icon="admin_panel_settings" action={() => {}} label="Modifier le rôle de l'utilisateur"/>}
    </header>;
}

UserHeader.defaultProps = {
    subheading: undefined,
    navigateBackButton: false,
    deleteUser: false,
    updateProfile: false,
    updateRole: false,
};

UserHeader.propTypes = {
    /** Heading of the top app bar. Required */
    heading: PropTypes.string.isRequired,

    /** Subheading, only displayed if a heading is given */
    subheading: PropTypes.string,

    /** Weither to display the delete user button or not */
    deleteUser: PropTypes.bool,

    /** Weither to display the update user's profile button or not */
    updateProfile: PropTypes.bool,

    /** Weither to display the update user's role button or not */
    updateRole: PropTypes.bool,
};