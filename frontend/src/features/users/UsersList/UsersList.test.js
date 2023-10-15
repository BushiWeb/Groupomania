import { screen } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '../../../utils/tests/user-event.js';
import '@testing-library/jest-dom';
import UsersList from './UsersList.jsx';
import USERS from '../../../utils/tests/mocks/users.js';

describe('UsersList component test suite', () => {
    it('should render', () => {
        render(<UsersList users={USERS}/>);

        const usersElts = screen.getAllByRole('listitem');
        expect(usersElts).toHaveLength(USERS.length);

        const listElt = screen.getByRole('list');
        expect(listElt).toHaveAttribute('aria-busy', 'false');
    });

    it('should be identified as busy', () => {
        render(<UsersList users={USERS} busy/>);
        const listElt = screen.getByRole('list');
        screen.getByLabelText(/Chargement/);

        expect(listElt).toHaveAttribute('aria-busy', 'true');
    });

    it('should be navigable using the keyboard', async () => {
        const user = userEvent.setup();
        render(<UsersList users={USERS}/>);
        const usersElts = screen.getAllByRole('link');

        await user.tab();
        expect(usersElts[0]).toHaveFocus();

        // Focus previous and next elements with arrow keys
        await user.keyboard('{ArrowDown}');
        expect(usersElts[1]).toHaveFocus();
        await user.keyboard('{ArrowUp}');
        expect(usersElts[0]).toHaveFocus();

        // Focus previous and next elements with page keys
        await user.keyboard('{PageDown}');
        expect(usersElts[1]).toHaveFocus();
        await user.keyboard('{PageUp}');
        expect(usersElts[0]).toHaveFocus();

        // Focus last element
        await user.keyboard('{Control>}{End}{/Control}');
        expect(usersElts.at(-1)).toHaveFocus();

        // No possible navigation after the last element
        await user.keyboard('{ArrowDown}');
        expect(usersElts.at(-1)).toHaveFocus();
        await user.keyboard('{PageDown}');
        expect(usersElts.at(-1)).toHaveFocus();

        // Focus first element
        await user.keyboard('{Control>}{Home}{/Control}');
        expect(usersElts[0]).toHaveFocus();

        // No possible navigation before the first element
        await user.keyboard('{ArrowUp}');
        expect(usersElts[0]).toHaveFocus();
        await user.keyboard('{PageUp}');
        expect(usersElts[0]).toHaveFocus();
    });
});