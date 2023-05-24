import HiddenNavigationLink from './HiddenNavigationLink';
import { screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
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

    it('should trigger the animation when focused and blurred', async () => {
        jest.useFakeTimers();
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
        render(<HiddenNavigationLink label={label} target={target} />);
        const linkElt = screen.getByRole('link', { name: label });

        expect(linkElt).toHaveClass('sr-only');
        expect(linkElt).not.toHaveClass('exit-within-bounds');
        expect(linkElt).not.toHaveClass('enter-within-bounds');
        expect(linkElt).not.toHaveClass('origin-left');

        await user.tab();
        expect(linkElt).toHaveFocus();
        expect(linkElt).not.toHaveClass('sr-only');
        expect(linkElt).not.toHaveClass('exit-within-bounds');
        expect(linkElt).toHaveClass('enter-within-bounds');
        expect(linkElt).toHaveClass('origin-left');

        await user.tab();
        expect(linkElt).not.toHaveFocus();
        expect(linkElt).not.toHaveClass('sr-only');
        expect(linkElt).toHaveClass('exit-within-bounds');
        expect(linkElt).not.toHaveClass('enter-within-bounds');
        expect(linkElt).toHaveClass('origin-left');

        jest.runAllTimers();
        expect(linkElt).toHaveClass('sr-only');
        expect(linkElt).toHaveClass('exit-within-bounds');
        expect(linkElt).not.toHaveClass('enter-within-bounds');
        expect(linkElt).toHaveClass('origin-left');

        jest.useRealTimers();
    });
});