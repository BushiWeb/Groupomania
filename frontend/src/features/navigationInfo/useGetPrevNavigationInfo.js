import { useSelector } from 'react-redux';
import { selectPreviousNavigation } from '../../utils/selectors.js';

/**
 * Hook allowing to get the navigation informations of the previous page
 * @return {{
 *   prevLocation: string,
 *   prevState: *,
 *   key: string,
 * }} Returns the location and the state of the previous page
 */
export function useGetPrevNavigationInfo() {
    const { prevLocation, prevState, key } = useSelector(selectPreviousNavigation);

    return {
        prevLocation,
        prevState,
        key,
    };
}