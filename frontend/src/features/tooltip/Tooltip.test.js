import Tooltip from './Tooltip.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import userEvent from '@testing-library/user-event';
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
        jest.useFakeTimers();
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
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
        jest.runOnlyPendingTimers();
        tooltip = screen.queryByText(tooltipLabel);
        expect(tooltip).toBeNull();

        jest.useRealTimers();
    });
});