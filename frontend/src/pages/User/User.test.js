import {
    getByLabelText, getByRole, getByText, queryByRole, screen, waitFor,
} from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
import userEvent from '../../utils/tests/user-event';
import '@testing-library/jest-dom';
import USERS from '../../utils/tests/mocks/users';
import { changeViewportWidth } from '../../utils/tests/changeViewportWidth';
import POSTS from '../../utils/tests/mocks/posts';

beforeEach(() => {
    sessionStorage.clear();
});

describe('User page test suite', () => {
    const userId = 1;
    const initialAdminState = { user: { email: 'test@gmail.com', userId: 130, role: { roleId: 1 }}};
    const initialOwnerState = { user: { email: 'test@gmail.com', userId, role: { roleId: 2 }}};
    const initialState = { user: { email: 'test@gmail.com', userId: 130, role: { roleId: 2 }}};

    function renderOptions({ preloadedState = initialState, id = userId } = {}) {
        return { preloadedState, initialEntries: [`/reseau/${id}`]};
    }

    it('should render the page at the top level on small devices', async () => {
        changeViewportWidth(300);
        const { container } = render(undefined, renderOptions());

        const mainElt = screen.getByRole('main');
        expect(mainElt.querySelector('.userHeader')).toBeNull();
        getByRole(mainElt, 'feed');

        await waitFor(() => {
            const headerElt = container.querySelector('.userHeader');
            expect(headerElt).not.toBeNull();
            getByRole(headerElt, 'link', { name: 'Accéder directement au contenu' });
            getByRole(headerElt, 'button', { name: 'Se déconnecter' });
            getByRole(headerElt, 'button', { name: 'Passer au mode sombre' });
            getByRole(headerElt, 'button', { name: 'Retourner à la liste' });
        });
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

    it('should render the content within the network page on large devices', () => {
        changeViewportWidth(1500);
        render(undefined, renderOptions());

        const mainElt = screen.getByRole('main');
        const sectionElt = getByLabelText(mainElt, /Profil de l'utilisateur/);
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
        let logoutButton;

        await waitFor(() => {
            logoutButton = screen.getByRole('button', { name: 'Se déconnecter' });
        });

        await user.click(logoutButton);
        await waitFor(() => {
            const path = screen.getByTestId('search-path');
            expect(path).toHaveTextContent('/login');
        });
    });

    it('should get the user informations', async () => {
        changeViewportWidth(300);
        const { container } = render(undefined, renderOptions());
        screen.getByLabelText('Chargement des données de l\'utilisateur');
        const user = USERS.find((value) => value.userId === userId);

        await waitFor(() => {
            const headerElt = container.querySelector('.userHeader');
            getByText(headerElt, user.email);
        });
    });

    it('should display the admin subtitle', async () => {
        changeViewportWidth(300);
        const { container } = render(undefined, renderOptions({ id: 1 }));
        screen.getByLabelText('Chargement des données de l\'utilisateur');

        await waitFor(() => {
            const headerElt = container.querySelector('.userHeader');
            getByText(headerElt, 'Administrateur');
        });
    });

    it('should display the owner actions', async () => {
        changeViewportWidth(1500);
        render(undefined, renderOptions({ preloadedState: initialOwnerState }));
        screen.getByLabelText('Chargement des données de l\'utilisateur');

        await waitFor(() => {
            screen.getByRole('button', { name: 'Modifier le profil' });
            screen.getByRole('button', { name: 'Supprimer le profil' });
        });
    });

    it('should display the admin actions', async () => {
        changeViewportWidth(1500);
        render(undefined, renderOptions({ preloadedState: initialAdminState }));
        screen.getByLabelText('Chargement des données de l\'utilisateur');

        await waitFor(() => {
            screen.getByRole('button', { name: 'Modifier le role de l\'utilisateur' });
            screen.getByRole('button', { name: 'Supprimer le profil' });
        });
    });

    it('should get the user\'s posts', async () => {
        changeViewportWidth(300);
        render(undefined, renderOptions());
        screen.getByLabelText('Chargement d\'anciens posts');
        const userEmail = POSTS.find((value) => value.writer.writerId === userId).writer.email;

        await waitFor(() => {
            screen.getByRole('feed');
            const postElts = screen.getAllByRole('article');
            for (const post of postElts) {
                getByText(post, userEmail);
            }
        });
    });

    it('should display an error message if the user is not found', async () => {
        changeViewportWidth(300);
        const { container } = render(undefined, renderOptions({ id: 99999 }));
        screen.getByLabelText('Chargement des données de l\'utilisateur');

        await waitFor(() => {
            const headerElt = container.querySelector('.userHeader');
            getByText(headerElt, /trouvé/);
        });
    });

    it('should display an error message if the user is not found', async () => {
        changeViewportWidth(300);
        const { container } = render(undefined, renderOptions({ id: 99999 }));
        screen.getByLabelText('Chargement des données de l\'utilisateur');

        await waitFor(() => {
            const headerElt = container.querySelector('.userHeader');
            getByText(headerElt, /trouvé/);
        });
    });

    it('should display an error message if the user id is not a number', async () => {
        changeViewportWidth(300);
        const { container } = render(undefined, renderOptions({ id: 'text' }));
        screen.getByLabelText('Chargement des données de l\'utilisateur');

        await waitFor(() => {
            const headerElt = container.querySelector('.userHeader');
            getByText(headerElt, /erreur/);
        });
    });

    it('should redirect to the login page if the user is not authenticated', async () => {
        changeViewportWidth(300);
        sessionStorage.setItem('authError', true);
        render(undefined, renderOptions());

        await waitFor(() => {
            expect(screen.getByTestId('search-path').textContent).toMatch('login');
        });
    });

    it('should redirect to the error page if there is a server error', async () => {
        changeViewportWidth(300);
        sessionStorage.setItem('serverError', true);
        render(undefined, renderOptions());

        await waitFor(() => {
            expect(screen.getByTestId('search-path').textContent).toMatch('error');
        });
    });

    it('should redirect to the error page if there is a network error', async () => {
        changeViewportWidth(300);
        sessionStorage.setItem('networkError', true);
        render(undefined, renderOptions());

        await waitFor(() => {
            expect(screen.getByTestId('search-path').textContent).toMatch('error');
        });
    });
});