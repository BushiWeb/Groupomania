import PropTypes from 'prop-types';
import style from './UserHeader.module.css';
import TopAppBar from '../../../components/TopAppBar/TopAppBar';
import { useUserHeader } from './useUserHeader';
import UpdateUserDialog from '../UpdateUser/UpdateUserDialog';
import ProgressIndicator from '../../../components/ProgressIndicator/ProgressIndicator';
import UpdateUserRoleDialog from '../UpdateUserRole/UpdateUserRoleDialog';
import { isAdmin } from '../../../utils/roles';
import DeleteUserDialog from '../DeleteUser/DeleteUserDialog';

/**
 * User header.
 * Can be used as a top level header or as a section header.
 */
export default function UserHeader({
    email,
    userId,
    roleId,
    backArrow,
    topLevelHeader,
    mainContentId,
    small,
    className,
    busy,
    errorMessage,
    ...props
}) {
    const {
        actions,
        isUpdateUserOpen,
        setIsUpdateUserOpen,
        isUpdateUserRoleOpen,
        setIsUpdateUserRoleOpen,
        isDeleteUserOpen,
        setIsDeleteUserOpen,
    } = useUserHeader(userId, topLevelHeader);

    if (busy) {
        return (
            <>
                <TopAppBar
                    type={small ? 'small' : 'medium'}
                    {...topLevelHeader && mainContentId && { hiddenLinkTargetId: mainContentId }}
                    {...backArrow && { navigationArrowTarget: '/reseau', navigationArrowLabel: 'Retourner à la liste' }}
                    className={className}
                >
                    <div className={style.loader}>
                        <ProgressIndicator label="Chargement des données de l'utilisateur" circular/>
                    </div>
                </TopAppBar>
            </>
        );
    }

    if (errorMessage) {
        return (
            <>
                <TopAppBar
                    type={small ? 'small' : 'medium'}
                    {...topLevelHeader && mainContentId && { hiddenLinkTargetId: mainContentId }}
                    {...backArrow && { navigationArrowTarget: '/reseau', navigationArrowLabel: 'Retourner à la liste' }}
                    className={className}
                >
                    <p className={style.errorMessage}>{errorMessage}</p>
                </TopAppBar>
            </>
        );
    }

    return (
        <>
            <TopAppBar
                type={small ? 'small' : 'medium'}
                {...topLevelHeader && mainContentId && { hiddenLinkTargetId: mainContentId }}
                {...backArrow && {
                    navigationArrowTarget: '/reseau',
                    navigationArrowLabel: 'Retourner à la liste',
                    navigationArrowState: { userId },
                }}
                actions={actions}
                className={className}
            >
                <h1 className={style.heading}>{email}</h1>
                {isAdmin(roleId) && <p className={style.subHeading}>Administrateur</p>}
            </TopAppBar>

            {isUpdateUserOpen &&
            <UpdateUserDialog
                isOpen={isUpdateUserOpen}
                setIsOpen={setIsUpdateUserOpen}
                userId={userId}
                userEmail={email}
            />}

            {isUpdateUserRoleOpen &&
            <UpdateUserRoleDialog
                isOpen={isUpdateUserRoleOpen}
                setIsOpen={setIsUpdateUserRoleOpen}
                userId={userId}
                userEmail={email}
                userRoleId={roleId}
            />}

            {isDeleteUserOpen &&
            <DeleteUserDialog
                isOpen={isDeleteUserOpen}
                setIsOpen={setIsDeleteUserOpen}
                userId={userId}
                userEmail={email}
                userRoleId={roleId}
            />}
        </>
    );
}

UserHeader.defaultProps = {
    topLevelHeader: false,
    backArrow: false,
    small: false,
    className: '',
    busy: false,
};

UserHeader.propTypes = {
    /** UserEmail. Required */
    email: PropTypes.string,

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

    /** Id of the user's role */
    roleId: PropTypes.number,

    /** If true, the header will be thiner */
    small: PropTypes.bool,

    /** Additionnal class names */
    className: PropTypes.string,

    /** Weither the header should display a loading state, defaults to false */
    busy: PropTypes.bool,

    /** Error message to display */
    errorMessage: PropTypes.string,
};