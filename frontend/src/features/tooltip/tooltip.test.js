import { screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import userEvent from '../../utils/tests/user-event.js';
import fakeTimers from '../../utils/tests/fake-timers.js';
import useTooltip from './useTooltip.js';
import { useState } from 'react';

describe('Tooltip component test suite', () => {
    const label1 = 'test1',
        label1bis = 'bis1',
        label2 = 'test2',
        anchorHideButtonLabel = 'Button',
        labelChangeButtonLabel = 'label';

    function TooltipContainer({ label }) {
        const { anchorEventHandlers } = useTooltip(label);
        return (
            <div tabIndex={0} {...anchorEventHandlers}>
                {label} container
            </div>
        );
    }

    function RenderContainer() {
        const [isContainerVisible, setIsContainerVisible] = useState(true);
        const [currentLabel, setCurrentLabel] = useState(label1);
        return (
            <>
                {isContainerVisible && (
                    <TooltipContainer label={currentLabel} />
                )}
                <TooltipContainer label={label2} />
                <button onClick={() => setIsContainerVisible(false)}>
                    {anchorHideButtonLabel}
                </button>
                <button onClick={() => setCurrentLabel(label1bis)}>
                    {labelChangeButtonLabel}
                </button>
            </>
        );
    }

    it('should render closed', () => {
        fakeTimers.useFakeTimers();
        render(<RenderContainer />);

        fakeTimers.runAllTimers();
        const tooltipLabel = screen.queryByRole('tooltip', { hidden: true });
        expect(tooltipLabel).toBeNull();

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should display a tooltip when hovered', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({
            advanceTimers: fakeTimers.rawAdvanceTimersByTime,
        });
        render(<RenderContainer />);
        const tooltipContainerElt = screen.getByText(`${label1} container`);

        await user.hover(tooltipContainerElt);
        fakeTimers.runAllTimers();
        const tooltipLabel = screen.getByRole('tooltip', { hidden: true });
        expect(tooltipLabel).toHaveTextContent(label1);

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should close the tooltip when unhovering the element', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({
            advanceTimers: fakeTimers.rawAdvanceTimersByTime,
        });
        render(<RenderContainer />);
        const tooltipContainerElt = screen.getByText(`${label1} container`);

        await user.hover(tooltipContainerElt);
        fakeTimers.runAllTimers();
        screen.getByRole('tooltip', { hidden: true });

        await user.unhover(tooltipContainerElt);
        fakeTimers.runAllTimers();
        const tooltipLabel = screen.queryByRole('tooltip', { hidden: true });
        expect(tooltipLabel).toBeNull();

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should keep the tooltip opened when hovering the tooltip itself', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({
            advanceTimers: fakeTimers.rawAdvanceTimersByTime,
        });
        render(<RenderContainer />);
        const tooltipContainerElt = screen.getByText(`${label1} container`);

        await user.hover(tooltipContainerElt);
        fakeTimers.runAllTimers();
        const tooltipElt = screen.getByRole('tooltip', { hidden: true });

        await user.unhover(tooltipContainerElt);
        await user.hover(tooltipElt);
        fakeTimers.runAllTimers();
        screen.getByRole('tooltip', { hidden: true });

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should close the tooltip when unhovering the tooltip and the element', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({
            advanceTimers: fakeTimers.rawAdvanceTimersByTime,
        });
        render(<RenderContainer />);
        const tooltipContainerElt = screen.getByText(`${label1} container`);

        await user.hover(tooltipContainerElt);
        fakeTimers.runAllTimers();
        const tooltipElt = screen.getByRole('tooltip', { hidden: true });

        await user.unhover(tooltipContainerElt);
        await user.hover(tooltipElt);
        fakeTimers.runAllTimers();
        screen.getByRole('tooltip', { hidden: true });

        await user.unhover(tooltipElt);
        fakeTimers.runAllTimers();
        const tooltipLabel = screen.queryByRole('tooltip', { hidden: true });
        expect(tooltipLabel).toBeNull();

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should display a tooltip when focused', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({
            advanceTimers: fakeTimers.rawAdvanceTimersByTime,
        });
        render(<RenderContainer />);
        const tooltipContainerElt = screen.getByText(`${label1} container`);

        await user.tab();
        expect(tooltipContainerElt).toHaveFocus();
        fakeTimers.runAllTimers();
        const tooltipLabel = screen.getByRole('tooltip', { hidden: true });
        expect(tooltipLabel).toHaveTextContent(label1);

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should close the tooltip when bluring the element', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({
            advanceTimers: fakeTimers.rawAdvanceTimersByTime,
        });
        render(<RenderContainer />);
        const tooltipContainerElt = screen.getByText(`${label1} container`);

        await user.tab();
        expect(tooltipContainerElt).toHaveFocus();
        fakeTimers.runAllTimers();
        screen.getByRole('tooltip', { hidden: true });

        await user.tab({ shift: true });
        fakeTimers.runAllTimers();
        const tooltipLabel = screen.queryByRole('tooltip', { hidden: true });
        expect(tooltipLabel).toBeNull();

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should switch the tooltip target when hovering or focusing another target', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({
            advanceTimers: fakeTimers.rawAdvanceTimersByTime,
        });
        render(<RenderContainer />);
        const tooltipContainer1Elt = screen.getByText(`${label1} container`);
        const tooltipContainer2Elt = screen.getByText(`${label2} container`);

        await user.hover(tooltipContainer1Elt);
        fakeTimers.runAllTimers();
        screen.getByRole('tooltip', { hidden: true });

        await user.unhover(tooltipContainer1Elt);
        await user.hover(tooltipContainer2Elt);
        fakeTimers.runAllTimers();
        let tooltipLabel = screen.getByRole('tooltip', { hidden: true });
        expect(tooltipLabel).toHaveTextContent(label2);

        await user.tab();
        expect(tooltipContainer1Elt).toHaveFocus();
        fakeTimers.runAllTimers();
        expect(tooltipLabel).toHaveTextContent(label1);

        await user.tab();
        expect(tooltipContainer2Elt).toHaveFocus();
        fakeTimers.runAllTimers();
        expect(tooltipLabel).toHaveTextContent(label2);

        await user.hover(tooltipContainer1Elt);
        fakeTimers.runAllTimers();
        screen.getByRole('tooltip', { hidden: true });
        expect(tooltipLabel).toHaveTextContent(label1);

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should close the tooltip when pressing "Escape"', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({
            advanceTimers: fakeTimers.rawAdvanceTimersByTime,
        });
        render(<RenderContainer />);
        const tooltipContainerElt = screen.getByText(`${label1} container`);

        await user.hover(tooltipContainerElt);
        fakeTimers.runAllTimers();
        screen.getByRole('tooltip', { hidden: true });

        await user.keyboard('{Escape}');
        fakeTimers.runAllTimers();
        const tooltipLabel = screen.queryByRole('tooltip', { hidden: true });
        expect(tooltipLabel).toBeNull();

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should close the tooltip when the anchor dismount', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({
            advanceTimers: fakeTimers.rawAdvanceTimersByTime,
        });
        render(<RenderContainer />);
        const tooltipContainerElt = screen.getByText(`${label1} container`);
        const buttonElt = screen.getByRole('button', {
            name: anchorHideButtonLabel,
        });

        await user.tab();
        await user.tab();
        await user.tab();
        expect(buttonElt).toHaveFocus();

        await user.hover(tooltipContainerElt);
        fakeTimers.runAllTimers();
        screen.getByRole('tooltip', { hidden: true });

        await user.keyboard('{Enter}');
        expect(screen.queryByText(`${label1} container`)).toBeNull();
        fakeTimers.runAllTimers();
        const tooltipLabel = screen.queryByRole('tooltip', { hidden: true });
        expect(tooltipLabel).toBeNull();

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should update the tooltip value', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({
            advanceTimers: fakeTimers.rawAdvanceTimersByTime,
        });
        render(<RenderContainer />);
        const tooltipContainerElt = screen.getByText(`${label1} container`);
        const buttonElt = screen.getByRole('button', {
            name: labelChangeButtonLabel,
        });

        await user.tab();
        await user.tab();
        await user.tab();
        await user.tab();
        expect(buttonElt).toHaveFocus();

        await user.hover(tooltipContainerElt);
        fakeTimers.runAllTimers();
        const tooltipLabel = screen.getByRole('tooltip', { hidden: true });
        expect(tooltipLabel).toHaveTextContent(label1);

        await user.keyboard('{Enter}');
        expect(tooltipContainerElt).toHaveTextContent(new RegExp(label1bis));
        fakeTimers.runAllTimers();
        expect(tooltipLabel).toHaveTextContent(label1bis);

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should not update the tooltip value when the label changes on another potential anchor', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({
            advanceTimers: fakeTimers.rawAdvanceTimersByTime,
        });
        render(<RenderContainer />);
        const tooltipContainer1Elt = screen.getByText(`${label1} container`);
        const tooltipContainer2Elt = screen.getByText(`${label2} container`);
        const buttonElt = screen.getByRole('button', {
            name: labelChangeButtonLabel,
        });

        await user.tab();
        await user.tab();
        await user.tab();
        await user.tab();
        expect(buttonElt).toHaveFocus();

        await user.hover(tooltipContainer2Elt);
        fakeTimers.runAllTimers();
        const tooltipLabel = screen.getByRole('tooltip', { hidden: true });
        expect(tooltipLabel).toHaveTextContent(label2);

        await user.keyboard('{Enter}');
        expect(tooltipContainer1Elt).toHaveTextContent(new RegExp(label1bis));
        fakeTimers.runAllTimers();
        expect(tooltipLabel).toHaveTextContent(label2);

        fakeTimers.cleanAndUseRealTimers();
    });
});
