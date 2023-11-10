import { useQuery } from '@tanstack/react-query';
import { useHandleRequestError } from '../../../hooks/useHandleRequestError.js';
import { simpleFetch } from '../../../utils/fetch.js';

/**
 * Fetches the user.
 * @param {number} userId
 * @returns {{
 *  data: Object,
 *  isLoading: boolean,
 *  error: Object,
 *  isError: boolean,
 *  status: number
 * }}
 */
export default function useGetUser(userId) {
    const {
        data,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['users', userId],
        queryFn: async () => simpleFetch({ url: `/data/users/${userId}` }),
    });

    const status = useHandleRequestError(isError, error);

    return {
        data,
        isLoading,
        error,
        isError,
        status,
    };
}