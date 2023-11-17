import { useDispatch } from 'react-redux';
import { navigationInfoSet } from './navigationInfo.slice.js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook allowing to save the current location with additionnal informations, to be used by other pages.
 * @param {string} location - Current location
 * @param {*} state - Data associated with the location
 */
export function useSetNavigationInfo(location, state) {
    const dispatch = useDispatch();
    const { key } = useLocation();

    useEffect(() => {
        dispatch(navigationInfoSet({ location, state, key }));
    }, [dispatch, location, state, key]);
}
