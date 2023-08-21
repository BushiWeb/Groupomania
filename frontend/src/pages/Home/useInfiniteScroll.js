import { useEffect, useRef } from 'react';
import { useScrollThreshold } from '../../hooks/useScrollThreshold.js';
import { useInfiniteQuery } from '@tanstack/react-query';
import { simpleFetch } from '../../utils/fetch.js';

/**
 * Hooks allowing for infinite scroll.
 * @returns {{
 *  posts,
 *  mainRef,
 *  isFetching,
 *  isFetchingNextPage,
 *  isError
 * }}
 */
export function useInfiniteScroll() {
    const mainRef = useRef(null);
    const shouldLoadMore = useScrollThreshold(1000, mainRef.current, true);

    const {
        data,
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
        useErrorBoundary: (error) => error.status === 401 || error.status >= 500,
    });

    useEffect(() => {
        if (shouldLoadMore) {
            fetchNextPage();
        }
    }, [shouldLoadMore, fetchNextPage]);

    const posts = data?.pages?.reduce((acc, curr) => acc.concat(curr.data), []);

    return {
        posts,
        mainRef,
        isLoading,
        isFetchingNextPage,
        isError,
    };
}