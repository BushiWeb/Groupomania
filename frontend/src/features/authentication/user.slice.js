import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        login: (state, action) => action.payload,
        logout: () => {},
    },
});

export const { login, logout } = actions;
export default reducer;