import NavigationItem from './NavigationItem.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
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
});