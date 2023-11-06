import UsersList from '../UsersList/UsersList';
import PropTypes from 'prop-types';
import { useInfiniteUserList } from './useInfiniteUserList';
import { forwardRef } from 'react';

/**
 * Allows the insertion of an infinite scrolling post list.
 * As the user scrolls, more posts are loaded.
 * When a user clicks on a like button, optimistic UI is used to make the app more responsive.
 * Use an ErrorBoundary to handle errors.
 */
const InfiniteUserList = forwardRef((
    {
        containerElt,
        errorClassName,
        className,
        selectedUserId,
    },
    ref
) => {
    const {
        data,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useInfiniteUserList(containerElt);

    if (isError) {
        return <p className={errorClassName}>
            Une erreur est survenue lors du chargement des données. Vous pouvez essayer de recharger la page.
            Si le problème persiste, n'hésitez pas à vous rapprocher d'un administrateur.
        </p>;
    }

    return <UsersList
        users={data}
        className={className}
        busy={isFetchingNextPage || isLoading}
        ref={ref}
        selectedUserId={selectedUserId}
    />;
});

InfiniteUserList.propTypes = {
    /** Container reference */
    containerElt: PropTypes.object,

    /** Classname to give to the post list */
    className: PropTypes.string,

    /** ClassName to give to the error message */
    errorClassName: PropTypes.string,

    /** Selected user id, shown or previously shown in the user page */
    selectedUserId: PropTypes.number,
};

export default InfiniteUserList;