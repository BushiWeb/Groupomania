import { useEffect } from 'react';
import { useScrollThreshold } from './useScrollThreshold.js';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../utils/selectors.js';

/**
 * Hooks allowing for infinite scroll.
 * @param scrollElt - Element to be scrolled
 * @param queryKey - React query key for the request
 * @param queryFn - React query queryFn function
 * @returns {{
 *  data,
 *  isFetching,
 *  isFetchingNextPage,
 *  isError,
 *  error
 * }}
 */
export function useInfiniteScroll(scrollElt, queryKey, queryFn) {
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
        queryKey: queryKey,
        queryFn: queryFn,
        getNextPageParam: (lastPage) => lastPage.data.length === 0 ? undefined : lastPage.pageParam + 1,
    });

    useEffect(() => {
        if (shouldLoadMore && isAuthenticated) {
            fetchNextPage();
        }
    }, [shouldLoadMore, fetchNextPage, isAuthenticated]);

    const flattenedData = data?.pages?.reduce((acc, curr) => acc.concat(curr.data), []);

    return {
        data: flattenedData,
        isLoading,
        isFetchingNextPage,
        isError,
        error,
    };
}