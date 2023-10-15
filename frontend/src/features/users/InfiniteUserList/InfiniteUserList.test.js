import { screen, waitFor } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper';
import userEvent from '../../../utils/tests/user-event';
import InfiniteUserList from './InfiniteUserList';
import { useState } from 'react';
import USERS from '../../../utils/tests/mocks/users';
import { act } from 'react-dom/test-utils';

describe('InfiniteUserList test suite', () => {
    function TestComponent() {
        const [containerRef, setContainerRef] = useState(null);
        const mainRef = (node) => {
            if (node) {
                setContainerRef(node);
            }
        };
        return <div data-testid="container" ref={mainRef}>
            <InfiniteUserList containerElt={containerRef}/>
        </div>;
    }

    const initialState = { user: { email: 'test@gmail.com', userId: 130, roleId: 1 }};

    beforeEach(() => {
        sessionStorage.clear();
    });

    it('should render with one page of users', async () => {
        render(<TestComponent/>, { preloadedState: initialState });

        await waitFor(() => {
            screen.getByRole('list', { name: 'Liste des utilisateurs' });
            const usersElts = screen.getAllByRole('listitem');
            expect(usersElts).toHaveLength(USERS.length / 2);
        });
    });

    it('should load more articles on scroll', async () => {
        render(<TestComponent/>, { preloadedState: initialState });

        await waitFor(() => {
            screen.getByRole('list', { name: 'Liste des utilisateurs' });
            const postElts = screen.getAllByRole('listitem');
            expect(postElts).toHaveLength(USERS.length / 2);
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
            const postElts = screen.getAllByRole('listitem');
            expect(postElts).toHaveLength(USERS.length);
        });
    });

    it('should navigate to the user\'s page', async () => {
        const user = userEvent.setup();
        render(undefined, { initialEntries: ['/reseau'], preloadedState: initialState });
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

    it('should redirect to the login page if the user is not authenticated when loading more posts', async () => {
        sessionStorage.setItem('authError', 'true');
        render(undefined, { preloadedState: initialState, initialEntries: ['/reseau']});

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
});