import {
    getByRole, getByText, screen, waitFor,
} from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper';
import userEvent from '../../../utils/tests/user-event';
import '@testing-library/jest-dom';
import POSTS from '../../../utils/tests/mocks/posts';
import { act } from 'react-dom/test-utils';
import InfinitePostFeed from './InfinitePostFeed';
import { useState } from 'react';

describe('InfinitePostFeed test suite', () => {
    function TestComponent({ ...props }) {
        const [containerRef, setContainerRef] = useState(null);
        const mainRef = (node) => {
            if (node) {
                setContainerRef(node);
            }
        };
        return <div data-testid="container" ref={mainRef}>
            <InfinitePostFeed containerElt={containerRef} {...props}/>
        </div>;
    }

    const initialState = { user: { email: POSTS[0].writer.email, userId: POSTS[0].writer.writerId, roleId: 1 }};

    beforeEach(() => {
        sessionStorage.clear();
    });

    it('should render with one page of articles', async () => {
        render(<TestComponent/>, { preloadedState: initialState });

        await waitFor(() => {
            screen.getByRole('feed', { name: 'Liste des posts' });
            const postElts = screen.getAllByRole('article');
            expect(postElts).toHaveLength(POSTS.length / 2);
        });
    });

    it('should render with filtered articles', async () => {
        render(<TestComponent userId={POSTS[0].writer.writerId}/>, { preloadedState: initialState });

        await waitFor(() => {
            screen.getByRole('feed', { name: 'Liste des posts' });
            const postElts = screen.getAllByRole('article');
            for (const post of postElts) {
                getByText(post, POSTS[0].writer.email);
            }
        });
    });

    it('should load more articles on scroll', async () => {
        render(<TestComponent/>, { preloadedState: initialState });

        await waitFor(() => {
            screen.getByRole('feed', { name: 'Liste des posts' });
            const postElts = screen.getAllByRole('article');
            expect(postElts).toHaveLength(POSTS.length / 2);
        });

        const containerElt = screen.getByTestId('container');
        containerElt.scrollTop = 5000;
        const scrollEvent = new Event('scroll');
        act(() => {
            containerElt.dispatchEvent(scrollEvent);
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
        render(<TestComponent/>, { preloadedState: initialState });

        await waitFor(() => {
            screen.getAllByRole('article');
        });

        const postsElts = screen.getAllByRole('article');
        const likeButton = getByRole(postsElts[0], 'button', { name: /j'aimes/ });
        const previousLabel = likeButton.getAttribute('aria-label');

        await user.click(likeButton);
        await waitFor(() => {
            const newLabel = likeButton.getAttribute('aria-label');
            expect(newLabel).not.toBe(previousLabel);
        });
    });

    it('should like one filtered article', async () => {
        const user = userEvent.setup();
        sessionStorage.setItem('userId', initialState.user.userId);
        render(<TestComponent userId={POSTS[0].writer.writerId}/>, { preloadedState: initialState });

        await waitFor(() => {
            screen.getAllByRole('article');
        });

        const postsElts = screen.getAllByRole('article');
        const likeButton = getByRole(postsElts[0], 'button', { name: /j'aimes/ });
        const previousLabel = likeButton.getAttribute('aria-label');

        await user.click(likeButton);
        await waitFor(() => {
            const newLabel = likeButton.getAttribute('aria-label');
            expect(newLabel).not.toBe(previousLabel);
        });
    });

    it('should redirect to the login page if the user is not authenticated when loading more posts', async () => {
        sessionStorage.setItem('authError', 'true');
        render(undefined, { preloadedState: initialState, initialEntries: ['/']});

        await waitFor(() => {
            const path = screen.getByTestId('search-path').textContent;
            expect(path).toBe('/login');
        });
    });

    it('should redirect to the error page if there is a network error', async () => {
        sessionStorage.setItem('networkError', 'true');
        render(<TestComponent/>, { preloadedState: initialState });

        await waitFor(() => {
            const path = screen.getByTestId('search-path').textContent;
            expect(path).toBe('/error');
        });
    });

    it('should redirect to the error page if there is a 500 error', async () => {
        sessionStorage.setItem('serverError', 'true');
        render(<TestComponent/>, { preloadedState: initialState });

        await waitFor(() => {
            const path = screen.getByTestId('search-path').textContent;
            expect(path).toBe('/error');
        });
    });

    it('should display an error message in case of another error', async () => {
        sessionStorage.setItem('inputError', 'true');
        render(<TestComponent/>, { preloadedState: initialState });

        await waitFor(() => {
            screen.getByText(/erreur/);
        });
    });

    it('should redirects to the login page if the user is not authenticated when liking a post', async () => {
        const user = userEvent.setup();
        sessionStorage.setItem('userId', initialState.user.userId);
        render(undefined, { preloadedState: initialState, initialEntries: ['/']});

        await waitFor(() => {
            screen.getAllByRole('article');
        });

        const postsElts = screen.getAllByRole('article');
        const likeButton = getByRole(postsElts[0], 'button', { name: /j'aimes/ });

        sessionStorage.setItem('authError', 'true');

        await user.click(likeButton);
        await waitFor(() => {
            const path = screen.getByTestId('search-path').textContent;
            expect(path).toBe('/login');
        });
    });

    it('should redirects to the error page if there is a network error when liking a post', async () => {
        const user = userEvent.setup();
        sessionStorage.setItem('userId', initialState.user.userId);
        render(undefined, { preloadedState: initialState, initialEntries: ['/']});

        await waitFor(() => {
            screen.getAllByRole('article');
        });

        const postsElts = screen.getAllByRole('article');
        const likeButton = getByRole(postsElts[0], 'button', { name: /j'aimes/ });

        sessionStorage.setItem('networkError', 'true');

        await user.click(likeButton);
        await waitFor(() => {
            const path = screen.getByTestId('search-path').textContent;
            expect(path).toBe('/error');
        });
    });

    it('should redirects to the error page if there is a server error when liking a post', async () => {
        const user = userEvent.setup();
        sessionStorage.setItem('userId', initialState.user.userId);
        render(undefined, { preloadedState: initialState, initialEntries: ['/']});

        await waitFor(() => {
            screen.getAllByRole('article');
        });

        const postsElts = screen.getAllByRole('article');
        const likeButton = getByRole(postsElts[0], 'button', { name: /j'aimes/ });

        sessionStorage.setItem('serverError', 'true');

        await user.click(likeButton);
        await waitFor(() => {
            const path = screen.getByTestId('search-path').textContent;
            expect(path).toBe('/error');
        });
    });

    it('should open the menu when clicking on the More Actions button of a post', async () => {
        const user = userEvent.setup();
        render(<TestComponent/>, { preloadedState: initialState });
        await waitFor(() => {
            screen.getAllByRole('article');
        });

        const moreButton = screen.getByRole('button', { name: /actions/ });

        await user.click(moreButton);
        screen.getByRole('menu', { name: /Actions/ });
        screen.getByRole('button', { name: 'Modifier' });
        screen.getByRole('button', { name: 'Supprimer' });
    });

    it('should have vertical posts', async () => {
        render(<TestComponent vertical/>, { preloadedState: initialState });
        await waitFor(() => {
            const posts = screen.getAllByRole('article');
            for (const post of posts) {
                expect(post).toHaveAttribute('data-vertical');
            }
        });
    });
});