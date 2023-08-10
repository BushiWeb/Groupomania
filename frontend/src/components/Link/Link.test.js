import Link from './Link.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper';
import userEvent from '../../utils/tests/user-event.js';
import '@testing-library/jest-dom';

describe('Link component test suite', () => {
    const to = '/test';
    const label = 'test';

    it('should render', () => {
        render(<Link to={to}>{label}</Link>);
        screen.getByRole('link', { name: label });
    });

    it('should be accessible using the keyboard and the space bar', async () => {
        const user = userEvent.setup();

        render(<Link to={to}>{label}</Link>);
        const linkElt = screen.getByRole('link', { name: label });

        expect(linkElt).not.toHaveFocus();

        await user.tab();
        expect(linkElt).toHaveFocus();

        await user.keyboard('{ }');
        const testElement = screen.getByTestId('search-path');
        expect(testElement).toHaveTextContent(to);
    });

    it('should not be activated by the space bar', async () => {
        const user = userEvent.setup();

        render(<Link to={to} useSpaceBar={false}>{label}</Link>);
        const linkElt = screen.getByRole('link', { name: label });

        expect(linkElt).not.toHaveFocus();

        await user.tab();
        expect(linkElt).toHaveFocus();

        await user.keyboard('{ }');
        const testElement = screen.getByTestId('search-path');
        expect(testElement).toHaveTextContent('/');
    });

    it('should execute the onClick event and not navigate', async () => {
        const user = userEvent.setup();

        const mockOnClick = jest.fn((e) => e.preventDefault());
        render(<Link to={to} useSpaceBar={false} onClick={mockOnClick}>{label}</Link>);
        const linkElt = screen.getByRole('link', { name: label });

        await user.click(linkElt);
        const testElement = screen.getByTestId('search-path');
        expect(testElement).toHaveTextContent('/');
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('should execute the onKeyDown event and not navigate', async () => {
        const user = userEvent.setup();

        const mockOnKeyDown = jest.fn((e) => e.preventDefault());
        render(<Link to={to} useSpaceBar={false} onKeyDown={mockOnKeyDown}>{label}</Link>);
        const linkElt = screen.getByRole('link', { name: label });

        await user.tab();
        expect(linkElt).toHaveFocus();

        await user.keyboard('{ }');
        const testElement = screen.getByTestId('search-path');
        expect(testElement).toHaveTextContent('/');
        expect(mockOnKeyDown).toHaveBeenCalled();
    });
});