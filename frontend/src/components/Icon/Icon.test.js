import Icon from './Icon.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import '@testing-library/jest-dom';

describe('Icon component test suite', () => {
    const iconName = 'search';
    const iconLabel = 'New search';

    it('should render', () => {
        render(<Icon name={iconName} />);
        screen.getByText(iconName);
    });

    it('should have a label', () => {
        render(<Icon name={iconName} label={iconLabel} />);
        screen.getByLabelText(iconLabel);
    });

    it('should be hidden', () => {
        render(<Icon name={iconName} />);
        const iconElt = screen.getByText(iconName);
        expect(iconElt).not.toHaveAccessibleName();
        expect(iconElt.getAttribute('aria-hidden')).toBe('true');
    });

    it('should have default styling', () => {
        render(<Icon name={iconName} />);
        const iconElt = screen.getByText(iconName);
        expect(iconElt.style.getPropertyValue('--icon-weight')).toBe('inherit');
        expect(iconElt.style.getPropertyValue('--icon-grad')).toBe('0');
    });

    it('should have specified styling', () => {
        render(
            <Icon
                name={iconName}
                weight={700}
                size={48}
                grad={200}
                fill={true}
            />,
        );
        const iconElt = screen.getByText(iconName);
        expect(iconElt.style.getPropertyValue('--icon-weight')).toBe('700');
        expect(iconElt.style.getPropertyValue('--icon-grad')).toBe('200');
        expect(iconElt.style.getPropertyValue('--icon-optical-size')).toBe(
            '48',
        );
        expect(iconElt.style.getPropertyValue('--icon-fill')).toBe('1');
    });

    it('should have a different grad on drak background', () => {
        render(<Icon name={iconName} grad={200} isOnDark={true} />);
        const iconElt = screen.getByText(iconName);
        expect(iconElt.style.getPropertyValue('--icon-grad')).toBe('175');
    });

    it('should receive additionnal class names', () => {
        const className = 'test';
        render(<Icon name={iconName} className={className} />);
        const iconElt = screen.getByText(iconName);
        expect(iconElt).toHaveClass(className);
    });
});
