import Lightbox from './Lightbox';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import userEvent from '../../utils/tests/user-event.js';
//import '@testing-library/jest-dom';

// Jest dom is not currently supporting the dialog element fully, running those tests is impossible
describe.skip('Lightbox component test suite', () => {
    const image = {
        src: 'https://picsum.photos/200/300',
        alt: 'Some image',
    };

    const mockOnClose = jest.fn();

    it('should render the image and the close button when opened', async () => {
        render(<Lightbox {...image} onClose={mockOnClose} open/>);

        await waitFor(() => {
            const dialogElt = screen.getByRole('dialog', { hidden: true });
            const imageElt = screen.getByAltText(image.alt);
            expect(dialogElt).toBeVisible();
            expect(imageElt).toHaveFocus();
        });
    });

    it('should render closed', async () => {
        render(<Lightbox {...image} onClose={mockOnClose}/>);

        await waitFor(() => {
            const dialogElt = screen.getByRole('dialog', { hidden: true });
            expect(dialogElt).not.toBeVisible();
        });
    });

    it('should close on escape and execute the onClose function', async () => {
        const user = userEvent.setup();
        render(<Lightbox {...image} onClose={mockOnClose} open/>);

        let dialogElt;

        await waitFor(() => {
            dialogElt = screen.getByRole('dialog', { hidden: true });
            expect(dialogElt).toBeVisible();
        });

        await user.keyboard('{Escape}');
        await waitFor(() => {
            expect(dialogElt).not.toBeVisible();
            expect(mockOnClose).toHaveBeenCalled();
        });
    });

    it('should close when clicking on the button and execute the onClose function', async () => {
        const user = userEvent.setup();
        render(<Lightbox {...image} onClose={mockOnClose} open/>);

        let dialogElt;

        await waitFor(() => {
            dialogElt = screen.getByRole('dialog', { hidden: true });
            expect(dialogElt).toBeVisible();
        });

        const closeButton = screen.getByRole('button', { name: /Fermer/ });

        await user.click(closeButton);
        await waitFor(() => {
            expect(dialogElt).not.toBeVisible();
            expect(mockOnClose).toHaveBeenCalled();
        });
    });

    it('should close when clicking on the backdrop and execute the onClose function', async () => {
        const user = userEvent.setup();
        render(<Lightbox {...image} onClose={mockOnClose} open/>);

        let dialogElt;

        await waitFor(() => {
            dialogElt = screen.getByRole('dialog', { hidden: true });
            expect(dialogElt).toBeVisible();
        });

        await user.click(document.body);
        await waitFor(() => {
            expect(dialogElt).not.toBeVisible();
            expect(mockOnClose).toHaveBeenCalled();
        });
    });
});