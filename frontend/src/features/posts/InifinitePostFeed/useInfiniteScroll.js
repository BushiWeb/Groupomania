import { useEffect } from 'react';
import { useScrollThreshold } from '../../../hooks/useScrollThreshold.js';
import { useInfiniteQuery } from '@tanstack/react-query';
import { simpleFetch } from '../../../utils/fetch.js';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../../utils/selectors.js';

/**
 * Hooks allowing for infinite scroll.
 * @param scrollElt - Element to be scrolled
 * @returns {{
 *  posts,
 *  isFetching,
 *  isFetchingNextPage,
 *  isError,
 *  error
 * }}
 */
export function useInfiniteScroll(scrollElt) {
    const shouldLoadMore = useScrollThreshold(1000, scrollElt, true);
    const isAuthenticated = useSelector(selectIsAuthenticated);

    const {
        data,
        error,
        isError,
        fetchNextPage,
        isLoading,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: async ({ pageParam = 1 }) => {
            const data = await simpleFetch({ url: `data/posts?page=${pageParam}` });
            return { data, pageParam };
        },
        getNextPageParam: (lastPage) => lastPage.data.length === 0 ? undefined : lastPage.pageParam + 1,
    });

    useEffect(() => {
        if (shouldLoadMore && isAuthenticated) {
            fetchNextPage();
        }
    }, [shouldLoadMore, fetchNextPage, isAuthenticated]);

    const posts = data?.pages?.reduce((acc, curr) => acc.concat(curr.data), []);

    return {
        posts,
        isLoading,
        isFetchingNextPage,
        isError,
        error,
    };
}