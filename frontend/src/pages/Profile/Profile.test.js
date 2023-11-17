import { getByRole, getByText, screen, waitFor } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
import userEvent from '../../utils/tests/user-event';
import '@testing-library/jest-dom';
import POSTS from '../../utils/tests/mocks/posts';
import { act } from 'react-dom/test-utils';
import USERS from '../../utils/tests/mocks/users';

describe('Profile test suite', () => {
    const initialState = {
        user: USERS.find((value) => value.userId === POSTS[0].writer.writerId),
    };
    const adminInitialState = {
        user: USERS.find((value) => value.role.roleId === 1),
    };

    it('should render with the user informations', async () => {
        render(undefined, {
            initialEntries: ['/profil'],
            preloadedState: initialState,
        });

        const mainElt = screen.getByRole('main');
        const headerElt = mainElt.querySelector('.topAppBar');

        await waitFor(() => {
            expect(getByRole(headerElt, 'heading')).toHaveTextContent(
                initialState.user.email,
            );
            screen.getByRole('button', { name: 'Modifier le profil' });
            screen.getByRole('button', { name: 'Supprimer le profil' });
        });
    });

    it('should render with the admin user informations', async () => {
        render(undefined, {
            initialEntries: ['/profil'],
            preloadedState: adminInitialState,
        });

        const mainElt = screen.getByRole('main');
        const headerElt = mainElt.querySelector('.topAppBar');

        await waitFor(() => {
            expect(getByRole(headerElt, 'heading')).toHaveTextContent(
                adminInitialState.user.email,
            );
            getByText(headerElt, 'Administrateur');
            screen.getByRole('button', { name: 'Modifier le profil' });
            screen.getByRole('button', { name: 'Supprimer le profil' });
            screen.getByRole('button', {
                name: "Modifier le role de l'utilisateur",
            });
        });
    });

    it('should render with articles from the user', async () => {
        render(undefined, {
            initialEntries: ['/profil'],
            preloadedState: initialState,
        });

        await waitFor(() => {
            screen.getByRole('feed');
            const postElts = screen.getAllByRole('article');
            for (const post of postElts) {
                getByText(post, initialState.user.email);
            }
        });
    });

    it('should load more articles on scroll', async () => {
        render(undefined, {
            initialEntries: ['/profil'],
            preloadedState: initialState,
        });

        const posts = POSTS.filter(
            (value) => value.writer.writerId === initialState.user.userId,
        );

        await waitFor(() => {
            screen.getByRole('feed', { name: 'Liste des posts' });
            const postElts = screen.getAllByRole('article');
            expect(postElts).toHaveLength(posts.length / 2);
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
            const postElts = screen.getAllByRole('article');
            expect(postElts).toHaveLength(posts.length);
        });
    });

    it('should like an article', async () => {
        const user = userEvent.setup();
        sessionStorage.setItem('userId', initialState.user.userId);
        render(undefined, {
            initialEntries: ['/profil'],
            preloadedState: initialState,
        });

        await waitFor(() => {
            screen.getAllByRole('article');
        });

        const postsElts = screen.getAllByRole('article');
        const likeButton = getByRole(postsElts[0], 'button', {
            name: /j'aimes/,
        });
        const previousLabel = likeButton.getAttribute('aria-label');

        await user.click(likeButton);
        await waitFor(() => {
            const newLabel = likeButton.getAttribute('aria-label');
            expect(newLabel).not.toBe(previousLabel);
        });
    });

    it('should give the focus to the main content when clicking the hidden link', async () => {
        const user = userEvent.setup();
        sessionStorage.setItem('userId', initialState.user.userId);
        render(undefined, {
            initialEntries: ['/profil'],
            preloadedState: initialState,
        });

        await waitFor(() => {
            screen.getAllByRole('article');
        });

        await user.tab();
        expect(screen.getByRole('link', { name: /Accéder/ })).toHaveFocus();

        await user.keyboard('{Enter}');
        expect(screen.getByRole('main')).toHaveFocus();
    });

    it('should redirect to the login page if the user is not authenticated', async () => {
        sessionStorage.setItem('authError', true);
        render(undefined, {
            initialEntries: ['/profil'],
            preloadedState: initialState,
        });

        await waitFor(() => {
            expect(screen.getByTestId('search-path').textContent).toMatch(
                'login',
            );
        });
    });

    it('should redirect to the error page if there is a server error', async () => {
        sessionStorage.setItem('serverError', true);
        render(undefined, {
            initialEntries: ['/profil'],
            preloadedState: initialState,
        });

        await waitFor(() => {
            expect(screen.getByTestId('search-path').textContent).toMatch(
                'error',
            );
        });
    });

    it('should redirect to the error page if there is a network error', async () => {
        sessionStorage.setItem('networkError', true);
        render(undefined, {
            initialEntries: ['/profil'],
            preloadedState: initialState,
        });

        await waitFor(() => {
            expect(screen.getByTestId('search-path').textContent).toMatch(
                'error',
            );
        });
    });
});
