import { useOutletContext } from 'react-router-dom';
import PostsList from '../../features/posts/PostsList';
import style from './Home.module.css';

/** Home page, inserted within the global UI */
export default function Home() {
    const { id, className } = useOutletContext();
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
            usersLiked: [1, 2, 3],
            likes: 3,
        },
        {
            postId: 2,
            title: 'Ipsum',
            message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit architecto dolorem in recusandae facilis voluptas culpa, aliquam explicabo voluptatem officiis beatae, quis, ipsam vitae alias perspiciatis inventore quas neque repellendus.',
            imageUrl: 'https://picsum.photos/150/400',
            writer: {
                writerId: 720,
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
        {
            postId: 4,
            title: 'Lorem',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iure alias perspiciatis provident recusandae reprehenderit voluptate ab, suscipit doloribus libero totam cumque voluptatum velit ea id architecto? Quo, at sed.',
            imageUrl: 'https://picsum.photos/300/300',
            writer: {
                writerId: 720,
                email: 'test@gmail.com',
            },
            creationDate: '2023-08-14T14:39:11Z',
            lastUpdateDate: '2023-08-15T14:39:11Z',
            usersLiked: [1, 2, 3],
            likes: 3,
        },
        {
            postId: 5,
            title: 'Ipsum',
            message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit architecto dolorem in recusandae facilis voluptas culpa, aliquam explicabo voluptatem officiis beatae, quis, ipsam vitae alias perspiciatis inventore quas neque repellendus.',
            imageUrl: 'https://picsum.photos/250/400',
            writer: {
                writerId: 720,
                email: 'test@gmail.com',
            },
            creationDate: '2023-07-13T14:39:11Z',
            usersLiked: [1, 2, 720],
            likes: 3,
        },
        {
            postId: 6,
            title: 'Dolor sit',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laudantium sequi ad laboriosam perspiciatis, officia, doloribus aperiam iure qui quos in non saepe? Obcaecati enim animi recusandae quaerat. Aspernatur, ducimus.',
            writer: {
                writerId: 2,
                email: 'test2@gmail.com',
            },
            creationDate: '2023-07-13T14:39:11Z',
        },
    ];
    return <main id={id} className={`${className} ${style.home}`}>
        <h1 className={style.heading}>Accueil</h1>
        <PostsList posts={posts} className={style.posts}/>
    </main>;
}