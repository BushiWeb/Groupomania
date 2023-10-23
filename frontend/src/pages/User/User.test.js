import {
    getAllByRole, getByLabelText, getByRole, queryByRole, screen, waitFor,
} from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
import userEvent from '../../utils/tests/user-event';
import '@testing-library/jest-dom';
import USERS from '../../utils/tests/mocks/users';
import { act } from 'react-dom/test-utils';
import { changeViewportWidth } from '../../utils/tests/changeViewportWidth';

describe('User page test suite', () => {
    const userId = 2;
    const initialEntries = [`/reseau/${userId}`];
    const initialAdminState = { user: { email: 'test@gmail.com', userId: 130, role: { roleId: 1 }}};
    const initialOwnerState = { user: { email: 'test@gmail.com', userId, role: { roleId: 2 }}};
    const initialState = { user: { email: 'test@gmail.com', userId: 130, role: { roleId: 2 }}};

    function renderOptions(preloadedState = initialState) {
        return { preloadedState, initialEntries };
    }

    it('should render the content within the network page on large devices', () => {
        changeViewportWidth(300);
        const { container } = render(undefined, renderOptions());

        const mainElt = screen.getByRole('main');
        expect(mainElt.querySelector('.userHeader')).toBeNull();
        getByRole(mainElt, 'feed');

        const headerElt = container.querySelector('.userHeader');
        expect(headerElt).not.toBeNull();
        getByRole(headerElt, 'link', { name: 'Accéder directement au contenu' });
        getByRole(headerElt, 'button', { name: 'Se déconnecter' });
        getByRole(headerElt, 'button', { name: 'Passer au mode sombre' });
        getByRole(headerElt, 'button', { name: 'Retourner à la liste' });
    });

    it('should render the content in the UI on medium sized devices', () => {
        changeViewportWidth(900);
        render(undefined, renderOptions());

        const mainElt = screen.getByRole('main');
        const headerElt = mainElt.querySelector('.userHeader');
        expect(headerElt).not.toBeNull();
        getByRole(mainElt, 'feed');

        expect(queryByRole(headerElt, 'link', { name: 'Accéder directement au contenu' })).toBeNull();
        expect(queryByRole(headerElt, 'button', { name: 'Se déconnecter' })).toBeNull();
        expect(queryByRole(headerElt, 'button', { name: 'Passer au mode sombre' })).toBeNull();
        getByRole(headerElt, 'button', { name: 'Retourner à la liste' });
    });

    it('should render the page at the top level on small devices', () => {
        changeViewportWidth(1500);
        render(undefined, renderOptions());

        const mainElt = screen.getByRole('main');
        const sectionElt = getByLabelText(mainElt, /Utilisateur/);
        const headerElt = sectionElt.querySelector('.userHeader');
        expect(headerElt).not.toBeNull();
        getByRole(sectionElt, 'feed');

        expect(queryByRole(headerElt, 'link', { name: 'Accéder directement au contenu' })).toBeNull();
        expect(queryByRole(headerElt, 'button', { name: 'Se déconnecter' })).toBeNull();
        expect(queryByRole(headerElt, 'button', { name: 'Passer au mode sombre' })).toBeNull();
        expect(queryByRole(headerElt, 'button', { name: 'Retourner à la liste' })).toBeNull();
    });

    it('should focus the main content', async () => {
        const user = userEvent.setup();
        changeViewportWidth(300);
        render(undefined, renderOptions());

        const mainElt = screen.getByRole('main');
        const linkElt = screen.getByRole('link', { name: 'Accéder directement au contenu' });

        await user.click(linkElt);
        expect(mainElt).toHaveFocus();
    });

    it('should log the user out', async () => {
        const user = userEvent.setup();
        changeViewportWidth(300);
        render(undefined, renderOptions());
        const logoutButton = screen.getByRole('button', { name: 'Se déconnecter' });

        await user.click(logoutButton);
        await waitFor(() => {
            const path = screen.getByTestId('search-path');
            expect(path).toHaveTextContent('/login');
        });
    });
});