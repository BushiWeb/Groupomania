import PropTypes from 'prop-types';
import style from './UserHeader.module.css';
import TopAppBar from '../../../components/TopAppBar/TopAppBar';
import { useUserHeader } from './useUserHeader';
import UpdateUserDialog from '../UpdateUser/UpdateUserDialog';
import ProgressIndicator from '../../../components/ProgressIndicator/ProgressIndicator';

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
    className,
    busy,
    errorMessage,
    ...props
}) {
    const {
        actions,
        isUpdateUserOpen,
        setIsUpdateUserOpen,
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
                    <p className={errorMessage}>{errorMessage}</p>
                </TopAppBar>
            </>
        );
    }

    return (
        <>
            <TopAppBar
                type={small ? 'small' : 'medium'}
                {...topLevelHeader && mainContentId && { hiddenLinkTargetId: mainContentId }}
                {...backArrow && { navigationArrowTarget: '/reseau', navigationArrowLabel: 'Retourner à la liste' }}
                actions={actions}
                className={className}
            >
                <h1 className={style.heading}>{email}</h1>
                {admin && <p className={style.subHeading}>admin</p>}
            </TopAppBar>
            {isUpdateUserOpen &&
            <UpdateUserDialog
                isOpen={isUpdateUserOpen}
                setIsOpen={setIsUpdateUserOpen}
                userId={userId}
                userEmail={email}
            />}
        </>
    );
}

UserHeader.defaultProps = {
    admin: false,
    topLevelHeader: false,
    backArrow: false,
    small: false,
    className: '',
    busy: false,
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

    /** Additionnal class names */
    className: PropTypes.string,

    /** Weither the header should display a loading state, defaults to false */
    busy: PropTypes.bool,

    /** Error message to display */
    errorMessage: PropTypes.string,
};