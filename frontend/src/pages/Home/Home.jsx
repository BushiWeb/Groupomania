import { useOutletContext } from 'react-router-dom';
import PostsList from '../../features/posts/PostsList';
import style from './Home.module.css';
import { useInfiniteScroll } from './useInfiniteScroll';

/** Home page, inserted within the global UI */
export default function Home() {
    const { id, className } = useOutletContext();
    const {
        posts,
        mainRef,
        isFetching,
        isFetchingNextPage,
        isError,
    } = useInfiniteScroll();

    return <main id={id} className={`${className} ${style.home}`} ref={mainRef}>
        <h1 className={style.heading}>Accueil</h1>
        {
            !isError ?
                <PostsList posts={posts} className={style.posts} busy={isFetching || isFetchingNextPage}/> :
                <p className={style.error}>
                    Une erreur est survenue lors du chargement des données.
                    Vous pouvez essayer de recharger la page. Si le problème persiste,
                    n'hésitez pas à vous rapprocher d'un administrateur.
                </p>
        }
    </main>;
}