import '../../../utils/tests/window-mocks.js';
import Button from './Button.jsx';
import { screen, act } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
});

describe('Button component test suite', () => {
    const label = 'test';
    const icon = 'search';
    const additionnalClass = 'testClass';

    it('should render', () => {
        render(<Button label={label}/>);
    });

    it('should execute the action when clicked', async () => {
        const buttonAction = jest.fn(() => true);
        const user = userEvent.setup();
        render(<Button action={buttonAction} label={label}/>);

        const buttonElt = screen.getByRole('button');

        await user.click(buttonElt);

        expect(buttonAction).toHaveBeenCalled();
    });

    it('should have the initial focus', () => {
        render(<Button hasInitialFocus={true} label={label}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toHaveFocus();
    });

    it('should be disabled', () => {
        render(<Button isDisabled={true} label={label}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toBeDisabled();
    });

    it('should be disabled and don\'t have the focus', () => {
        render(<Button isDisabled={true} hasInitialFocus={true} label={label}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toBeDisabled();
        expect(buttonElt).not.toHaveFocus();
    });

    it('should use the label as its content', () => {
        render(<Button label={label}/>);
        const buttonElt = screen.getByRole('button', { name: label });
        expect(buttonElt).toHaveTextContent(label);
    });

    it('should still show the label when there is no icon even if the label should be hidden', () => {
        render(<Button label={label} isLabelHidden={true}/>);
        const buttonElt = screen.getByRole('button', { name: label });
        expect(buttonElt).toHaveTextContent(label);
    });

    it('should have the label and the icon as its content', () => {
        render(<Button label={label} icon={icon}/>);
        const buttonElt = screen.getByRole('button', { name: label });
        const iconElt = screen.getByText(icon);

        expect(buttonElt).toHaveTextContent(label);
        expect(iconElt).toHaveAttribute('aria-hidden', 'true');
        expect(buttonElt).toContainElement(iconElt);
    });

    it('should have the icon only as its content', () => {
        render(<Button label={label} icon={icon} isLabelHidden={true}/>);
        const buttonElt = screen.getByRole('button', { name: label });
        const iconElt = screen.getByText(icon);

        expect(buttonElt).not.toHaveTextContent(label);
        expect(iconElt).toHaveAttribute('aria-hidden', 'true');
        expect(buttonElt).toContainElement(iconElt);
    });

    it('should have additionnal classnames', () => {
        render(<Button classNames={additionnalClass} label={label}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toHaveClass(additionnalClass);
    });

    it('should be accessible using the keyboard', async () => {
        const buttonAction = jest.fn(() => true);
        const user = userEvent.setup();
        render(<Button action={buttonAction} label={label}/>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).not.toHaveFocus();

        await user.tab();
        expect(buttonElt).toHaveFocus();

        await user.keyboard(' ');
        await user.keyboard('{Enter}');
        expect(buttonAction).toHaveBeenCalledTimes(2);
    });

    it('should trigger the ripple effect when activated', async () => {
        jest.useFakeTimers();
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
        render(<Button label={label} />);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).not.toHaveClass('ripple');

        await user.tab();
        expect(buttonElt).toHaveFocus();

        await user.keyboard(' ');
        expect(buttonElt).toHaveClass('ripple');
        act(() => {
            jest.runAllTimers();
        });
        expect(buttonElt).not.toHaveClass('ripple');


        await user.keyboard('{Enter}');
        expect(buttonElt).toHaveClass('ripple');
        act(() => {
            jest.runAllTimers();
        });
        expect(buttonElt).not.toHaveClass('ripple');

        await user.click(buttonElt);
        expect(buttonElt).toHaveClass('ripple');
        act(() => {
            jest.runAllTimers();
        });
        expect(buttonElt).not.toHaveClass('ripple');
    });

    it('should add any other prop passed to it', () => {
        render(<Button classNames={additionnalClass} label={label} aria-pressed={true}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt.getAttribute('aria-pressed')).toBe('true');
    });
});