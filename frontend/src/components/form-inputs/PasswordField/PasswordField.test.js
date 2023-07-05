import '../../../utils/tests/window-mocks.js';
import PasswordField from './PasswordField.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '../../../utils/tests/user-event.js';
import '@testing-library/jest-dom';

describe('Checkbox component test suite', () => {
    const props = {
        label: 'test label',
        onChange: jest.fn(),
    };

    afterEach(() => {
        props.onChange.mockClear();
    });

    it('should render the component', () => {
        render(<PasswordField {...props}/>);
        screen.getByLabelText(props.label);
    });

    it('should have the right value', () => {
        const value = 'input value';
        render(<PasswordField {...props} value={value}/>);
        const passwordInputElt = screen.getByLabelText(props.label);
        expect(passwordInputElt).toHaveValue(value);
    });

    it('should execute the onChange function when updated', async () => {
        const user = userEvent.setup();
        render(<PasswordField {...props}/>);
        const passwordInputElt = screen.getByLabelText(props.label);

        await user.click(passwordInputElt);
        await user.keyboard('ab');

        expect(props.onChange).toHaveBeenCalledTimes(2);
    });

    it('should have a support text', () => {
        const supportText = 'support text';
        render(<PasswordField {...props} supportText={supportText}/>);
        screen.getByText(supportText);
    });

    it('should be have an error message', () => {
        const errorMessage = 'error message';
        render(<PasswordField {...props} errorMessage={errorMessage}/>);
        screen.getByText(errorMessage);
    });

    it('should have a leading icon', () => {
        const leadingIcon = {
            name: 'favorite',
            label: 'trailing icon',
        };
        render(<PasswordField {...props} leadingIcon={leadingIcon}/>);
        const leadingIconElt = screen.getByLabelText(leadingIcon.label);

        expect(leadingIconElt).toHaveTextContent(leadingIcon.name);
    });

    it('should have a trailing icon button to show the password', async () => {
        const user = userEvent.setup();
        render(<PasswordField {...props}/>);
        const passwordInputElt = screen.getByLabelText(props.label);
        let trailingIconButtonElt = screen.getByRole('button', { name: /Montrer/ });
        expect(trailingIconButtonElt).toHaveTextContent('visibility');
        expect(passwordInputElt).toHaveAttribute('type', 'password');

        await user.click(trailingIconButtonElt);
        trailingIconButtonElt = screen.getByRole('button', { name: /Cacher/ });
        expect(trailingIconButtonElt).toHaveTextContent('visibility_off');
        expect(passwordInputElt).toHaveAttribute('type', 'text');

        await user.click(trailingIconButtonElt);
        trailingIconButtonElt = screen.getByRole('button', { name: /Montrer/ });
        expect(trailingIconButtonElt).toHaveTextContent('visibility');
        expect(passwordInputElt).toHaveAttribute('type', 'password');
    });

    it('should give additional props to the input element', () => {
        render(<PasswordField {...props} disabled/>);
        const passwordInputElt = screen.getByLabelText(props.label);
        expect(passwordInputElt).toBeDisabled();
    });

    it('should have additional classnames', () => {
        const className = 'testClass';
        const { container } = render(<PasswordField {...props} className={className}/>);
        const widgetElt = container.querySelector('.textField');

        expect(widgetElt).toHaveClass(className);
    });
});