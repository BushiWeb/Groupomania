import UserHeader from './UserHeader';
import { screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('MainHeader component test suite', () => {
    const heading = 'test@email.com', subheading = 'admin';

    it('should render', () => {
        render(<UserHeader heading={heading}/>);
    });

    it('should render the right title and subtitle', () => {
        render(<UserHeader heading={heading} subheading={subheading}/>);
        screen.getByRole('heading', { name: heading, level: 1 });
        screen.getByText(subheading, { selector: 'p' });
    });

    it('should display the update user button', async () => {
        const user = userEvent.setup();
        render(<UserHeader heading={heading} updateProfile={true}/>);
        const updateUserButton = screen.getByRole('button', { name: 'Mettre à jour le profil' });

        await user.click(updateUserButton);
    });

    it('should display the delete user button', async () => {
        const user = userEvent.setup();
        render(<UserHeader heading={heading} deleteUser={true}/>);
        const deleteUserButton = screen.getByRole('button', { name: 'Supprimer le compte' });

        await user.click(deleteUserButton);
    });

    it('should display the update user role button', async () => {
        const user = userEvent.setup();
        render(<UserHeader heading={heading} updateRole={true}/>);
        const updateRoleButton = screen.getByRole('button', { name: 'Modifier le rôle de l\'utilisateur' });

        await user.click(updateRoleButton);
    });

    it('should return to the previous page', async () => {
        const user = userEvent.setup();
        render(<UserHeader heading={heading}/>, { initialEntries: ['/', 'test']});
        const navigationButton = screen.getByRole('button', { name: 'Page précédente' });

        await user.click(navigationButton);
        const path = screen.getByTestId('search-path').textContent;
        expect(path).toBe('/');
    });

    it('should focus the elements in the right order', async () => {
        const user = userEvent.setup();
        render(<UserHeader heading={heading} updateRole={true} updateProfile={true} deleteUser={true}/>);
        const navigationButton = screen.getByRole('button', { name: 'Page précédente' });
        const updateUserButton = screen.getByRole('button', { name: 'Mettre à jour le profil' });
        const deleteUserButton = screen.getByRole('button', { name: 'Supprimer le compte' });
        const updateRoleButton = screen.getByRole('button', { name: 'Modifier le rôle de l\'utilisateur' });

        await user.tab();
        expect(navigationButton).toHaveFocus();

        await user.tab();
        expect(updateUserButton).toHaveFocus();

        await user.tab();
        expect(deleteUserButton).toHaveFocus();

        await user.tab();
        expect(updateRoleButton).toHaveFocus();
    });
});