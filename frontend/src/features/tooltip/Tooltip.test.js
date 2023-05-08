import Tooltip from './Tooltip.jsx';
import { screen, act } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import '@testing-library/jest-dom';
import { tooltipHide, tooltipShow } from './tooltip.slice.js';

describe('Tooltip component test suite', () => {
    const label = 'test';

    it('should render', () => {
        render(<Tooltip/>);
    });

    it('should appear and disappear depending on the global state', () => {
        const { container, store } = render(<Tooltip/>);

        let tooltipElt = container.querySelector('span');
        expect(tooltipElt).toBeNull();

        act(() => {
            store.dispatch(tooltipShow(label, {
                x: 100,
                y: 100,
                width: 100,
                height: 100,
            }));
        });
        tooltipElt = screen.getByText(label);

        act(() => {
            store.dispatch(tooltipHide());
        });
        tooltipElt = container.querySelector('span');
        expect(tooltipElt).toBeNull();

    });
});