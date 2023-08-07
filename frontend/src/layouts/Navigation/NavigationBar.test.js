import NavigationBar from './NavigationBar.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import '@testing-library/jest-dom';

beforeEach(() => {
    sessionStorage.clear();
});

describe('NavigationBar component test suite', () => {
    const links = [
        {
            label: 'Accueil',
            target: '/',
            icon: 'home',
            active: true,
        },
        {
            label: 'Réseau',
            target: '/reseau',
            icon: 'groups',
        },
    ];

    it('should render with the right links', () => {
        render(<NavigationBar links={links}/>);
        const link1 = screen.getByRole('tab', { name: links[0].label });
        const link2 = screen.getByRole('tab', { name: links[1].label });

        expect(link1).toHaveAttribute('aria-selected', 'true');
        expect(link2).toHaveAttribute('aria-selected', 'false');
        expect(link1).toHaveTextContent(links[0].label);
        expect(link1).toHaveTextContent(links[0].icon);
        expect(link2).toHaveTextContent(links[1].label);
        expect(link2).toHaveTextContent(links[1].icon);
    });
});