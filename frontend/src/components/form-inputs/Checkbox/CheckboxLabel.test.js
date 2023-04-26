import CheckboxLabel from './CheckboxLabel.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('CheckboxLabel component test suite', () => {
    const label = 'test';

    it('should render', () => {
        render(<CheckboxLabel label={label}/>);
    });

    it('should be linked to the checkbox', () => {
        render(<CheckboxLabel isChecked={true} label={label}/>);
        screen.getByRole('checkbox', { name: label });
    });

    it('should render with the checkbox in a checked state', () => {
        render(<CheckboxLabel isChecked={true} label={label}/>);
        screen.getByRole('checkbox', { checked: true, name: label });
    });

    it('should change the checked state and execute the action when clicked', async () => {
        const inputHandle = jest.fn(() => true);
        const user = userEvent.setup();

        render(<CheckboxLabel onChange={inputHandle} label={label}/>);
        const labelElt = screen.getByText(label);
        const checkbox = screen.getByRole('checkbox', { name: label });

        expect(checkbox).not.toBeChecked();

        await user.click(labelElt);

        expect(checkbox).toBeChecked();
        expect(inputHandle).toHaveBeenCalled();
    });

    it('should have the initial focus', () => {
        render(<CheckboxLabel hasInitialFocus={true} label={label}/>);
        const checkbox = screen.getByRole('checkbox', { name: label });
        expect(checkbox).toHaveFocus();
    });

    it('should be disabled', () => {
        render(<CheckboxLabel isDisabled={true} label={label}/>);
        const checkbox = screen.getByRole('checkbox', { name: label });
        expect(checkbox).toBeDisabled();
    });
});