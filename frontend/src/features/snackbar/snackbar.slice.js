import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
    name: 'snackbar',
    initialState: {
        messages: [],
    },
    reducers: {
        pushMessage: (draft, { payload }) => {
            draft.messages.push(payload);
            return;
        },

        shiftMessage: (draft) => {
            draft.messages.shift();
            return;
        },
    },
});

export const {
    pushMessage: snackbarPushMessage,
    shiftMessage: snackbarShiftMessage,
} = actions;
export default reducer;
