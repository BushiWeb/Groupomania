import Home from './Home';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
import userEvent from '../../utils/tests/user-event';
import '@testing-library/jest-dom';
import POSTS from '../../utils/tests/mocks/posts';
import { act } from 'react-dom/test-utils';

describe('Home test suite', () => {
    it('should render with one page of articles', async () => {
        render(undefined, { initialEntries: ['/'], preloadedState: { user: { email: 'test@gmail.com', roleId: 1 }}});

        await waitFor(() => {
            screen.getByRole('feed', { name: 'Liste des posts' });
            const postElts = screen.getAllByRole('article');
            expect(postElts).toHaveLength(POSTS.length / 2);
        });
    });

    it('should load more articles on scroll', async () => {
        render(undefined, { initialEntries: ['/'], preloadedState: { user: { email: 'test@gmail.com', roleId: 1 }}});

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
});