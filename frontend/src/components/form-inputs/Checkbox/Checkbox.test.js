import Checkbox from './Checkbox.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-wrapper.js';
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
});