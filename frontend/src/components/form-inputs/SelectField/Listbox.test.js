import Listbox from './Listbox.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import userEvent from '../../utils/tests/user-event.js';
import '@testing-library/jest-dom';
import { useState } from 'react';
import MenuIcon from './MenuIcon.jsx';

describe('Listbox component test suite', () => {
    const menuLabel = 'Menu test';
    const mockOnClose = jest.fn();
    const iconName = 'icon name';
    const menuButtons = [
        {
            label: 'a',
            onClick: jest.fn(),
        },
        {
            label: 'b',
            leadingIcon: <MenuIcon name={iconName}/>,
            onClick: jest.fn(),
        },
        {
            label: 'c',
            onClick: jest.fn(),
        },
    ];

    function MenuWrapper({
        open = true,
    }) {
        const [anchorRef, setAnchorRef] = useState(null);
        return <>
            <div data-testid="anchor" ref={(node) => setAnchorRef(node)}></div>
            <div data-testid="out"></div>
            <Listbox
                label={menuLabel}
                open={open}
                anchor={anchorRef}
                onClose={mockOnClose}
                menuItems={menuButtons}
            />
        </>;
    }

    afterEach(() => {
        mockOnClose.mockClear();
        menuButtons[0].onClick.mockClear();
    });

    it('should render closed', () => {
        render(<MenuWrapper open={false}/>);
        expect(screen.queryByRole('menu', { name: menuLabel })).toBeNull();
    });

    it('should render opened with the right label and actions', () => {
        render(<MenuWrapper/>);
        screen.getByRole('menu', { name: menuLabel });
        const firstButton = screen.getByRole('button', { name: menuButtons[0].label });
        expect(firstButton).toHaveFocus();
        screen.getByRole('button', { name: menuButtons[1].label });
        screen.getByText(iconName);
        screen.getByRole('button', { name: menuButtons[2].label });
    });

    it('should move the focus with the up / down arrows', async () => {
        const user = userEvent.setup();
        render(<MenuWrapper/>);
        const buttonElts = screen.getAllByRole('button');

        expect(buttonElts[0]).toHaveFocus();

        await user.keyboard('{ArrowUp}');
        expect(buttonElts[0]).toHaveFocus();

        await user.keyboard('{ArrowDown}');
        expect(buttonElts[0]).not.toHaveFocus();
        expect(buttonElts[1]).toHaveFocus();

        await user.keyboard('{ArrowDown}');
        expect(buttonElts[1]).not.toHaveFocus();
        expect(buttonElts[2]).toHaveFocus();

        await user.keyboard('{ArrowDown}');
        expect(buttonElts[2]).toHaveFocus();

        await user.keyboard('{ArrowUp}');
        expect(buttonElts[2]).not.toHaveFocus();
        expect(buttonElts[1]).toHaveFocus();
    });

    it('should move the focus with the left / right arrows', async () => {
        const user = userEvent.setup();
        render(<MenuWrapper/>);
        const buttonElts = screen.getAllByRole('button');

        expect(buttonElts[0]).toHaveFocus();

        await user.keyboard('{ArrowLeft}');
        expect(buttonElts[0]).toHaveFocus();

        await user.keyboard('{ArrowRight}');
        expect(buttonElts[0]).not.toHaveFocus();
        expect(buttonElts[1]).toHaveFocus();

        await user.keyboard('{ArrowRight}');
        expect(buttonElts[1]).not.toHaveFocus();
        expect(buttonElts[2]).toHaveFocus();

        await user.keyboard('{ArrowRight}');
        expect(buttonElts[2]).toHaveFocus();

        await user.keyboard('{ArrowLeft}');
        expect(buttonElts[2]).not.toHaveFocus();
        expect(buttonElts[1]).toHaveFocus();
    });

    it('should move the focus with the home / end keys', async () => {
        const user = userEvent.setup();
        render(<MenuWrapper/>);
        const buttonElts = screen.getAllByRole('button');

        expect(buttonElts[0]).toHaveFocus();

        await user.keyboard('{End}');
        expect(buttonElts[0]).not.toHaveFocus();
        expect(buttonElts[2]).toHaveFocus();

        await user.keyboard('{Home}');
        expect(buttonElts[2]).not.toHaveFocus();
        expect(buttonElts[0]).toHaveFocus();
    });

    it('should move the focus with the letters keys', async () => {
        const user = userEvent.setup();
        render(<MenuWrapper/>);
        const buttonElts = screen.getAllByRole('button');

        expect(buttonElts[0]).toHaveFocus();

        await user.keyboard(`{${menuButtons[2].label}}`);
        expect(buttonElts[0]).not.toHaveFocus();
        expect(buttonElts[2]).toHaveFocus();

        await user.keyboard(`{${menuButtons[1].label}}`);
        expect(buttonElts[2]).not.toHaveFocus();
        expect(buttonElts[1]).toHaveFocus();

        await user.keyboard(`{${menuButtons[0].label}}`);
        expect(buttonElts[1]).not.toHaveFocus();
        expect(buttonElts[0]).toHaveFocus();
    });

    it('should synchronyse between tab focus and arrow focus', async () => {
        const user = userEvent.setup();
        render(<MenuWrapper/>);
        const buttonElts = screen.getAllByRole('button');

        expect(buttonElts[0]).toHaveFocus();

        await user.tab();
        expect(buttonElts[0]).not.toHaveFocus();
        expect(buttonElts[1]).toHaveFocus();

        await user.keyboard('{ArrowDown}');
        expect(buttonElts[1]).not.toHaveFocus();
        expect(buttonElts[2]).toHaveFocus();

        await user.tab({ shift: true });
        expect(buttonElts[2]).not.toHaveFocus();
        expect(buttonElts[1]).toHaveFocus();

        await user.keyboard('{ArrowUp}');
        expect(buttonElts[1]).not.toHaveFocus();
        expect(buttonElts[0]).toHaveFocus();
    });

    it('should prevent escaping using tab', async () => {
        const user = userEvent.setup();
        render(<MenuWrapper/>);
        const buttonElts = screen.getAllByRole('button');

        expect(buttonElts[0]).toHaveFocus();

        await user.tab({ shift: true });
        expect(buttonElts[0]).toHaveFocus();

        await user.keyboard('{End}');
        expect(buttonElts[0]).not.toHaveFocus();
        expect(buttonElts[2]).toHaveFocus();

        await user.tab();
        expect(buttonElts[2]).toHaveFocus();
    });

    it('should execute the action and execute onClose when clicking on a button', async () => {
        const user = userEvent.setup();
        render(<MenuWrapper/>);
        const buttonElt = screen.getByRole('button', { name: menuButtons[0].label });

        await user.click(buttonElt);
        expect(menuButtons[0].onClick).toHaveBeenCalled();
        expect(mockOnClose).toHaveBeenCalled();
    });

    it('should execute onClose when pressing Escape', async () => {
        const user = userEvent.setup();
        render(<MenuWrapper/>);

        await user.keyboard('{Escape}');
        expect(mockOnClose).toHaveBeenCalled();
    });

    it('should execute onClose when clicking out', async () => {
        const user = userEvent.setup();
        render(<MenuWrapper/>);
        const outElt = screen.getByTestId('out');

        await user.click(outElt);
        expect(mockOnClose).toHaveBeenCalled();
    });

    it('should not execute onClose when clicking the anchor', async () => {
        const user = userEvent.setup();
        render(<MenuWrapper/>);
        const anchorElt = screen.getByTestId('anchor');

        await user.click(anchorElt);
        expect(mockOnClose).not.toHaveBeenCalled();
    });
});