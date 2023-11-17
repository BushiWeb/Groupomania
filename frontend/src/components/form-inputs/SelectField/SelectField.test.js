import { getByLabelText, getByRole, screen } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '../../../utils/tests/user-event.js';
import '@testing-library/jest-dom';
import SelectField from './SelectField.jsx';

describe('SelectField component test suite', () => {
    const currentValueIndex = 4;
    const label = 'labelTest';
    let options = [
        {
            value: 1,
            label: 'night',
        },
        {
            value: 2,
            label: 'actor',
        },
        {
            value: 3,
            label: 'power',
        },
        {
            value: 4,
            label: 'topic',
        },
        {
            value: 5,
            label: 'asset',
        },
        {
            value: 6,
            label: 'aisle',
        },
    ];
    const ordered_labels = [
        'actor',
        'aisle',
        'asset',
        'night',
        'power',
        'topic',
    ];
    const mockOnChange = jest.fn();

    function findValue(selectedLabel) {
        return options.find(({ label }) => selectedLabel === label).value;
    }

    function SelectWrapper({ value = true, ...props }) {
        return (
            <>
                <div data-testid="out"></div>
                <SelectField
                    label={label}
                    {...(value && { value: options[currentValueIndex].value })}
                    valueCollection={options}
                    onChange={mockOnChange}
                    {...props}
                />
            </>
        );
    }

    afterEach(() => {
        mockOnChange.mockClear();
    });

    it('should render', () => {
        render(<SelectWrapper value={false} />);
        screen.getByRole('combobox', { name: label });
    });

    it('should render with the right value', () => {
        render(<SelectWrapper />);
        const comboboxElt = screen.getByRole('combobox', { name: label });
        expect(comboboxElt).toHaveTextContent(options[currentValueIndex].label);
    });

    it('should have a support text, which labels the widget', () => {
        const supportText = 'support text';
        render(<SelectWrapper supportText={supportText} />);
        screen.getByText(supportText);
        screen.getByLabelText(supportText);
    });

    it('should have an error message and the alert role', () => {
        const errorMessage = 'error message';
        const { container } = render(
            <SelectWrapper errorMessage={errorMessage} />,
        );
        screen.getByText(errorMessage);
        const errorMessageElt = container.querySelector('.supportText');
        getByLabelText(errorMessageElt, 'Error');

        const widgetElt = screen.getByRole('alert', { name: errorMessage });
        expect(widgetElt).toHaveClass('root');
    });

    it('should choose the error message over the support text', () => {
        const errorMessage = 'error message';
        const supportText = 'support text';
        render(
            <SelectWrapper
                errorMessage={errorMessage}
                supportText={supportText}
            />,
        );
        screen.getByText(errorMessage);
        screen.getByLabelText('Error');
        const widgetElt = screen.getByRole('alert');
        const supportTextElt = screen.queryByText(supportText);

        expect(widgetElt).toHaveClass('root', { name: errorMessage });
        expect(supportTextElt).toBeNull();
    });

    it('should be required and have an asterix next to the label when required', () => {
        render(<SelectWrapper required />);
        const comboboxElt = screen.getByRole('combobox', { name: label + '*' });
        screen.getByText('*requis', { exact: false });
        expect(comboboxElt).toBeRequired();
    });

    it('should be disabled', () => {
        render(<SelectWrapper disabled />);
        const comboboxElt = screen.getByRole('combobox');
        expect(comboboxElt).toBeDisabled();
    });

    it('should open and close the listbox by clicking the button', async () => {
        const user = userEvent.setup();
        render(<SelectWrapper />);

        const comboboxElt = screen.getByRole('combobox', { name: label });

        await user.click(comboboxElt);
        screen.getByRole('listbox');

        await user.click(comboboxElt);
        expect(screen.queryByRole('listbox')).toBeNull();
    });

    it('should open and close the listbox using the enter key', async () => {
        const user = userEvent.setup();
        render(<SelectWrapper />);

        const comboboxElt = screen.getByRole('combobox', { name: label });
        await user.tab();
        expect(comboboxElt).toHaveFocus();

        await user.keyboard('{Enter}');
        screen.getByRole('listbox');

        await user.keyboard('{Enter}');
        expect(screen.queryByRole('listbox')).toBeNull();
    });

    it('should open and close the listbox using the Alt and up or down arrow keys', async () => {
        const user = userEvent.setup();
        render(<SelectWrapper />);

        const comboboxElt = screen.getByRole('combobox', { name: label });
        await user.tab();
        expect(comboboxElt).toHaveFocus();

        await user.keyboard('{Alt>}{ArrowDown}{/Alt}');
        screen.getByRole('listbox');

        await user.keyboard('{Alt>}{ArrowUp}{/Alt}');
        expect(screen.queryByRole('listbox')).toBeNull();
    });

    it('should close the listbox by clicking outside', async () => {
        const user = userEvent.setup();
        render(<SelectWrapper />);

        const comboboxElt = screen.getByRole('combobox', { name: label });

        await user.click(comboboxElt);
        screen.getByRole('listbox');

        const outElt = screen.getByTestId('out');
        await user.click(outElt);
        expect(screen.queryByRole('listbox')).toBeNull();
    });

    it('should close the listbox by tabbing out', async () => {
        const user = userEvent.setup();
        render(<SelectWrapper />);

        const comboboxElt = screen.getByRole('combobox', { name: label });
        await user.tab();
        expect(comboboxElt).toHaveFocus();

        await user.keyboard('{Enter}');
        screen.getByRole('listbox');

        await user.tab();
        expect(screen.queryByRole('listbox')).toBeNull();
    });

    it('should close the listbox using the escape key', async () => {
        const user = userEvent.setup();
        render(<SelectWrapper />);

        const comboboxElt = screen.getByRole('combobox', { name: label });
        await user.tab();
        expect(comboboxElt).toHaveFocus();

        await user.keyboard('{Enter}');
        screen.getByRole('listbox');

        await user.keyboard('{Escape}');
        expect(screen.queryByRole('listbox')).toBeNull();
    });

    it('should have the right options, ordered alphabetically', async () => {
        const user = userEvent.setup();
        render(<SelectWrapper />);

        const comboboxElt = screen.getByRole('combobox', { name: label });

        await user.click(comboboxElt);
        screen.getByRole('listbox');

        const optionElts = screen.getAllByRole('option');
        for (let i = 0; i < optionElts.length; i++) {
            expect(optionElts[i]).toHaveTextContent(ordered_labels[i]);
        }
    });

    it('should select the value by clicking on it and close the listbox', async () => {
        const user = userEvent.setup();
        render(<SelectWrapper />);

        const comboboxElt = screen.getByRole('combobox', { name: label });

        await user.click(comboboxElt);
        screen.getByRole('listbox');

        const optionElts = screen.getAllByRole('option');
        const firstButton = getByRole(optionElts[0], 'button');
        await user.click(firstButton);
        expect(mockOnChange).toHaveBeenCalled();
        expect(mockOnChange).toHaveBeenCalledWith(
            findValue(optionElts[0].textContent),
        );

        expect(screen.queryByRole('listbox')).toBeNull();
    });

    it('should change the value with the up / down arrows', async () => {
        const user = userEvent.setup();
        render(<SelectWrapper />);

        const comboboxElt = screen.getByRole('combobox', { name: label });

        await user.click(comboboxElt);
        screen.getByRole('listbox');

        const optionElts = screen.getAllByRole('option');
        const firstButton = getByRole(optionElts[0], 'button');
        await user.click(firstButton);
        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(optionElts[0].textContent),
        );
        await user.keyboard('{ArrowDown}'); // 1
        expect(mockOnChange).toHaveBeenCalledTimes(2);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(optionElts[1].textContent),
        );
        await user.keyboard('{ArrowDown}'); // 2
        expect(mockOnChange).toHaveBeenCalledTimes(3);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(optionElts[2].textContent),
        );
        await user.keyboard('{ArrowUp}'); // 1
        expect(mockOnChange).toHaveBeenCalledTimes(4);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(optionElts[1].textContent),
        );
    });

    it('should change the value with the home / end keys', async () => {
        const user = userEvent.setup();
        render(<SelectWrapper />);

        const comboboxElt = screen.getByRole('combobox', { name: label });

        await user.click(comboboxElt);
        screen.getByRole('listbox');

        const optionElts = screen.getAllByRole('option');
        const firstButton = getByRole(optionElts[0], 'button');
        await user.click(firstButton);
        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(optionElts[0].textContent),
        );
        await user.keyboard('{End}'); // Last
        expect(mockOnChange).toHaveBeenCalledTimes(2);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(optionElts.at(-1).textContent),
        );
        await user.keyboard('{Home}'); // 0
        expect(mockOnChange).toHaveBeenCalledTimes(3);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(optionElts[0].textContent),
        );
    });

    it('should change the value with the letters keys', async () => {
        const user = userEvent.setup();
        render(<SelectWrapper />);

        const comboboxElt = screen.getByRole('combobox', { name: label });

        await user.click(comboboxElt);
        screen.getByRole('listbox');

        const optionElts = screen.getAllByRole('option');
        const firstButton = getByRole(optionElts[0], 'button');
        await user.click(firstButton);
        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(optionElts[0].textContent),
        );
        await user.keyboard(`{${ordered_labels.at(-1).charAt(0)}}`); // Last
        expect(mockOnChange).toHaveBeenCalledTimes(2);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(optionElts.at(-1).textContent),
        );
        await user.keyboard(`{${ordered_labels[0].charAt(0)}}`); // 0
        expect(mockOnChange).toHaveBeenCalledTimes(3);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(optionElts[0].textContent),
        );
        await user.keyboard(`{${ordered_labels[0].charAt(0)}}`); // 1: 0 and 1 starts with the same letter, so it cycles
        expect(mockOnChange).toHaveBeenCalledTimes(4);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(optionElts[1].textContent),
        );
    });

    it('should change the value when the listbox is closed', async () => {
        const user = userEvent.setup();
        render(<SelectWrapper />);

        const comboboxElt = screen.getByRole('combobox', { name: label });
        await user.tab();
        expect(comboboxElt).toHaveFocus();
        expect(screen.queryByRole('listbox')).toBeNull();

        await user.keyboard('{Home}'); // 0
        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(ordered_labels[0]),
        );
        await user.keyboard('{ArrowDown}'); // 1
        expect(mockOnChange).toHaveBeenCalledTimes(2);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(ordered_labels[1]),
        );
        await user.keyboard('{ArrowUp}'); // 0
        expect(mockOnChange).toHaveBeenCalledTimes(3);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(ordered_labels[0]),
        );
        await user.keyboard('{End}'); // Last
        expect(mockOnChange).toHaveBeenCalledTimes(4);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(ordered_labels.at(-1)),
        );
        await user.keyboard(`{${ordered_labels[0].charAt(0)}}`); // 0
        expect(mockOnChange).toHaveBeenCalledTimes(5);
        expect(mockOnChange).toHaveBeenLastCalledWith(
            findValue(ordered_labels[0]),
        );
    });
});
