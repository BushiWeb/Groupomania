import Post from './Post.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '../../../utils/tests/user-event.js';
import '@testing-library/jest-dom';

describe('Post component test suite', () => {
    const postInformations = {
        postId: 13,
        title: 'Test post',
        message: 'Irure sunt laborum et ea aliquip do duis ea ipsum.',
        authorEmail: 'test@email.com',
        date: '2023-05-21T09:27:56Z',
        likeNumber: 113,
        posinset: 3,
        setsize: 10,
        onLike: jest.fn(),
        onMoreActions: jest.fn(),
    };

    beforeEach(() => {
        postInformations.onLike.mockClear();
        postInformations.onMoreActions.mockClear();
    });

    it('should render', () => {
        render(<Post {...postInformations}/>);
    });

    it('should display the right post informations', () => {
        render(<Post {...postInformations}/>);

        screen.getByRole('heading', { name: postInformations.title, level: 2 });
        screen.getByText(postInformations.message);
        screen.getByText(postInformations.authorEmail);
        const timeElt = screen.getByText(/\d{1,2} (?:janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre) \d{4} à \d{2}:\d{2}/);
        const likeButton = screen.getByRole('button', { name: `Aimer, ${postInformations.likeNumber} j'aimes` });
        const optionButton = screen.queryByRole('button', { name: 'Plus d\'actions' });
        const postElt = screen.getByLabelText(postInformations.title, { selector: 'article' });

        expect(optionButton).toBeNull();
        expect(likeButton).toHaveAttribute('aria-pressed', 'false');
        expect(timeElt).toHaveAttribute('dateTime', postInformations.date);
        expect(postElt).toHaveAttribute('aria-posinset', `${postInformations.posinset}`);
        expect(postElt).toHaveAttribute('aria-setsize', `${postInformations.setsize}`);
    });

    it('should display the like', () => {
        render(<Post {...postInformations} liked={true}/>);
        const likeButton = screen.getByRole('button', { name: `Ne plus aimer, ${postInformations.likeNumber} j'aimes` });
        expect(likeButton).toHaveAttribute('aria-pressed', 'true');
    });

    it('should display the more action buttons', () => {
        render(<Post {...postInformations} hasRights={true}/>);
        screen.getByRole('button', { name: 'Plus d\'actions' });
    });

    it('should have an image', () => {
        const imageUrl = 'image.com';
        const { container } = render(<Post {...postInformations} imageUrl={imageUrl}/>);

        const imgElt = container.querySelector('img');

        expect(imgElt).toHaveAttribute('src', imageUrl);
        expect(imgElt).toHaveAttribute('alt', '');
    });

    it('should execute the function when clicking on the like button', async () => {
        const user = userEvent.setup();
        render(<Post {...postInformations}/>);
        const likeButton = screen.getByRole('button', { name: `Aimer, ${postInformations.likeNumber} j'aimes` });

        await user.click(likeButton);
        expect(postInformations.onLike).toHaveBeenCalled();
    });

    it('should execute the onMoreActions functions when clicking on the more actions button', async () => {
        const user = userEvent.setup();
        render(<Post {...postInformations} hasRights/>);
        const moreButton = screen.getByRole('button', { name: /actions/ });

        await user.click(moreButton);
        expect(postInformations.onMoreActions).toHaveBeenCalled();
    });
});