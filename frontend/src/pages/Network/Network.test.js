import { getAllByRole, screen, waitFor } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
import userEvent from '../../utils/tests/user-event';
import '@testing-library/jest-dom';
import USERS from '../../utils/tests/mocks/users';
import { act } from 'react-dom/test-utils';
import { changeViewportWidth } from '../../utils/tests/changeViewportWidth';

describe('Network page test suite', () => {
    const userId = 1;
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

    it('should show the previously viewed user', async () => {
        const user = userEvent.setup();
        changeViewportWidth(300);
        const { container } = render(undefined, { initialEntries: [`/reseau/${userId}`], preloadedState: initialState });
        const userShown = USERS.find((value) => value.userId === userId);
        const headerElt = container.querySelector('.userHeader');

        await waitFor(() => {
            expect(headerElt).toHaveTextContent(userShown.email);
        });

        const backButton = screen.getByRole('button', { name: 'Retourner à la liste' });
        await user.click(backButton);

        await waitFor(() => {
            const list = screen.getByRole('list', { name: 'Liste des utilisateurs' });
            const selectedListItem = list.querySelector('[data-selected]');
            expect(selectedListItem).toHaveTextContent(userShown.email);
        });
    });

    it('should select no user if the previous page was not a user page', async () => {
        const user = userEvent.setup();
        changeViewportWidth(300);
        const { container } = render(undefined, { initialEntries: [`/reseau/${userId}`], preloadedState: initialState });
        const userShown = USERS.find((value) => value.userId === userId);
        const headerElt = container.querySelector('.userHeader');

        await waitFor(() => {
            expect(headerElt).toHaveTextContent(userShown.email);
        });

        const backButton = screen.getByRole('button', { name: 'Retourner à la liste' });
        await user.click(backButton);

        const homeButton = screen.getByRole('link', { name: 'Accueil' });
        await user.click(homeButton);

        const networkButton = screen.getByRole('link', { name: 'Réseau' });
        await user.click(networkButton);

        await waitFor(() => {
            const list = screen.getByRole('list', { name: 'Liste des utilisateurs' });
            const selectedListItem = list.querySelector('[data-selected]');
            expect(selectedListItem).toBeNull();
        });
    });

    it('should redirect to the previously selected user when on a large screen', async () => {
        const user = userEvent.setup();
        changeViewportWidth(1500);
        const { container } = render(undefined, { initialEntries: [`/reseau/${userId}`], preloadedState: initialState });
        const userShown = USERS.find((value) => value.userId === userId);
        const headerElt = container.querySelector('.userHeader');

        await waitFor(() => {
            expect(headerElt).toHaveTextContent(userShown.email);
        });

        const networkButton = screen.getByRole('tab', { name: 'Réseau' });
        await user.click(networkButton);

        await waitFor(() => {
            const path = screen.getByTestId('search-path');
            expect(path).toHaveTextContent(`/reseau/${userId}`);
        });
    });
});