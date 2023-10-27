import UserHeader from './UserHeader';
import { screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
import userEvent from '../../utils/tests/user-event';
import '@testing-library/jest-dom';

describe('MainHeader component test suite', () => {
    const email = 'test@email.com';
    const mainContentId = 'main-content';
    const userId = 102;
    const props = {
        email,
        mainContentId,
        userId,
    };

    const preloadedState = {
        user: {
            userId,
            email,
            role: {
                roleId: 2,
                name: 'user',
            },
        },
    };
    const adminPreloadedState = {
        user: {
            userId: 1,
            email: 'admin@example.com',
            role: {
                roleId: 1,
                name: 'admin',
            },
        },
    };

    it('should render', () => {
        render(<UserHeader {...props}/>);
    });

    it('should render the right email', () => {
        render(<UserHeader {...props}/>);
        screen.getByRole('heading', { name: email, level: 1 });
    });

    it('should render the admin subtitle', () => {
        render(<UserHeader {...props} admin/>);
        screen.getByText('admin', { selector: 'p' });
    });

    it('should display the navigate back button to return to the list', async () => {
        const user = userEvent.setup();
        render(<UserHeader {...props} backArrow/>, { preloadedState });
        const backArrow = screen.getByRole('button', { name: 'Retourner à la liste' });

        await user.click(backArrow);
        expect(screen.getByTestId('search-path').textContent).toMatch('reseau');
    });

    it('should display the logout and theme buttons, and have a hidden link', async () => {
        const user = userEvent.setup();
        render(<UserHeader {...props} topLevelHeader/>);
        screen.getByRole('button', { name: 'Se déconnecter' });
        screen.getByRole('link', { name: 'Accéder directement au contenu' });

        let themeButton = screen.getByRole('button', { name: 'Passer au mode sombre' });
        await user.click(themeButton);
        themeButton = screen.getByRole('button', { name: 'Passer au mode clair' });
        expect(document.body).toHaveClass('dark');

        await user.click(themeButton);
        screen.getByRole('button', { name: 'Passer au mode sombre' });
        expect(document.body).toHaveClass('light');
    });

    it('should display the update user button and the delete user button', () => {
        render(<UserHeader {...props}/>, { preloadedState });
        screen.getByRole('button', { name: 'Modifier le profil' });
        screen.getByRole('button', { name: 'Supprimer le profil' });
    });

    it('should display the update role button and the delete user button', () => {
        render(<UserHeader {...props}/>, { preloadedState: adminPreloadedState });
        screen.getByRole('button', { name: 'Modifier le role de l\'utilisateur' });
        screen.getByRole('button', { name: 'Supprimer le profil' });
    });

    it('should display the actions in a menu when usong it as top level header', async () => {
        const user = userEvent.setup();
        render(<UserHeader {...props} topLevelHeader/>, { preloadedState });
        const moreActionsButton = screen.getByRole('button', { name: 'Plus d\'actions' });

        await user.click(moreActionsButton);
        screen.getByRole('menu', { name: /Actions/ });
        screen.getByRole('button', { name: 'Modifier le profil' });
        screen.getByRole('button', { name: 'Supprimer le profil' });
    });
});