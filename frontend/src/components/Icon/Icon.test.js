import Icon from './Icon.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Icon component test suite', () => {
    const iconName = 'search';
    const iconLabel = 'New search';

    it('should render', () => {
        render(<Icon name={iconName}/>);
    });

    it('should have a label', () => {
        render(<Icon name={iconName} label={iconLabel}/>);
        screen.getByLabelText(iconLabel);
    });

    it('should be hidden', () => {
        render(<Icon name={iconName}/>);
        const iconElt = screen.getByText(iconName);
        expect(iconElt).not.toHaveAccessibleName();
        expect(iconElt.getAttribute('aria-hidden')).toBe('true');
    });

    it('should have default styling', () => {
        render(<Icon name={iconName}/>);
        const iconElt = screen.getByText(iconName);
        expect(iconElt.style.getPropertyValue('--icon-weight')).toBe('inherit');
        expect(iconElt.style.getPropertyValue('--icon-grad')).toBe('0');
    });

    it('should have specified styling', () => {
        render(<Icon name={iconName} weight={700} size={48} grad={200} fill={true}/>);
        const iconElt = screen.getByText(iconName);
        expect(iconElt.style.getPropertyValue('--icon-weight')).toBe('700');
        expect(iconElt.style.getPropertyValue('--icon-grad')).toBe('200');
        expect(iconElt.style.getPropertyValue('--icon-optical-size')).toBe('48');
        expect(iconElt.style.getPropertyValue('--icon-fill')).toBe('1');
    });

    it('should have a different grad on drak background', () => {
        render(<Icon name={iconName} grad={200} isOnDark={true}/>);
        const iconElt = screen.getByText(iconName);
        expect(iconElt.style.getPropertyValue('--icon-grad')).toBe('175');
    });

    it('should be aligned with text', () => {
        render(<Icon name={iconName} isWithText/>);
        const iconElt = screen.getByText(iconName);
        expect(iconElt).toHaveClass('withTypo');
    });

    it('should be a button and trigger an action on click', async () => {
        const iconAction = jest.fn(() => true);
        const user = userEvent.setup();
        render(<Icon name={iconName} action={iconAction} label={iconLabel}/>);

        const iconElt = screen.getByRole('button');

        await user.click(iconElt);

        expect(iconAction).toHaveBeenCalled();
    });
});