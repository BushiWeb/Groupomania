import { screen } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '../../../utils/tests/user-event.js';
import '@testing-library/jest-dom';
import Navigation from './Navigation.jsx';

describe('Navigation component test suite', () => {
    const links = [
        {
            label: 'Accueil',
            target: '/test',
            icon: 'home',
        },
        {
            label: 'Réseau',
            target: '/reseau',
            icon: 'groups',
        },
    ];

    it('should render with the right links as a navigation bar', () => {
        render(<Navigation links={links}/>);
        const link1 = screen.getByRole('tab', { name: links[0].label });
        const link2 = screen.getByRole('tab', { name: links[1].label });
        const listItemsElts = screen.getAllByRole('listitem');
        const listElt = screen.getByRole('tablist');

        expect(link1).toHaveTextContent(links[0].label);
        expect(link1).toHaveTextContent(links[0].icon);
        expect(link2).toHaveTextContent(links[1].label);
        expect(link2).toHaveTextContent(links[1].icon);
        expect(listElt).toHaveClass('navigationBar');
        for (const listItem of listItemsElts) {
            expect(listItem).toHaveClass('navigationBarItem');
        }
    });

    it('should render as a navigation rail', () => {
        render(<Navigation links={links} type='rail'/>);
        const listItemsElts = screen.getAllByRole('listitem');
        const listElt = screen.getByRole('tablist');

        expect(listElt).toHaveClass('navigationRail');
        for (const listItem of listItemsElts) {
            expect(listItem).toHaveClass('navigationRailItem');
        }
    });

    it('should render as a navigation drawer', () => {
        render(<Navigation links={links} type='drawer'/>);
        const listItemsElts = screen.getAllByRole('listitem');
        const listElt = screen.getByRole('tablist');

        expect(listElt).toHaveClass('navigationDrawer');
        for (const listItem of listItemsElts) {
            expect(listItem).toHaveClass('navigationDrawerItem');
        }
    });

    it('should give the focus to the first list item on tab press', async () => {
        const user = userEvent.setup();
        render(<Navigation links={links}/>);
        const navigationItems = screen.getAllByRole('tab');

        expect(navigationItems[0]).not.toHaveFocus();

        await user.tab();
        expect(navigationItems[0]).toHaveFocus();
    });

    it('should move the focus with the arrow keys when drawer', async () => {
        const user = userEvent.setup();
        render(<Navigation links={links} type='drawer'/>);
        const navigationItems = screen.getAllByRole('tab');

        expect(navigationItems[0]).not.toHaveFocus();

        await user.tab();
        expect(navigationItems[0]).toHaveFocus();

        await user.keyboard('{ArrowUp}');
        expect(navigationItems[0]).toHaveFocus();

        await user.keyboard('{ArrowDown}');
        expect(navigationItems[0]).not.toHaveFocus();
        expect(navigationItems[1]).toHaveFocus();

        await user.keyboard('{ArrowDown}');
        expect(navigationItems[1]).toHaveFocus();
    });

    it('should give the focus to the right element event when the first element gains it using a click when a drawer', async () => {
        const user = userEvent.setup();
        render(<Navigation links={links} type='drawer'/>);
        const navigationItems = screen.getAllByRole('tab');

        await user.click(navigationItems[1]);
        expect(navigationItems[1]).toHaveFocus();

        await user.keyboard('{ArrowUp}');
        expect(navigationItems[0]).toHaveFocus();
    });

    it('should synchronyse between tab focus and arrow focus when a drawer', async () => {
        const user = userEvent.setup();
        render(<Navigation links={links} type='drawer'/>);
        const navigationItems = screen.getAllByRole('tab');

        expect(navigationItems[0]).not.toHaveFocus();

        await user.tab();
        expect(navigationItems[0]).toHaveFocus();

        await user.tab();
        expect(navigationItems[0]).not.toHaveFocus();
        expect(navigationItems[1]).toHaveFocus();

        await user.keyboard('{ArrowUp}');
        expect(navigationItems[1]).not.toHaveFocus();
        expect(navigationItems[0]).toHaveFocus();

        await user.tab();
        await user.tab();
        expect(navigationItems[0]).not.toHaveFocus();
        expect(navigationItems[1]).not.toHaveFocus();

        await user.keyboard('{ArrowUp}');
        expect(navigationItems[0]).not.toHaveFocus();
        expect(navigationItems[1]).not.toHaveFocus();

        await user.tab({ shift: true });
        expect(navigationItems[1]).toHaveFocus();
    });

    it('should mark the current link as activated', () => {
        render(<Navigation links={links}/>, { initialEntries: [links[0].target]});
        const link1 = screen.getByRole('tab', { name: links[0].label });
        const link2 = screen.getByRole('tab', { name: links[1].label });

        expect(link1).toHaveAttribute('aria-selected', 'true');
        expect(link2).toHaveAttribute('aria-selected', 'false');
    });
});