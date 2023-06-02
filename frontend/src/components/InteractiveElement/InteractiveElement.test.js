import InteractiveElement from './InteractiveElement.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('InteractiveElement component test suite', () => {
    const buttonText = 'Button text';

    it('should render', () => {
        const { container } = render(<InteractiveElement rootElement='div'/>);
        const targetLayer = container.querySelector('.targetLayer');
        const stateLayer = container.querySelector('.stateLayer');

        expect(targetLayer).not.toBeNull();
        expect(stateLayer).not.toBeNull();
    });

    it('should be rendered as a DOM element', () => {
        render(<InteractiveElement rootElement='button'>{buttonText}</InteractiveElement>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).toHaveTextContent(buttonText);
    });

    it('should be rendered using a react component', () => {
        function Button({ children }) {
            return <button>{children}</button>;
        }

        render(<InteractiveElement rootElement={Button}>{buttonText}</InteractiveElement>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).toHaveTextContent(buttonText);
    });

    it('should receive additionnal classnames', () => {
        const classnames = 'button happy-button';
        render(<InteractiveElement rootElement='button' className={classnames}>{buttonText}</InteractiveElement>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).toHaveClass('button');
        expect(buttonElt).toHaveClass('happy-button');
        expect(buttonElt).toHaveClass('interactiveElement');
    });

    it('should have all activated states by default', () => {
        render(<InteractiveElement rootElement='button'>{buttonText}</InteractiveElement>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).toHaveAttribute('data-state-focus', 'true');
        expect(buttonElt).toHaveAttribute('data-state-hover', 'true');
        expect(buttonElt).toHaveAttribute('data-state-active', 'true');
    });

    it('shouldn\'t have the hover state activated', () => {
        render(<InteractiveElement rootElement='button' hover={false}>{buttonText}</InteractiveElement>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).toHaveAttribute('data-state-focus', 'true');
        expect(buttonElt).not.toHaveAttribute('data-state-hover');
        expect(buttonElt).toHaveAttribute('data-state-active', 'true');
    });

    it('shouldn\'t have the focus state activated', () => {
        render(<InteractiveElement rootElement='button' focus={false}>{buttonText}</InteractiveElement>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).not.toHaveAttribute('data-state-focus');
        expect(buttonElt).toHaveAttribute('data-state-hover', 'true');
        expect(buttonElt).toHaveAttribute('data-state-active', 'true');
    });

    it('shouldn\'t have the focus state activated', () => {
        render(<InteractiveElement rootElement='button' active={false}>{buttonText}</InteractiveElement>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).toHaveAttribute('data-state-focus', 'true');
        expect(buttonElt).toHaveAttribute('data-state-hover', 'true');
        expect(buttonElt).not.toHaveAttribute('data-state-active');
    });

    it('should pass any other props to the element', () => {
        render(<InteractiveElement rootElement='button' type="submit">{buttonText}</InteractiveElement>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).toHaveAttribute('type', 'submit');
    });

    it('shouldn\'t have the ripple effect', async () => {
        const user = userEvent.setup();
        render(<InteractiveElement rootElement='button'>{buttonText}</InteractiveElement>);
        const buttonElt = screen.getByRole('button');
        const stateLayer = buttonElt.querySelector('.stateLayer');

        expect(stateLayer).not.toHaveClass('ripple');

        await user.click(buttonElt);
        expect(stateLayer).not.toHaveClass('ripple');

        await user.keyboard(' ');
        expect(stateLayer).not.toHaveClass('ripple');

        await user.keyboard('{Enter}');
        expect(stateLayer).not.toHaveClass('ripple');
    });

    it('should have the ripple effect for the right duration', async () => {
        jest.useFakeTimers();
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
        render(<InteractiveElement rootElement='button' rippleDuration={500}>{buttonText}</InteractiveElement>);
        const buttonElt = screen.getByRole('button');
        const stateLayer = buttonElt.querySelector('.stateLayer');

        expect(stateLayer).not.toHaveClass('ripple');

        await user.tab();
        expect(buttonElt).toHaveFocus();

        await user.keyboard(' ');
        expect(stateLayer).toHaveClass('ripple');
        jest.advanceTimersByTime(500);
        expect(stateLayer).not.toHaveClass('ripple');


        await user.keyboard('{Enter}');
        expect(stateLayer).toHaveClass('ripple');
        jest.advanceTimersByTime(500);
        expect(stateLayer).not.toHaveClass('ripple');

        await user.click(buttonElt);
        expect(stateLayer).toHaveClass('ripple');
        jest.advanceTimersByTime(500);
        expect(stateLayer).not.toHaveClass('ripple');

        jest.useRealTimers();
    });

    it('should execute the action', async () => {
        const mockAction = jest.fn(() => true);
        const user = userEvent.setup();
        render(<InteractiveElement rootElement='button' action={mockAction}>{buttonText}</InteractiveElement>);
        const buttonElt = screen.getByRole('button');

        await user.tab();
        await user.keyboard(' ');
        await user.keyboard('{Enter}');
        await user.click(buttonElt);

        expect(mockAction).toHaveBeenCalledTimes(3);
    });

    it('should give the right color to the state layer', () => {
        const { container } = render(<InteractiveElement rootElement='div' stateLayerColor='on-primary'/>);
        const stateLayer = container.querySelector('.stateLayer');

        expect(stateLayer).toHaveStyle('--state-layer-color: var(--color-on-primary)');
    });
});