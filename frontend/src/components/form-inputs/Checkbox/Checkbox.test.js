import '../../../utils/tests/window-mocks.js';
import Checkbox from './Checkbox.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Checkbox component test suite', () => {
    it('should render', () => {
        render(<Checkbox/>);
    });

    it('should render in a checked state', () => {
        render(<Checkbox isChecked={true}/>);
        screen.getByRole('checkbox', { checked: true });
    });

    it('should change the checked state and execute the action when clicked', async () => {
        const inputHandle = jest.fn(() => true);
        const user = userEvent.setup();

        render(<Checkbox onChange={inputHandle}/>);
        const checkbox = screen.getByRole('checkbox');

        expect(checkbox).not.toBeChecked();

        await user.click(checkbox);

        expect(checkbox).toBeChecked();
        expect(inputHandle).toHaveBeenCalled();

        await user.click(checkbox);

        expect(checkbox).not.toBeChecked();
        expect(inputHandle).toHaveBeenCalled();
    });

    it('should has the initial focus', () => {
        render(<Checkbox hasInitialFocus={true}/>);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveFocus();
    });

    it('should be disabled', () => {
        render(<Checkbox isDisabled={true}/>);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
    });

    it('should be disabled and checked', () => {
        render(<Checkbox isDisabled={true} isChecked={true}/>);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
        expect(checkbox).toBeChecked();
    });

    it('should be disabled and not focused', () => {
        render(<Checkbox isDisabled={true} hasInitialFocus={true}/>);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
        expect(checkbox).not.toHaveFocus();
    });

    it('should be accessible using keyboard navigation', async () => {
        const inputHandle = jest.fn(() => true);
        const user = userEvent.setup();

        render(<Checkbox onChange={inputHandle}/>);
        const checkbox = screen.getByRole('checkbox');

        expect(checkbox).not.toBeChecked();
        expect(checkbox).not.toHaveFocus();

        await user.tab();

        expect(checkbox).toHaveFocus();

        await user.keyboard(' ');
        expect(checkbox).toBeChecked();
        expect(inputHandle).toHaveBeenCalled();
    });

    it('should trigger the ripple effect when activated', async () => {
        jest.useFakeTimers();
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
        render(<Checkbox />);
        const checkboxElt = screen.getByRole('checkbox');

        expect(checkboxElt).not.toHaveClass('ripple');

        await user.tab();
        expect(checkboxElt).toHaveFocus();

        await user.keyboard(' ');
        expect(checkboxElt).toHaveClass('ripple');
        jest.runAllTimers();
        expect(checkboxElt).not.toHaveClass('ripple');

        await user.click(checkboxElt);
        expect(checkboxElt).toHaveClass('ripple');
        jest.runAllTimers();
        expect(checkboxElt).not.toHaveClass('ripple');

        jest.useRealTimers();
    });
});