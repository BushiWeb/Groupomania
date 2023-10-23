import PropTypes from 'prop-types';
import style from './UserHeader.module.css';
import TopAppBar from '../../components/TopAppBar/TopAppBar';
import { useUserHeader } from './useUserHeader';

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
    const actions = useUserHeader(userId, topLevelHeader);

    return <TopAppBar
        type={small ? 'small' : 'medium'}
        {...topLevelHeader && mainContentId && { hiddenLinkTargetId: mainContentId }}
        {...backArrow && { navigationArrowTarget: '/reseau', navigationArrowLabel: 'Retourner à la liste' }}
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