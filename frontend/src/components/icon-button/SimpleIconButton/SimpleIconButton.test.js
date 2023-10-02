import '../../../utils/tests/window-mocks.js';
import SimpleIconButton from './SimpleIconButton.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '../../../utils/tests/user-event.js';
import fakeTimers from '../../../utils/tests/fake-timers.js';
import '@testing-library/jest-dom';

describe('SimpleIconButton component test suite', () => {
    const label = 'test';
    const name = 'favorite';

    it('should render', () => {
        render(<SimpleIconButton name={name} label={label}/>);
        const buttonElt = screen.getByRole('button', { name: label });
        expect(buttonElt).toHaveTextContent(name);
        expect(buttonElt).not.toHaveAttribute('aria-pressed');
    });

    it('should execute the action when clicked', async () => {
        const buttonAction = jest.fn(() => true);
        const user = userEvent.setup();
        render(<SimpleIconButton name={name} label={label} onClick={buttonAction}/>);

        const buttonElt = screen.getByRole('button');

        await user.click(buttonElt);

        expect(buttonAction).toHaveBeenCalled();
    });

    it('should be accessible using the keyboard', async () => {
        const buttonAction = jest.fn(() => true);
        const user = userEvent.setup();
        render(<SimpleIconButton name={name} label={label} onClick={buttonAction}/>);
        const buttonElt = screen.getByRole('button');

        expect(buttonElt).not.toHaveFocus();

        await user.tab();
        expect(buttonElt).toHaveFocus();

        buttonAction.mockClear();
        await user.keyboard(' ');
        expect(buttonAction).toHaveBeenCalled();

        buttonAction.mockClear();
        await user.keyboard('{Enter}');
        expect(buttonAction).toHaveBeenCalled();
    });

    it('should have the initial focus', () => {
        render(<SimpleIconButton name={name} label={label} autoFocus={true}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toHaveFocus();
    });

    it('should be disabled', () => {
        render(<SimpleIconButton name={name} label={label} disabled={true}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toBeDisabled();
    });

    it('should be disabled and don\'t have the focus', () => {
        render(<SimpleIconButton name={name} label={label} disabled={true} autoFocus={true}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt).toBeDisabled();
        expect(buttonElt).not.toHaveFocus();
    });

    it('should display a tooltip when hovered', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({ advanceTimers: fakeTimers.rawAdvanceTimersByTime });
        const { container } = render(<SimpleIconButton name={name} label={label}/>);
        const buttonElt = screen.getByRole('button', { name: label });

        await user.hover(buttonElt);
        fakeTimers.runAllTimers();
        const tooltipLabel = container.querySelector('.tooltip');
        expect(tooltipLabel).not.toBeNull();
        expect(tooltipLabel).toHaveTextContent(label);

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should add any other prop passed to it', () => {
        const description = 'lorem';
        render(<SimpleIconButton name={name} label={label} aria-describedby={description}/>);
        const buttonElt = screen.getByRole('button');
        expect(buttonElt.getAttribute('aria-describedby')).toBe(description);
    });

    it('should be activated', () => {
        render(<SimpleIconButton name={name} label={label} toggle={true}/>);
        const buttonElt = screen.getByRole('button', { name: label });
        expect(buttonElt).toHaveAttribute('aria-pressed', 'true');
    });

    it('should not be activated', () => {
        render(<SimpleIconButton name={name} label={label} toggle={false}/>);
        const buttonElt = screen.getByRole('button', { name: label });
        expect(buttonElt).toHaveAttribute('aria-pressed', 'false');
    });

    it('should have no state layer', () => {
        const { container } = render(<SimpleIconButton name={name} label={label}/>);
        const stateLayerElt = container.querySelector('.stateLayer');
        expect(stateLayerElt).toBeNull();
    });
});