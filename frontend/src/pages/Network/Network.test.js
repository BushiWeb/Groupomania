import Network from './Network';
import { getAllByRole, screen, waitFor } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
import userEvent from '../../utils/tests/user-event';
import '@testing-library/jest-dom';
import USERS from '../../utils/tests/mocks/users';
import { act } from 'react-dom/test-utils';

describe('Network page test suite', () => {
    const initialState = { user: { email: 'test@gmail.com', userId: 130, role: { roleId: 1 }}};
    const initialEntries = ['/reseau'];
    const renderOptions = { preloadedState: initialState, initialEntries };

    it('should render with one page of users', async () => {
        render(undefined, renderOptions);

        await waitFor(() => {
            const listElt = screen.getByRole('list', { name: 'Liste des utilisateurs' });
            const userElts = getAllByRole(listElt, 'listitem');
            expect(userElts).toHaveLength(USERS.length / 2);
        });
    });

    it('should load more users on scroll', async () => {
        render(undefined, renderOptions);

        await waitFor(() => {
            const listElt = screen.getByRole('list', { name: 'Liste des utilisateurs' });
            const userElts = getAllByRole(listElt, 'listitem');
            expect(userElts).toHaveLength(USERS.length / 2);
        });

        const mainElement = screen.getByRole('main');
        mainElement.scrollTop = 5000;
        const scrollEvent = new Event('scroll');
        await act(() => {
            mainElement.dispatchEvent(scrollEvent);
        });

        await waitFor(() => {
            screen.getByLabelText(/Chargement/);
        });

        await waitFor(() => {
            const listElt = screen.getByRole('list', { name: 'Liste des utilisateurs' });
            const userElts = getAllByRole(listElt, 'listitem');
            expect(userElts).toHaveLength(USERS.length);
        });
    });

    it('should navigate to the user\'s page', async () => {
        const user = userEvent.setup();
        render(undefined, renderOptions);
        let userElt;

        await waitFor(() => {
            userElt = screen.getByRole('link', { name: USERS[0].email });
        });

        await user.click(userElt);
        await waitFor(() => {
            const path = screen.getByTestId('search-path').textContent;
            expect(path).toBe(`/reseau/${USERS[0].userId}`);
        });
    });

    it('should give the focus to the main content when clicking the hidden link', async () => {
        const user = userEvent.setup();
        sessionStorage.setItem('userId', initialState.user.userId);
        render(undefined, { initialEntries: ['/'], preloadedState: initialState });

        await waitFor(() => {
            screen.getAllByRole('article');
        });

        await user.tab();
        expect(screen.getByRole('link', { name: /Accéder/ })).toHaveFocus();

        await user.keyboard('{Enter}');
        expect(screen.getByRole('main')).toHaveFocus();
    });
});