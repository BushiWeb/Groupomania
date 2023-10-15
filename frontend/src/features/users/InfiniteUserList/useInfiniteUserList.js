import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll.js';
import { useHandleRequestError } from '../../../hooks/useHandleRequestError.js';
import { simpleFetch } from '../../../utils/fetch.js';

/**
 * Hook for the infiniteUserList component
 * @param containerElt - Element receiving the scroll event
 * @returns {{
 *       data,
 *       isFetchingNextPage,
 *       isLoading,
 *       isError,
 *       error,
 *   }}
 */
export function useInfiniteUserList(containerElt) {
    const {
        data,
        isFetchingNextPage,
        isLoading,
        isError,
        error,
    } = useInfiniteScroll(
        containerElt,
        ['users'],
        async ({ pageParam = 1 }) => {
            const data = await simpleFetch({ url: `data/users?page=${pageParam}` });
            return { data, pageParam };
        }
    );

    useHandleRequestError(isError, error);

    return {
        data,
        isFetchingNextPage,
        isLoading,
        isError,
        error,
    };

}