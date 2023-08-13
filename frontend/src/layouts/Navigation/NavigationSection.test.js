import { screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import userEvent from '../../utils/tests/user-event.js';
import '@testing-library/jest-dom';
import NavigationSection from './NavigationSection.jsx';

const changeViewportWidth = (w) => {
    window.innerWidth = w;
    window.dispatchEvent(new Event('resize'));
};

describe('NavigationSection component test suite', () => {
    it('should render with a navigation bar on small screens', () => {
        changeViewportWidth(300);
        render(<NavigationSection/>);
        const listElt = screen.getByRole('tablist');
        expect(listElt).toHaveClass('navigationBar');
    });

    it('should render with a navigation rail on medium screens', () => {
        changeViewportWidth(900);
        render(<NavigationSection/>);
        const listElt = screen.getByRole('tablist');
        expect(listElt).toHaveClass('navigationRail');
    });

    it('should render with a navigation drawer on large screens', () => {
        changeViewportWidth(1200);
        render(<NavigationSection/>);
        const listElt = screen.getByRole('tablist');
        expect(listElt).toHaveClass('navigationDrawer');
    });

    it('should render a FAB button with the right action on small and medium screens', async () => {
        changeViewportWidth(900);
        const user = userEvent.setup();
        const fab = {
            icon: 'favorite',
            label: 'fabTest',
            onClick: jest.fn(),
        };
        render(<NavigationSection fab={fab}/>);
        const fabElt = screen.getByRole('button', { name: fab.label });
        await user.click(fabElt);
        expect(fab.onClick).toHaveBeenCalled();
        expect(fabElt).not.toHaveTextContent(fab.label);
    });

    it('should render an extended FAB button on large screns', async () => {
        changeViewportWidth(1200);
        const user = userEvent.setup();
        const fab = {
            icon: 'favorite',
            label: 'fabTest',
            onClick: jest.fn(),
        };
        render(<NavigationSection fab={fab}/>);
        const fabElt = screen.getByRole('button', { name: fab.label });
        await user.click(fabElt);
        expect(fab.onClick).toHaveBeenCalled();
        expect(fabElt).toHaveTextContent(fab.label);
    });

    it('should render an extended FAB button with a custom value on large screns', () => {
        changeViewportWidth(1200);
        const fab = {
            icon: 'favorite',
            label: 'fabTest',
            value: 'fabValue',
            onClick: jest.fn(),
        };
        render(<NavigationSection fab={fab}/>);
        const fabElt = screen.getByRole('button', { name: fab.label });
        expect(fabElt).not.toHaveTextContent(fab.label);
        expect(fabElt).toHaveTextContent(fab.value);
    });
});