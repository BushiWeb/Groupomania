import ImageWithLighbox from './ImageWithLightbox';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import userEvent from '../../utils/tests/user-event.js';
//import '@testing-library/jest-dom';

// Jest dom is not currently supporting the dialog element fully, running those tests is impossible
describe.skip('ImageWithLightbox component test suite', () => {
    const image = {
        src: 'https://picsum.photos/200/300',
        alt: 'Some image',
    };

    const lightbox = {
        lightboxLabel: 'label',
        lightboxDescription: 'description',
    };

    it('should rendre the image', () => {
        render(<ImageWithLighbox {...image}/>);
        screen.getByAltText(image.alt);
    });

    it('should open the lightbox when clicking on the image', async () => {
        const user = userEvent.setup();
        render(<ImageWithLighbox {...image} {...lightbox}/>);
        const imageElt = screen.getByAltText(image.alt);

        await user.click(imageElt);
        await waitFor(() => {
            const dialogElt = screen.getByRole('dialog', { hidden: true, name: lightbox.lightboxLabel });
            expect(dialogElt).toBeVisible();
            expect(dialogElt).toHaveAttribute('aria-describedby', lightbox.lightboxDescription);
        });
    });

    it('should close the lightbox', async () => {
        const user = userEvent.setup();
        render(<ImageWithLighbox {...image} {...lightbox}/>);
        const imageElt = screen.getByAltText(image.alt);

        let dialogElt;

        await user.click(imageElt);
        await waitFor(() => {
            dialogElt = screen.getByRole('dialog', { hidden: true, name: lightbox.lightboxLabel });
            expect(dialogElt).toBeVisible();
        });

        await user.keyboard('{Escape}');
        await waitFor(() => {
            expect(dialogElt).not.toBeVisible();
        });
    });
});