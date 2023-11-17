import { useSelector } from 'react-redux';
import { selectNavigation } from '../../utils/selectors.js';

/**
 * Hook allowing to get the navigation informations of the previous page
 * @return {{
 *   location: string,
 *   state: *,
 * }} Returns the location and the state of the previous page
 */
export function useGetNavigationInfo() {
    const { location, state } = useSelector(selectNavigation);

    return {
        location,
        state,
    };
}
