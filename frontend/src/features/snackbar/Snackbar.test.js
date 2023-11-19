import Snackbar from './Snackbar.jsx';
import { screen, act } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import '@testing-library/jest-dom';
import { snackbarPushMessage } from './snackbar.slice.js';

describe('Snackbar component test suite', () => {
    const message1 = 'test',
        message2 = 'test2';

    it('should render', () => {
        render(<Snackbar />);
    });

    it('should display each message on after another, in the right order', () => {
        jest.useFakeTimers();
        const { container, store } = render(<Snackbar />);

        let snackbarElt = container.querySelector('div');
        expect(snackbarElt).toBeNull();

        act(() => {
            store.dispatch(snackbarPushMessage(message1));
            store.dispatch(snackbarPushMessage(message2));
        });
        act(() => jest.runOnlyPendingTimers());
        snackbarElt = screen.getByText(message1);

        act(() => jest.runOnlyPendingTimers());
        snackbarElt = container.querySelector('div');
        expect(snackbarElt).toBeNull();
        snackbarElt = screen.queryByText(message1);
        expect(snackbarElt).toBeNull();

        act(() => jest.runOnlyPendingTimers());
        snackbarElt = screen.getByText(message2);

        act(() => jest.runOnlyPendingTimers());
        snackbarElt = container.querySelector('div');
        expect(snackbarElt).toBeNull();
        snackbarElt = screen.queryByText(message2);
        expect(snackbarElt).toBeNull();

        jest.useRealTimers();
    });
});
