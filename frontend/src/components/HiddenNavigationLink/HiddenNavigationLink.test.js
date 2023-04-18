import HiddenNavigationLink from './HiddenNavigationLink';
import { screen } from '@testing-library/react';
import { render } from '../../utils/test-wrapper';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('HiddenNavigationLink component test suite', () => {
    const label = 'Skip navigation';
    const target = '/test';

    it('should render', () => {
        render(<HiddenNavigationLink label={label} target={target} />);
    });

    it('should have the right label', () => {
        render(<HiddenNavigationLink label={label} target={target} />);
        screen.getByRole('link', { name: label });
    });

    it('should be accessible using the keyboard', async () => {
        const user = userEvent.setup();

        render(<HiddenNavigationLink label={label} target={target} />);
        const linkElt = screen.getByRole('link', { name: label });

        expect(linkElt).not.toHaveFocus();

        await user.tab();

        expect(linkElt).toHaveFocus();
    });
});