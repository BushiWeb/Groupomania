import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
    name: 'tooltip',
    initialState: {
        targetX: 0,
        targetY: 0,
        targetWidth: 0,
        targetHeight: 0,
        show: false,
        label: '',
    },
    reducers: {
        show: {
            prepare: (label, {
                x, y, width, height,
            }) => {
                return {
                    payload: {
                        x, y, width, height, label,
                    },
                };
            },
            reducer: (draft, {
                payload: {
                    x, y, width, height, label,
                },
            }) => ({
                targetX: x,
                targetY: y,
                targetWidth: width,
                targetHeight: height,
                label,
                show: true,
            }),
        },
        hide: (draft) => {
            draft.show = false;
            return;
        },
    },
});

export const { show: tooltipShow, hide: tooltipHide } = actions;
export default reducer;