import '../../../utils/tests/window-mocks.js';
import Checkbox from './Checkbox.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '../../../utils/tests/user-event.js';
import fakeTimers from '../../../utils/tests/fake-timers.js';
import '@testing-library/jest-dom';

describe('Checkbox component test suite', () => {
    const name = 'text check';
    const label = 'test label';
    const moreClass = 'class test';
    const inputHandle = jest.fn(() => true);

    it('should render', () => {
        render(<Checkbox name={name} onChange={inputHandle}/>);
        const checkboxElt = screen.getByRole('checkbox');
        expect(checkboxElt).toHaveAttribute('name', name);
        expect(checkboxElt).not.toBeChecked();
    });

    it('should render in a checked state', () => {
        render(<Checkbox name={name} checked={true} onChange={inputHandle}/>);
        const checkboxElt = screen.getByRole('checkbox');
        expect(checkboxElt).toBeChecked();
    });

    it('should execute the action when clicked', async () => {
        const user = userEvent.setup();

        render(<Checkbox name={name} onChange={inputHandle}/>);
        const checkbox = screen.getByRole('checkbox');

        await user.click(checkbox);
        expect(inputHandle).toHaveBeenCalled();

        await user.click(checkbox);
        expect(inputHandle).toHaveBeenCalled();
    });

    it('should has the initial focus', () => {
        render(<Checkbox name={name} autoFocus={true} onChange={inputHandle}/>);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveFocus();
    });

    it('should be disabled', () => {
        render(<Checkbox name={name} disabled={true} onChange={inputHandle}/>);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
    });

    it('should be disabled and checked', () => {
        render(<Checkbox name={name} disabled={true} checked={true} onChange={inputHandle}/>);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
        expect(checkbox).toBeChecked();
    });

    it('should be disabled and not focused', () => {
        render(<Checkbox name={name} autoFocus={true} disabled={true} onChange={inputHandle}/>);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
        expect(checkbox).not.toHaveFocus();
    });

    it('should be accessible using keyboard navigation', async () => {
        const user = userEvent.setup();

        render(<Checkbox name={name} onChange={inputHandle}/>);
        const checkbox = screen.getByRole('checkbox');

        expect(checkbox).not.toBeChecked();
        expect(checkbox).not.toHaveFocus();

        await user.tab();

        expect(checkbox).toHaveFocus();

        await user.keyboard(' ');
        expect(inputHandle).toHaveBeenCalled();
    });

    it('should trigger the ripple effect when activated', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({ advanceTimers: fakeTimers.rawAdvanceTimersByTime });
        const { container } = render(<Checkbox name={name} onChange={inputHandle}/>);
        const checkboxElt = screen.getByRole('checkbox');
        const stateLayerElt = container.querySelector('.stateLayer');

        expect(checkboxElt).not.toHaveClass('ripple');

        await user.tab();
        expect(checkboxElt).toHaveFocus();

        await user.keyboard(' ');
        expect(stateLayerElt).toHaveClass('ripple');
        fakeTimers.runAllTimers();
        expect(stateLayerElt).not.toHaveClass('ripple');

        await user.click(checkboxElt);
        expect(stateLayerElt).toHaveClass('ripple');
        fakeTimers.runAllTimers();
        expect(stateLayerElt).not.toHaveClass('ripple');

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should not have the ripple effect when disabled', async () => {
        const user = userEvent.setup();
        const { container } = render(<Checkbox name={name} disabled={true} onChange={inputHandle}/>);
        const checkboxElt = screen.getByRole('checkbox');
        const stateLayerElt = container.querySelector('.stateLayer');

        expect(stateLayerElt).not.toHaveClass('ripple');

        await user.click(checkboxElt);
        expect(stateLayerElt).not.toHaveClass('ripple');
    });

    it('should have a label and a tooltip', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({ advanceTimers: fakeTimers.rawAdvanceTimersByTime });
        const { container } = render(<Checkbox name={name} label={label} onChange={inputHandle}/>);
        const checkboxElt = screen.getByRole('checkbox', { name: label });

        await user.hover(checkboxElt);
        const tooltipLabel = container.querySelector('.tooltip');
        expect(tooltipLabel).not.toBeNull();
        expect(tooltipLabel).toHaveTextContent(label);

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should have additionnal classnames', () => {
        const { container } = render(<Checkbox name={name} className={moreClass} onChange={inputHandle}/>);
        const containerElt = container.querySelector('.checkboxContainer');

        expect(containerElt).toHaveClass(moreClass);
    });

    it('should have additionnal classnames on tooltip', () => {
        const { container } = render(<Checkbox
            name={name}
            className={moreClass}
            label={label}
            onChange={inputHandle}
        />);
        const tooltipElt = container.querySelector('.tooltipContainer');

        expect(tooltipElt).toHaveClass(moreClass);
    });

    it('should have all states activated', () => {
        const { container } = render(<Checkbox name={name} label={label} onChange={inputHandle}/>);
        const stateLayerElt = container.querySelector('.interactiveElement');

        expect(stateLayerElt).toHaveAttribute('data-state-hover', 'true');
        expect(stateLayerElt).toHaveAttribute('data-state-focus', 'true');
        expect(stateLayerElt).toHaveAttribute('data-state-active', 'true');
    });

    it('should have no state activated if disabled', () => {
        const { container } = render(<Checkbox name={name} label={label} disabled={true} onChange={inputHandle}/>);
        const interactiveElt = container.querySelector('.interactiveElement');

        expect(interactiveElt).not.toHaveAttribute('data-state-hover', 'true');
        expect(interactiveElt).not.toHaveAttribute('data-state-focus', 'true');
        expect(interactiveElt).not.toHaveAttribute('data-state-active', 'true');
    });

    it('should have more props added', () => {
        render(<Checkbox name={name} label={label} aria-describedby="lorem" onChange={inputHandle}/>);
        const checkboxElt = screen.getByRole('checkbox');

        expect(checkboxElt).toHaveAttribute('aria-describedby', 'lorem');
    });
});