import '../../../utils/tests/window-mocks.js';
import CheckboxLabel from './CheckboxLabel.jsx';
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
        render(
            <CheckboxLabel name={name} onChange={inputHandle}>
                {label}
            </CheckboxLabel>,
        );
        const checkboxElt = screen.getByRole('checkbox', { name: label });
        expect(checkboxElt).toHaveAttribute('name', name);
        expect(checkboxElt).not.toBeChecked();
    });

    it('should render in a checked state', () => {
        render(
            <CheckboxLabel name={name} checked={true} onChange={inputHandle}>
                {label}
            </CheckboxLabel>,
        );
        const checkboxElt = screen.getByRole('checkbox');
        expect(checkboxElt).toBeChecked();
    });

    it('should execute the action when clicked', async () => {
        const user = userEvent.setup();

        render(
            <CheckboxLabel name={name} onChange={inputHandle}>
                {label}
            </CheckboxLabel>,
        );
        const checkbox = screen.getByRole('checkbox');
        const labelElt = screen.getByText(label);

        await user.click(checkbox);
        expect(inputHandle).toHaveBeenCalled();

        await user.click(labelElt);
        expect(inputHandle).toHaveBeenCalled();
    });

    it('should has the initial focus', () => {
        render(
            <CheckboxLabel name={name} autoFocus={true} onChange={inputHandle}>
                {label}
            </CheckboxLabel>,
        );
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveFocus();
    });

    it('should be disabled', () => {
        render(
            <CheckboxLabel name={name} disabled={true} onChange={inputHandle}>
                {label}
            </CheckboxLabel>,
        );
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
    });

    it('should be disabled and checked', () => {
        render(
            <CheckboxLabel
                name={name}
                disabled={true}
                checked={true}
                onChange={inputHandle}
            >
                {label}
            </CheckboxLabel>,
        );
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
        expect(checkbox).toBeChecked();
    });

    it('should be disabled and not focused', () => {
        render(
            <CheckboxLabel
                name={name}
                autoFocus={true}
                disabled={true}
                onChange={inputHandle}
            >
                {label}
            </CheckboxLabel>,
        );
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
        expect(checkbox).not.toHaveFocus();
    });

    it('should be accessible using keyboard navigation', async () => {
        const user = userEvent.setup();

        render(
            <CheckboxLabel name={name} onChange={inputHandle}>
                {label}
            </CheckboxLabel>,
        );
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
        const user = userEvent.setup({
            advanceTimers: fakeTimers.rawAdvanceTimersByTime,
        });
        const { container } = render(
            <CheckboxLabel name={name} onChange={inputHandle}>
                {label}
            </CheckboxLabel>,
        );
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
        const { container } = render(
            <CheckboxLabel name={name} disabled={true} onChange={inputHandle}>
                {label}
            </CheckboxLabel>,
        );
        const checkboxElt = screen.getByRole('checkbox');
        const stateLayerElt = container.querySelector('.stateLayer');

        expect(stateLayerElt).not.toHaveClass('ripple');

        await user.click(checkboxElt);
        expect(stateLayerElt).not.toHaveClass('ripple');
    });

    it('should not have the ripple effect when clicking on the text', async () => {
        const user = userEvent.setup();
        const { container } = render(
            <CheckboxLabel name={name} onChange={inputHandle}>
                {label}
            </CheckboxLabel>,
        );
        const labelElt = screen.getByText(label);
        const stateLayerElt = container.querySelector('.stateLayer');

        expect(stateLayerElt).not.toHaveClass('ripple');

        await user.click(labelElt);
        expect(stateLayerElt).not.toHaveClass('ripple');
    });

    it('should have additionnal classnames', () => {
        render(
            <CheckboxLabel
                name={name}
                className={moreClass}
                onChange={inputHandle}
            >
                {label}
            </CheckboxLabel>,
        );
        const labelElt = screen.getByText(label);

        expect(labelElt).toHaveClass(moreClass);
    });

    it('should have more props added', () => {
        render(
            <CheckboxLabel
                name={name}
                label={label}
                aria-describedby="lorem"
                onChange={inputHandle}
            >
                {label}
            </CheckboxLabel>,
        );
        const checkboxElt = screen.getByRole('checkbox');

        expect(checkboxElt).toHaveAttribute('aria-describedby', 'lorem');
    });
});
