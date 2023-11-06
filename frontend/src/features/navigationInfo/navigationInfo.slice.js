import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    prevLocation: undefined,
    location: undefined,
    prevState: undefined,
    state: undefined,
    locationKey: undefined,
};

const { actions, reducer } = createSlice({
    name: 'navigation_info',
    initialState,
    reducers: {
        setLocation: (draft, { payload }) => {
            if (payload.key !== draft.locationKey) {
                draft.prevLocation = draft.location;
                draft.location = payload.location;
                draft.locationKey = payload.key;
            }
            return;
        },
        setState: (draft, { payload }) => {
            draft.prevState = draft.state;
            draft.state = payload.state;
            return;
        },
        set: (draft, { payload }) => {
            if (payload.key !== draft.locationKey) {
                draft.prevLocation = draft.location;
                draft.location = payload.location;
                draft.prevState = draft.state;
                draft.state = payload.state;
                draft.locationKey = payload.key;
            }
            return;
        },
        reset: () => initialState,
    },
});

export const {
    setLocation: navigationInfoSetLocation,
    setState: navigationInfoSetState,
    set: navigationInfoSet,
    reset: navigationInfoReset,
} = actions;
export default reducer;