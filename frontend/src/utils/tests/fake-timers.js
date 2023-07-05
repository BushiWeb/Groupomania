import { jest } from '@jest/globals';
import { act } from '@testing-library/react';

const fakeTimers = {
    useFakeTimers: jest.useFakeTimers,

    useRealTimers: jest.useRealTimers,

    cleanAndUseRealTimers: () => {
        act(() => {
            jest.runOnlyPendingTimers();
        });
        jest.useRealTimers();
    },

    runAllTimers: () => {
        act(() => {
            jest.runAllTimers();
        });
    },

    runOnlyPendingTimers: () => {
        act(() => {
            jest.runOnlyPendingTimers();
        });
    },

    advanceTimersByTime: (time) => {
        act(() => {
            jest.advanceTimersByTime(time);
        });
    },

    rawAdvanceTimersByTime: jest.advanceTimersByTime,
};

export default fakeTimers;