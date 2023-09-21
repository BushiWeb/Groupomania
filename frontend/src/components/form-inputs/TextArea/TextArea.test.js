import '../../../utils/tests/window-mocks.js';
import TextArea from './TextArea.jsx';
import { getByLabelText, screen } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '../../../utils/tests/user-event.js';
import '@testing-library/jest-dom';

describe('Textnput component test suite', () => {
    const props = {
        label: 'test label',
        onChange: jest.fn(),
    };

    afterEach(() => {
        props.onChange.mockClear();
    });

    it('should render the component', () => {
        render(<TextArea {...props}/>);
        screen.getByRole('textbox', { name: props.label });
    });

    it('should have the right value', () => {
        const value = 'input value';
        render(<TextArea {...props} value={value}/>);
        const textInputElt = screen.getByRole('textbox', { name: props.label });
        expect(textInputElt).toHaveValue(value);
    });

    it('should execute the onChange function when updated', async () => {
        const user = userEvent.setup();
        render(<TextArea {...props}/>);
        const textInputElt = screen.getByRole('textbox', { name: props.label });

        await user.click(textInputElt);
        await user.keyboard('ab');

        expect(props.onChange).toHaveBeenCalledTimes(2);
    });

    it('should have a support text, which describes the input', () => {
        const supportText = 'support text';
        render(<TextArea {...props} supportText={supportText}/>);
        const supportTextElt = screen.getByText(supportText);
        const inputElt = screen.getByLabelText(props.label);

        expect(inputElt).toHaveAttribute('aria-describedby', supportTextElt.id);
    });

    it('should have an error message and the alert role', () => {
        const errorMessage = 'error message';
        const { container } = render(<TextArea {...props} errorMessage={errorMessage}/>);
        const errorMessageText = screen.getByText(errorMessage);
        const errorMessageElt = container.querySelector('.supportTextWithIcon');
        getByLabelText(errorMessageElt, 'Error');

        const widgetElt = screen.getByRole('alert');
        expect(widgetElt).toHaveClass('root');

        const inputElt = screen.getByLabelText(props.label);
        expect(inputElt).toHaveAttribute('aria-describedby', errorMessageText.id);
    });

    it('should choose the error message over the support text', () => {
        const errorMessage = 'error message';
        const supportText = 'support text';
        render(<TextArea {...props} errorMessage={errorMessage} supportText={supportText}/>);
        const errorMessageElt = screen.getByText(errorMessage);
        screen.getByLabelText('Error');
        const widgetElt = screen.getByRole('alert');
        const supportTextElt = screen.queryByText(supportText);

        expect(widgetElt).toHaveClass('root');
        expect(supportTextElt).toBeNull();

        const inputElt = screen.getByLabelText(props.label);
        expect(inputElt).toHaveAttribute('aria-describedby', errorMessageElt.id);
    });

    it('should be required and have an asterix next to the label when required', () => {
        render(<TextArea {...props} required/>);
        const textInputElt = screen.getByRole('textbox', { name: props.label + '*' });
        screen.getByText('*requis', { exact: false });
        expect(textInputElt).toBeRequired();
    });

    it('should be disabled', () => {
        render(<TextArea {...props} disabled/>);
        const inputElt = screen.getByRole('textbox', { name: props.label });

        expect(inputElt).toBeDisabled();
    });

    it('should be accessible using the keyboard', async () => {
        const user = userEvent.setup();
        render(<TextArea {...props}/>);
        const textInputElt = screen.getByRole('textbox', { name: props.label });

        await user.tab();

        expect(textInputElt).toHaveFocus();
    });

    it('should be focusable using the label text', async () => {
        const user = userEvent.setup();
        render(<TextArea {...props}/>);
        const textInputElt = screen.getByRole('textbox', { name: props.label });
        const labelElt = screen.getByText(props.label);

        await user.click(labelElt);

        expect(textInputElt).toHaveFocus();
    });

    it('should have a placeholder', () => {
        const placeholder = 'test';
        render(<TextArea {...props} placeholder={placeholder}/>);
        const inputElt = screen.getByRole('textbox', { name: props.label });

        expect(inputElt).toHaveProperty('placeholder', placeholder);
    });
});