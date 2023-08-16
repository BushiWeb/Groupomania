import { getByRole, queryByRole, screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import userEvent from '../../utils/tests/user-event.js';
import '@testing-library/jest-dom';
import PostsList from './PostsList.jsx';

describe('PostsList component test suite', () => {
    const posts = [
        {
            postId: 1,
            title: 'Lorem',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iure alias perspiciatis provident recusandae reprehenderit voluptate ab, suscipit doloribus libero totam cumque voluptatum velit ea id architecto? Quo, at sed.',
            imageUrl: 'https://picsum.photos/200/300',
            writer: {
                writerId: 720,
                email: 'test@gmail.com',
            },
            creationDate: '2023-08-14T14:39:11Z',
            lastUpdateDate: '2023-08-15T14:39:11Z',
            usersLiked: [40, 1, 2, 3],
            likes: 3,
        },
        {
            postId: 2,
            title: 'Ipsum',
            message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit architecto dolorem in recusandae facilis voluptas culpa, aliquam explicabo voluptatem officiis beatae, quis, ipsam vitae alias perspiciatis inventore quas neque repellendus.',
            imageUrl: 'https://picsum.photos/150/400',
            writer: {
                writerId: 1,
                email: 'test@gmail.com',
            },
            creationDate: '2023-07-13T14:39:11Z',
            usersLiked: [1, 2, 720],
            likes: 3,
        },
        {
            postId: 3,
            title: 'Dolor sit',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laudantium sequi ad laboriosam perspiciatis, officia, doloribus aperiam iure qui quos in non saepe? Obcaecati enim animi recusandae quaerat. Aspernatur, ducimus.',
            writer: {
                writerId: 2,
                email: 'test2@gmail.com',
            },
            creationDate: '2023-07-13T14:39:11Z',
        },
    ];

    it('should render', () => {
        render(<PostsList posts={posts}/>);

        const postsElts = screen.getAllByRole('article');
        expect(postsElts).toHaveLength(posts.length);

        const feedElt = screen.getByRole('feed');
        expect(feedElt).toHaveAttribute('aria-busy', 'false');
    });

    it('should allow more action if the user owns the posts', () => {
        render(<PostsList posts={posts}/>, { preloadedState: { user: { userId: posts[0].writer.writerId, roleId: 2 }}});

        const ownedPost = screen.getByRole('article', { name: posts[0].title });
        getByRole(ownedPost, 'button', { name: /Plus/ });

        const otherPost = screen.getByRole('article', { name: posts[1].title });
        const otherMoreButton = queryByRole(otherPost, 'button', { name: /Plus/ });
        expect(otherMoreButton).toBeNull();
    });

    it('should allow more actions if the user is an admin', () => {
        render(<PostsList posts={posts}/>, { preloadedState: { user: { userId: 666, roleId: 1 }}});
        const postsElts = screen.getAllByRole('article');

        for (const post of postsElts) {
            getByRole(post, 'button', { name: /Plus/ });
        }
    });

    it('should be identified as busy', () => {
        render(<PostsList posts={posts} busy/>);
        const feedElt = screen.getByRole('feed');

        expect(feedElt).toHaveAttribute('aria-busy', 'true');
    });

    it('should be navigable using the keyboard', async () => {
        const user = userEvent.setup();
        render(<PostsList posts={posts}/>);
        const postsElts = screen.getAllByRole('article');

        await user.tab();
        expect(postsElts[0]).toHaveFocus();

        // Focus previous and next elements with arrow keys
        await user.keyboard('{ArrowDown}');
        expect(postsElts[1]).toHaveFocus();
        await user.keyboard('{ArrowUp}');
        expect(postsElts[0]).toHaveFocus();

        // Focus previous and next elements with page keys
        await user.keyboard('{PageDown}');
        expect(postsElts[1]).toHaveFocus();
        await user.keyboard('{PageUp}');
        expect(postsElts[0]).toHaveFocus();

        // Focus last element
        await user.keyboard('{Control>}{End}{/Control}');
        expect(postsElts[2]).toHaveFocus();

        // No possible navigation after the last element
        await user.keyboard('{ArrowDown}');
        expect(postsElts[2]).toHaveFocus();
        await user.keyboard('{PageDown}');
        expect(postsElts[2]).toHaveFocus();

        // Focus first element
        await user.keyboard('{Control>}{Home}{/Control}');
        expect(postsElts[0]).toHaveFocus();

        // No possible navigation before the first element
        await user.keyboard('{ArrowUp}');
        expect(postsElts[0]).toHaveFocus();
        await user.keyboard('{PageUp}');
        expect(postsElts[0]).toHaveFocus();

        // Focus inside of the elements
        const likeButtonElt = getByRole(postsElts[0], 'button', { name: /Aimer/ });
        await user.tab();
        expect(likeButtonElt).toHaveFocus();

        // Use shortcuts even when focused inside of an element
        await user.keyboard('{Control>}{End}{/Control}');
        expect(postsElts[2]).toHaveFocus();
    });

    it('should have the first post liked by the user', () => {
        render(<PostsList posts={posts}/>, { preloadedState: { user: { userId: posts[0].usersLiked[0], roleId: 2 }}});

        const likedPost = screen.getByRole('article', { name: posts[0].title });
        getByRole(likedPost, 'button', { name: /Ne plus aimer/ });

        const otherPost = screen.getByRole('article', { name: posts[1].title });
        const otherLikeButton = queryByRole(otherPost, 'button', { name: /Ne plus aimer/ });
        expect(otherLikeButton).toBeNull();
        getByRole(otherPost, 'button', { name: /Aimer/ });
    });
});