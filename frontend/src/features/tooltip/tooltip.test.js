import { screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import userEvent from '../../utils/tests/user-event.js';
import fakeTimers from '../../utils/tests/fake-timers.js';
import useTooltip from './useTooltip.js';

describe('Tooltip component test suite', () => {
    const label1 = 'test1', label2 = 'test2';

    function TooltipContainer({ label }) {
        const {
            anchorEventHandlers,
        } = useTooltip(label);
        return <div tabIndex={0} {...anchorEventHandlers }>{label} container</div>;
    }

    function RenderContainer() {
        return <>
            <TooltipContainer label={label1}/>
            <TooltipContainer label={label2}/>
        </>;
    }

    it('should render closed', () => {
        fakeTimers.useFakeTimers();
        render(<RenderContainer/>);

        fakeTimers.runAllTimers();
        const tooltipLabel = screen.queryByRole('tooltip', { hidden: true });
        expect(tooltipLabel).toBeNull();

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should display a tooltip when hovered', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({ advanceTimers: fakeTimers.rawAdvanceTimersByTime });
        render(<RenderContainer/>);
        const tooltipContainerElt = screen.getByText(`${label1} container`);

        await user.hover(tooltipContainerElt);
        fakeTimers.runAllTimers();
        const tooltipLabel = screen.getByRole('tooltip', { hidden: true });
        expect(tooltipLabel).toHaveTextContent(label1);

        fakeTimers.cleanAndUseRealTimers();
    });

    it('should close the tooltip when unhovering the element', async () => {
        fakeTimers.useFakeTimers();
        const user = userEvent.setup({ advanceTimers: fakeTimers.rawAdvanceTimersByTime });
        render(<RenderContainer/>);
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
        const user = userEvent.setup({ advanceTimers: fakeTimers.rawAdvanceTimersByTime });
        render(<RenderContainer/>);
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
        const user = userEvent.setup({ advanceTimers: fakeTimers.rawAdvanceTimersByTime });
        render(<RenderContainer/>);
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
        const user = userEvent.setup({ advanceTimers: fakeTimers.rawAdvanceTimersByTime });
        render(<RenderContainer/>);
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
        const user = userEvent.setup({ advanceTimers: fakeTimers.rawAdvanceTimersByTime });
        render(<RenderContainer/>);
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
        const user = userEvent.setup({ advanceTimers: fakeTimers.rawAdvanceTimersByTime });
        render(<RenderContainer/>);
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
});