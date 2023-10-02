import '../../../utils/tests/window-mocks.js';
import IconButton from './IconButton.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '../../../utils/tests/user-event.js';
import fakeTimers from '../../../utils/tests/fake-timers.js';
import '@testing-library/jest-dom';

describe('IconButton component test suite', () => {
    const label = 'test';
    const additionnalClass = 'testClass';
    const name = 'favorite';

    it('should render', () => {
        render(<IconButton name={name} label={label}/>);
        const buttonElt = screen.getByRole('button', { name: label });
        expect(buttonElt).toHaveTextContent(name);
        expect(buttonElt).not.toHaveAttribute('aria-pressed');
    });

    it('should execute the action when clicked', async () => {
        const buttonAction = jest.fn(() => true);
        const user = userEvent.setup();
        render(<IconButton name={name} label={label} onClick={buttonAction}/>);

        const buttonElt = screen.getByRole('button');

        await user.click(buttonElt);

        expect(buttonAction).toHaveBeenCalled();
    });

    it('should be accessible using the keyboard', async () => {
        const buttonAction = jest.fn(() => true);
        const user = userEvent.setup();
        render(<IconButton name={name} label={label} onClick={buttonAction}/>);
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

    it('should have the initial focus', () => {
        render(<IconButton name={name} label={label} autoFocus={true}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toHaveFocus();
    });

    it('should be disabled', () => {
        render(<IconButton name={name} label={label} disabled={true}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toBeDisabled();
    });

    it('should be disabled and don\'t have the focus', () => {
        render(<IconButton name={name} label={label} disabled={true} autoFocus={true}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toBeDisabled();
        expect(buttonElt).not.toHaveFocus();
    });

    it('should have additionnal classnames on the button', () => {
        render(<IconButton name={name} label={label} className={additionnalClass}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toHaveClass(additionnalClass);
    });

    it('should trigger the ripple effect when activated', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({ advanceTimers: fakeTimers.rawAdvanceTimersByTime });
        render(<IconButton name={name} label={label} stateLayerColor={'primary'}/>);
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
        render(<IconButton name={name} label={label} disabled={true} stateLayerColor={'primary'}/>);
        const buttonElt = screen.getByRole('button');
        const stateLayer = buttonElt.querySelector('.stateLayer');

        expect(stateLayer).not.toHaveClass('ripple');

        await user.tab();
        expect(buttonElt).not.toHaveFocus();

        await user.click(buttonElt);
        expect(stateLayer).not.toHaveClass('ripple');
    });

    it('should trigger the ripple effect when activated', async () => {
        const user = userEvent.setup();
        render(<IconButton name={name} label={label}/>);
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

    it('should display a tooltip when hovered', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({ advanceTimers: fakeTimers.rawAdvanceTimersByTime });
        const { container } = render(<IconButton name={name} label={label}/>);
        const buttonElt = screen.getByRole('button', { name: label });

        await user.hover(buttonElt);
        fakeTimers.runAllTimers();
        const tooltipLabel = container.querySelector('.tooltip');
        expect(tooltipLabel).not.toBeNull();
        expect(tooltipLabel).toHaveTextContent(label);

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should add any other prop passed to it', () => {
        const description = 'lorem';
        render(<IconButton name={name} label={label} aria-describedby={description}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt.getAttribute('aria-describedby')).toBe(description);
    });

    it('should have all activated states', () => {
        render(<IconButton name={name} label={label}/>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).toHaveAttribute('data-state-focus', 'true');
        expect(buttonElt).toHaveAttribute('data-state-hover', 'true');
        expect(buttonElt).toHaveAttribute('data-state-active', 'true');
    });

    it('should give the right color to the state layer', () => {
        const { container } = render(<IconButton name={name} label={label} stateLayerColor="on-primary"/>);
        const stateLayer = container.querySelector('.stateLayer');

        expect(stateLayer).toHaveStyle('--state-layer-color: var(--color-on-primary)');
    });

    it('should be activated', () => {
        render(<IconButton name={name} label={label} toggle={true}/>);
        const buttonElt = screen.getByRole('button', { name: label });
        expect(buttonElt).toHaveAttribute('aria-pressed', 'true');
    });

    it('should not be activated', () => {
        render(<IconButton name={name} label={label} toggle={false}/>);
        const buttonElt = screen.getByRole('button', { name: label });
        expect(buttonElt).toHaveAttribute('aria-pressed', 'false');
    });
});