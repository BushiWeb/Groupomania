import Tooltip from './Tooltip.jsx';
import { screen, act } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import userEvent from '../../utils/tests/user-event.js';
import fakeTimers from '../../utils/tests/fake-timers.js';
import '@testing-library/jest-dom';

describe('Tooltip component test suite', () => {
    const tooltipLabel = 'Tooltip';
    const content = <button>Button text</button>;

    it('should render and render its children', () => {
        render(<Tooltip label={tooltipLabel}>{content}</Tooltip>);
        screen.getByRole('button');
    });

    it('should be displayed and hidden on focus', async () => {
        const user = userEvent.setup();
        render(<Tooltip label={tooltipLabel}>{content}</Tooltip>);

        let tooltip = screen.queryByText(tooltipLabel);
        expect(tooltip).toBeNull();

        await user.tab();
        tooltip = screen.queryByText(tooltipLabel);
        expect(tooltip).not.toBeNull();

        await user.tab();
        tooltip = screen.queryByText(tooltipLabel);
        expect(tooltip).toBeNull();
    });

    it('should be hidden on escape', async () => {
        const user = userEvent.setup();
        render(<Tooltip label={tooltipLabel}>{content}</Tooltip>);

        let tooltip = screen.queryByText(tooltipLabel);
        expect(tooltip).toBeNull();

        await user.tab();
        tooltip = screen.queryByText(tooltipLabel);
        expect(tooltip).not.toBeNull();

        await user.keyboard('{Escape}');
        tooltip = screen.queryByText(tooltipLabel);
        expect(tooltip).toBeNull();
    });

    it('should be displayed and hidden on hover', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({ advanceTimers: fakeTimers.rawAdvanceTimersByTime });
        const { container } = render(<Tooltip label={tooltipLabel}>{content}</Tooltip>);
        const tooltipContainer = container.querySelector('.tooltipContainer');

        let tooltip = screen.queryByText(tooltipLabel);
        expect(tooltip).toBeNull();

        await user.hover(tooltipContainer);
        tooltip = screen.queryByText(tooltipLabel);
        expect(tooltip).not.toBeNull();

        await user.unhover(tooltipContainer);
        tooltip = screen.queryByText(tooltipLabel);
        expect(tooltip).not.toBeNull();
        fakeTimers.runAllTimers();
        tooltip = screen.queryByText(tooltipLabel);
        expect(tooltip).toBeNull();

        fakeTimers.cleanAndUseRealTimers();
    });
});