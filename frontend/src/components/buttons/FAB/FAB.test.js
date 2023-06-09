import '../../../utils/tests/window-mocks.js';
import FAB from './FAB.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '../../../utils/tests/user-event.js';
import fakeTimers from '../../../utils/tests/fake-timers.js';
import '@testing-library/jest-dom';

describe('FAB component test suite', () => {
    const label = 'test';

    it('should render', () => {
        render(<FAB>{label}</FAB>);
        screen.getByRole('button', { name: label });
    });

    it('should execute the action when clicked', async () => {
        const buttonAction = jest.fn(() => true);
        const user = userEvent.setup();
        render(<FAB onClick={buttonAction}>{label}</FAB>);

        const buttonElt = screen.getByRole('button');

        await user.click(buttonElt);

        expect(buttonAction).toHaveBeenCalled();
    });

    it('should have the initial focus', () => {
        render(<FAB autoFocus={true}>{label}</FAB>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toHaveFocus();
    });

    it('should have an accessible label', () => {
        render(<FAB label={label}>Random text</FAB>);
        const buttonElt = screen.getByRole('button', { name: label });

        expect(buttonElt).not.toHaveTextContent(label);
    });

    it('should be accessible using the keyboard', async () => {
        const buttonAction = jest.fn(() => true);
        const user = userEvent.setup();
        render(<FAB onClick={buttonAction}>{label}</FAB>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).not.toHaveFocus();

        await user.tab();
        expect(buttonElt).toHaveFocus();

        buttonAction.mockClear();
        await user.keyboard(' ');
        expect(buttonAction).toHaveBeenCalled();

        buttonAction.mockClear();
        await user.keyboard('{Enter}');
        expect(buttonAction).toHaveBeenCalled();
    });

    it('should trigger the ripple effect when activated', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({ advanceTimers: fakeTimers.rawAdvanceTimersByTime });
        render(<FAB>{label}</FAB>);
        const buttonElt = screen.getByRole('button');
        const stateLayer = buttonElt.querySelector('.stateLayer');

        expect(stateLayer).not.toHaveClass('ripple');

        await user.tab();
        expect(buttonElt).toHaveFocus();

        await user.keyboard(' ');
        expect(stateLayer).toHaveClass('ripple');
        fakeTimers.runAllTimers();
        expect(stateLayer).not.toHaveClass('ripple');


        await user.keyboard('{Enter}');
        expect(stateLayer).toHaveClass('ripple');
        fakeTimers.runAllTimers();
        expect(stateLayer).not.toHaveClass('ripple');

        await user.click(buttonElt);
        expect(stateLayer).toHaveClass('ripple');
        fakeTimers.runAllTimers();
        expect(stateLayer).not.toHaveClass('ripple');

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should not trigger the ripple effect if disabled', async () => {
        const user = userEvent.setup();
        render(<FAB disabled={true}>{label}</FAB>);
        const buttonElt = screen.getByRole('button');
        const stateLayer = buttonElt.querySelector('.stateLayer');

        expect(stateLayer).not.toHaveClass('ripple');

        await user.tab();
        expect(buttonElt).not.toHaveFocus();

        await user.click(buttonElt);
        expect(stateLayer).not.toHaveClass('ripple');
    });

    it('should add any other prop passed to it', () => {
        render(<FAB aria-pressed={true}>{label}</FAB>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt.getAttribute('aria-pressed')).toBe('true');
    });

    it('should have all activated states', () => {
        render(<FAB>{label}</FAB>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).toHaveAttribute('data-state-focus', 'true');
        expect(buttonElt).toHaveAttribute('data-state-hover', 'true');
        expect(buttonElt).toHaveAttribute('data-state-active', 'true');
    });

    it('should have an icon', () => {
        const { container } = render(<FAB icon="favorite">{label}</FAB>);
        const iconElt = container.querySelector('span.material-icon');

        expect(iconElt).not.toBeNull();
    });

    it('should be a floating by default', () => {
        render(<FAB>{label}</FAB>);
        const buttonElt = screen.getByRole('button', { name: label });

        expect(buttonElt).toHaveClass('floating');
    });

    it('should not be floating', () => {
        render(<FAB floating={false}>{label}</FAB>);
        const buttonElt = screen.getByRole('button', { name: label });

        expect(buttonElt).not.toHaveClass('floating');
    });
});