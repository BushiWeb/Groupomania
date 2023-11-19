import { getByRole, screen, waitFor } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
import userEvent from '../../utils/tests/user-event';
import '@testing-library/jest-dom';
import POSTS from '../../utils/tests/mocks/posts';
import { act } from 'react-dom/test-utils';

describe('Home test suite', () => {
    const initialState = {
        user: { email: 'test@gmail.com', userId: 130, role: { roleId: 1 } },
    };
    it('should render with one page of articles', async () => {
        render(undefined, {
            initialEntries: ['/'],
            preloadedState: initialState,
        });

        await waitFor(() => {
            screen.getByRole('feed', { name: 'Liste des posts' });
            const postElts = screen.getAllByRole('article');
            expect(postElts).toHaveLength(POSTS.length / 2);
        });
    });

    it('should load more articles on scroll', async () => {
        render(undefined, {
            initialEntries: ['/'],
            preloadedState: initialState,
        });

        await waitFor(() => {
            screen.getByRole('feed', { name: 'Liste des posts' });
            const postElts = screen.getAllByRole('article');
            expect(postElts).toHaveLength(POSTS.length / 2);
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
            expect(postElts).toHaveLength(POSTS.length);
        });
    });

    it('should like an article', async () => {
        const user = userEvent.setup();
        sessionStorage.setItem('userId', initialState.user.userId);
        render(undefined, {
            initialEntries: ['/'],
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
            initialEntries: ['/'],
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
});
