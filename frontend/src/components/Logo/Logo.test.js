import Logo from './Logo';
import { screen } from '@testing-library/react';
import { render } from '../../utils/test-wrapper';
import '@testing-library/jest-dom';

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
});