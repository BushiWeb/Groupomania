import Logo from './Logo';
import { screen } from '@testing-library/react';
import { render } from '../../utils/test-wrapper';
import '@testing-library/jest-dom';
import { themeToggle } from '../../features/theme/theme.slice.js';
import { act } from 'react-dom/test-utils';

describe('HiddenNavigationLink component test suite', () => {
    const label = 'Skip navigation';
    const target = '/test';

    it('should render', () => {
        render(<Logo/>);
    });

    it('should have the right label if it is a link', () => {
        render(<Logo label={label} target={target} />);
        screen.getByRole('link', { name: `Groupomania ${label}` });
    });

    it('should render the color logo', () => {
        render(<Logo color={true} />);
        const logo = screen.getByRole('img');
        expect(logo.src).not.toMatch(/(black|white)/);
    });

    it('should render the monochrome logo', () => {
        render(<Logo/>);
        const logo = screen.getByRole('img');
        expect(logo.src).toMatch(/(black|white)/);
    });

    it('should render the image with the default dimensions', () => {
        render(<Logo/>);
        const logo = screen.getByRole('img');
        expect(logo.width).toBe(136);
        expect(logo.height).toBe(25);
    });

    it('should render the image with the given dimensions', () => {
        render(<Logo width={100} height={100}/>);
        const logo = screen.getByRole('img');
        expect(logo.width).toBe(100);
        expect(logo.height).toBe(100);
    });

    it('should render the image with the given width and the right proportions', () => {
        render(<Logo width={100}/>);
        const logo = screen.getByRole('img');
        expect(logo.width).toBe(100);
        expect(logo.height).toBe(18);
    });

    it('should render the image with the given width and the right proportions', () => {
        render(<Logo height={100}/>);
        const logo = screen.getByRole('img');
        expect(logo.height).toBe(100);
        expect(logo.width).toBe(544);
    });

    it('should render the right monochrome logo depending on the theme', () => {
        const { store } = render(<Logo/>);
        const logo = screen.getByRole('img');
        expect(logo.src).toMatch(/black/);
        act(() => {
            store.dispatch(themeToggle());
        });
        expect(logo.src).toMatch(/white/);
    });
});