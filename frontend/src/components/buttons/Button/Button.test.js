import '../../../utils/tests/window-mocks.js';
import Button from './Button.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '../../../utils/tests/user-event.js';
import fakeTimers from '../../../utils/tests/fake-timers.js';
import '@testing-library/jest-dom';

describe('Button component test suite', () => {
    const label = 'test';
    const additionnalClass = 'testClass';

    it('should render', () => {
        render(<Button>{label}</Button>);
        screen.getByRole('button', { name: label });
    });

    it('should execute the action when clicked', async () => {
        const buttonAction = jest.fn(() => true);
        const user = userEvent.setup();
        render(<Button onClick={buttonAction}>{label}</Button>);

        const buttonElt = screen.getByRole('button');

        await user.click(buttonElt);

        expect(buttonAction).toHaveBeenCalled();
    });

    it('should have the initial focus', () => {
        render(<Button autoFocus={true}>{label}</Button>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toHaveFocus();
    });

    it('should be disabled', () => {
        render(<Button disabled={true}>{label}</Button>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toBeDisabled();
    });

    it("should be disabled and don't have the focus", () => {
        render(
            <Button disabled={true} autoFocus={true}>
                {label}
            </Button>,
        );
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toBeDisabled();
        expect(buttonElt).not.toHaveFocus();
    });

    it('should have an accessible label', () => {
        render(<Button label={label}>Random text</Button>);
        const buttonElt = screen.getByRole('button', { name: label });

        expect(buttonElt).not.toHaveTextContent(label);
    });

    it('should have additionnal classnames', () => {
        render(<Button classNames={additionnalClass}>{label}</Button>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toHaveClass(additionnalClass);
    });

    it('should be accessible using the keyboard', async () => {
        const buttonAction = jest.fn(() => true);
        const user = userEvent.setup();
        render(<Button onClick={buttonAction}>{label}</Button>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).not.toHaveFocus();

        await user.tab();
        expect(buttonElt).toHaveFocus();

        buttonAction.mockClear();
        await user.keyboard(' ');
        expect(buttonAction).toHaveBeenCalledTimes(1);

        buttonAction.mockClear();
        await user.keyboard('{Enter}');
        expect(buttonAction).toHaveBeenCalledTimes(1);
    });

    it('should trigger the ripple effect when activated', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({
            advanceTimers: fakeTimers.rawAdvanceTimersByTime,
        });
        render(<Button stateLayerColor={'primary'}>{label}</Button>);
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
        render(
            <Button disabled={true} stateLayerColor={'primary'}>
                {label}
            </Button>,
        );
        const buttonElt = screen.getByRole('button');
        const stateLayer = buttonElt.querySelector('.stateLayer');

        expect(stateLayer).not.toHaveClass('ripple');

        await user.tab();
        expect(buttonElt).not.toHaveFocus();

        await user.click(buttonElt);
        expect(stateLayer).not.toHaveClass('ripple');
    });

    it('should not trigger the ripple effect if no state layer color is given', async () => {
        const user = userEvent.setup();
        render(<Button>{label}</Button>);
        const buttonElt = screen.getByRole('button');
        const stateLayer = buttonElt.querySelector('.stateLayer');

        expect(stateLayer).not.toHaveClass('ripple');

        await user.tab();
        expect(buttonElt).toHaveFocus();

        await user.keyboard(' ');
        expect(stateLayer).not.toHaveClass('ripple');

        await user.keyboard('{Enter}');
        expect(stateLayer).not.toHaveClass('ripple');

        await user.click(buttonElt);
        expect(stateLayer).not.toHaveClass('ripple');
    });

    it('should add any other prop passed to it', () => {
        render(<Button aria-pressed={true}>{label}</Button>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt.getAttribute('aria-pressed')).toBe('true');
    });

    it('should have all activated states by default', () => {
        render(<Button>{label}</Button>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).toHaveAttribute('data-state-focus', 'true');
        expect(buttonElt).toHaveAttribute('data-state-hover', 'true');
        expect(buttonElt).toHaveAttribute('data-state-active', 'true');
    });

    it('should have all states disabled', () => {
        render(
            <Button hover={false} focus={false} active={false}>
                {label}
            </Button>,
        );
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).not.toHaveAttribute('data-state-focus');
        expect(buttonElt).not.toHaveAttribute('data-state-hover');
        expect(buttonElt).not.toHaveAttribute('data-state-active');
    });

    it('should give the right color to the state layer', () => {
        const { container } = render(
            <Button stateLayerColor="on-primary">{label}</Button>,
        );
        const stateLayer = container.querySelector('.stateLayer');

        expect(stateLayer).toHaveStyle(
            '--state-layer-color: var(--color-on-primary)',
        );
    });
});
