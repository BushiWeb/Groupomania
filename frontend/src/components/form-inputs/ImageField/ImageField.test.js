import ImageField from './ImageField.jsx';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '../../../utils/tests/user-event.js';
import '../../../utils/tests/window-mocks.js';
import '@testing-library/jest-dom';

describe('ImageField component test suite', () => {
    const emptyLabel = 'Test empty';
    const selectedLabel = 'Test selected';
    const mockOnChange = jest.fn();
    const fieldRef = { current: null };
    const props = {
        emptyLabel,
        selectedLabel,
        onChange: mockOnChange,
        ref: fieldRef,
    };
    const fileName = 'testfile.png';
    const file = new File(['test file'], fileName, { type: 'image/png' });
    const fileUrl = 'https://picsum.photos/200/300';

    afterEach(() => {
        mockOnChange.mockClear();
    });

    it('should render with the right label', () => {
        render(<ImageField {...props} />);
        screen.getByRole('button', { name: emptyLabel });
    });

    it('should display the image and have the right label when the image is a File', () => {
        render(<ImageField {...props} image={file} />);

        screen.getByRole('button', { name: selectedLabel });
        screen.getByRole('button', { name: /Supprimer/ });
        screen.getByAltText(fileName);
    });

    it('should display the image and have the right label when the image is a URL', () => {
        render(<ImageField {...props} image={fileUrl} />);

        screen.getByRole('button', { name: selectedLabel });
        screen.getByRole('button', { name: /Supprimer/ });
        screen.getByAltText('Image originale');
    });

    it('should execute the onChange function with the file when the user chooses an image', async () => {
        const user = userEvent.setup();
        render(<ImageField {...props} />);
        screen.getByRole('button', { name: emptyLabel });

        await user.upload(fieldRef.current, file);
        await waitFor(() => {
            expect(mockOnChange).toHaveBeenCalled();
            expect(mockOnChange).toHaveBeenCalledWith(file);
        });
    });

    it('should execute the onChange function with null when the user deletes the image', async () => {
        const user = userEvent.setup();
        render(<ImageField {...props} image={file} />);
        screen.getByAltText(fileName);

        const deleteButton = screen.getByRole('button', { name: /Supprimer/ });
        await user.click(deleteButton);
        await waitFor(() => {
            expect(mockOnChange).toHaveBeenCalled();
            expect(mockOnChange).toHaveBeenCalledWith(null);
        });
    });

    it('should have a support text', () => {
        const supportText = 'Support text';
        render(<ImageField {...props} supportText={supportText} />);
        screen.getByText(supportText);
        screen.getByLabelText(supportText);
    });

    it('should have an error message', () => {
        const errorMessage = 'Error message';
        render(<ImageField {...props} errorMessage={errorMessage} />);
        screen.getByText(errorMessage);
        screen.getByRole('alert', { name: errorMessage });
    });

    it('should prioritize the error message over the support text', () => {
        const errorMessage = 'Error message';
        const supportText = 'Support text';
        render(
            <ImageField
                {...props}
                errorMessage={errorMessage}
                supportText={supportText}
            />,
        );
        screen.getByText(errorMessage);
        screen.getByRole('alert', { name: errorMessage });
        const supportTextElt = screen.queryByText(supportText);
        expect(supportTextElt).toBeNull();
    });
});
