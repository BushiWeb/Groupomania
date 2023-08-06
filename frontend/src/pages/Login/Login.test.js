import Login from './Login';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

beforeEach(() => {
    sessionStorage.clear();
});

describe('Login page test suite', () => {
    const userEmail = 'test@gmail.com';

    it('should render if the user is not authenticated', async () => {
        render(undefined, { initialEntries: ['/login']});

        await waitFor(() => {
            screen.getByRole('form', { name: 'Formulaire d\'inscription et de connection' });
        });
    });

    it('should redirect to the home page if the user is authenticated', async () => {
        const preloadedState = {
            user: {
                userId: 1,
                email: userEmail,
                role: {
                    name: 'user',
                    roleId: 2,
                },
            },
        };
        render(undefined, { initialEntries: ['/login'], preloadedState });

        await waitFor(() => {
            const path = screen.getByTestId('search-path');
            expect(path).toHaveTextContent(/^\/$/);
        });
    });

    it('should send a login request if the user is not authenticated', async () => {
        sessionStorage.setItem('user', userEmail);
        render(undefined, { initialEntries: ['/login']});

        await waitFor(() => {
            const path = screen.getByTestId('search-path');
            expect(path).toHaveTextContent(/^\/$/);
        });
    });

    it('should update the anti CSRF token', async () => {
        render(undefined, { initialEntries: ['/login']});

        await waitFor(() => {
            const antiCsrfToken = document.querySelector('meta[name="crsf-token"]').getAttribute('content');
            expect(antiCsrfToken).toBe('testToken');
        });
    });
});