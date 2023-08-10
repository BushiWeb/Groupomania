import NavigationItem from './NavigationItem.jsx';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '../../../utils/tests/user-event.js';
import '@testing-library/jest-dom';

describe('NavigationItem component test suite', () => {
    const link = {
        label: 'Accueil',
        target: '/',
        icon: 'home',
    };

    it('should render with the right content', () => {
        render(<NavigationItem {...link}/>);
        const linkElt = screen.getByRole('tab', { name: link.label });
        const listItemElt = screen.getByRole('listitem');
        screen.getByText(link.icon);
        expect(linkElt).toHaveAttribute('href', link.target);
        expect(linkElt).toHaveAttribute('aria-selected', 'false');
        expect(listItemElt).not.toHaveAttribute('data-active');
        expect(listItemElt).toHaveClass('navigationBarItem');
    });

    it('should be activated', () => {
        render(<NavigationItem {...link} active={true}/>);
        const linkElt = screen.getByRole('tab', { name: link.label });
        const listItemElt = screen.getByRole('listitem');
        expect(linkElt).toHaveAttribute('aria-selected', 'true');
        expect(listItemElt).toHaveAttribute('data-active');
    });

    it('should render as a navigation rail item', () => {
        render(<NavigationItem {...link} type="rail"/>);
        const listItemElt = screen.getByRole('listitem');
        expect(listItemElt).toHaveClass('navigationRailItem');
    });

    it('should render as a navigation drawer item', () => {
        render(<NavigationItem {...link} type="drawer"/>);
        const listItemElt = screen.getByRole('listitem');
        expect(listItemElt).toHaveClass('navigationDrawerItem');
    });

    it('should be focused', async () => {
        render(<NavigationItem {...link} focused={true}/>);
        const linkElt = screen.getByRole('tab', { name: link.label });

        await waitFor(() => {
            expect(linkElt).toHaveFocus();
        });
    });

    it('should execute the onFocus function when focused', async () => {
        const user = userEvent.setup();
        const mockOnFocus = jest.fn();
        render(<NavigationItem {...link} onFocus={mockOnFocus}/>);
        const linkElt = screen.getByRole('tab', { name: link.label });

        await user.tab();
        expect(mockOnFocus).toHaveBeenCalled();
    });

    it('should redirect when activated with the spacebar', async () => {
        const user = userEvent.setup();
        render(<NavigationItem {...link}/>, { initialEntries: ['/test']});

        await user.tab();
        await user.keyboard('{ }');
        const testElement = screen.getByTestId('search-path');
        expect(testElement).toHaveTextContent(link.target);
    });
});