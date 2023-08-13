import { screen, waitFor } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
import '@testing-library/jest-dom';

describe('UI test suite', () => {
    it('should render', async () => {
        render(undefined, { initialEntries: ['/'], preloadedState: { user: { email: 'test' }}});

        await waitFor(() => {
            screen.getByRole('main');
            screen.getByRole('navigation');
            screen.getByRole('banner');
        });
    });

    it('should redirect to the login page if the usre is not authenticated', async () => {
        render(undefined, { initialEntries: ['/']});

        await waitFor(() => {
            const path = screen.getByTestId('search-path');
            expect(path).toHaveTextContent('/login');
        });
    });
});