import Button from './Button.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-wrapper.js';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Button component test suite', () => {
    const label = 'test';
    const content = 'button content';
    const additionnalClass = 'testClass';

    it('should render', () => {
        render(<Button/>);
    });

    it('should execute the action when clicked', async () => {
        const buttonAction = jest.fn(() => true);
        const user = userEvent.setup();
        render(<Button action={buttonAction}/>);

        const buttonElt = screen.getByRole('button');

        await user.click(buttonElt);

        expect(buttonAction).toHaveBeenCalled();
    });

    it('should have the initial focus', () => {
        render(<Button hasInitialFocus={true}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toHaveFocus();
    });

    it('should be disabled', () => {
        render(<Button isDisabled={true}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toBeDisabled();
    });

    it('should be disabled and don\'t have the focus', () => {
        render(<Button isDisabled={true} hasInitialFocus={true}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toBeDisabled();
        expect(buttonElt).not.toHaveFocus();
    });

    it('should use the label as its content', () => {
        render(<Button label={label}/>);
        const buttonElt = screen.getByRole('button', { name: label });
        expect(buttonElt).toHaveTextContent(label);
    });

    it('should use the label as a label and its children as its content', () => {
        render(<Button label={label}>{content}</Button>);
        const buttonElt = screen.getByRole('button', { name: label });
        expect(buttonElt).toHaveTextContent(content);
    });

    it('should use the its children as a label', () => {
        render(<Button>{content}</Button>);
        const buttonElt = screen.getByRole('button', { name: content });
        expect(buttonElt).toHaveTextContent(content);
    });

    it('should have additionnal classnames', () => {
        render(<Button classNames={additionnalClass}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toHaveClass(additionnalClass);
    });

    it('should be accessible using the keyboard', async () => {
        const buttonAction = jest.fn(() => true);
        const user = userEvent.setup();
        render(<Button action={buttonAction}/>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).not.toHaveFocus();

        await user.tab();
        expect(buttonElt).toHaveFocus();

        await user.keyboard(' ');
        await user.keyboard('{Enter}');
        expect(buttonAction).toHaveBeenCalledTimes(2);
    });
});