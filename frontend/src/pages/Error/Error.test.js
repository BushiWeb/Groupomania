import {
    getByLabelText, getByRole, getByText, queryByRole, screen, waitFor,
} from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
import userEvent from '../../utils/tests/user-event';
import '@testing-library/jest-dom';
import USERS from '../../utils/tests/mocks/users';
import { changeViewportWidth } from '../../utils/tests/changeViewportWidth';
import POSTS from '../../utils/tests/mocks/posts';
import User from '../User/User';

beforeEach(() => {
    sessionStorage.clear();
});

describe('Error page test suite', () => {
    it('should render the 404 error page when navigating to an unknown page', () => {
        render(undefined, { initialEntries: ['/unknown']});
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Nous n\'avons pas trouvé cette page');
    });

    it('should navigate to home page from the 404 error', async () => {
        const user = userEvent.setup();
        render(undefined, { initialEntries: ['/unknown'], preloadedState: { user: { email: 'test@gmail.com' }}});
        const buttonElt = screen.getByRole('link', { name: 'Retourner à la page d\'accueil' });
        await user.click(buttonElt);
        expect(screen.getByTestId('search-path')).toHaveTextContent('/');
    });

    it('should render the error page', () => {
        render(undefined, { initialEntries: ['/error']});
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Une situation inattendue s\'est produite');
    });

    it('should navigate to the previous page from the error', async () => {
        const user = userEvent.setup();
        const previousPage = '/test';
        render(undefined, { initialEntries: [previousPage, '/error']});
        const buttonElt = screen.getByRole('link', { name: 'Retourner à la page précédente' });
        await user.click(buttonElt);
        expect(screen.getByTestId('search-path')).toHaveTextContent(previousPage);
    });

    it('should navigate to home page from the error', async () => {
        const user = userEvent.setup();
        render(undefined, { initialEntries: ['/error'], preloadedState: { user: { email: 'test@gmail.com' }}});
        const buttonElt = screen.getByRole('link', { name: 'Je préfère revenir à la page d\'accueil' });
        await user.click(buttonElt);
        expect(screen.getByTestId('search-path')).toHaveTextContent('/');
    });
});