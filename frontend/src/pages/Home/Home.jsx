import { useOutletContext } from 'react-router-dom';
import style from './Home.module.css';
import {
    useContext, useEffect, useState,
} from 'react';
import InfinitePostFeed from '../../features/posts/InifinitePostFeed/InfinitePostFeed';
import { fabContext } from '../../context/fabContext';
import UpsertPostDialog from '../../features/posts/UpsertPostDialog/UpsertPostDialog';
import { useSetNavigationInfo } from '../../features/navigationInfo/useSetNavigationInfo';
import { useChangePageTitle } from '../../hooks/useChangePageTitle';

export const PAGE_NAME = 'Home';

/** Home page, inserted within the global UI */
export default function Home() {
    const { id, className } = useOutletContext();
    useSetNavigationInfo(PAGE_NAME);

    useChangePageTitle('Groupomania - Accueil');

    // Get the ref for the container element but rerender the children when the ref changes
    const [containerRef, setContainerRef] = useState(null);
    const mainRef = (node) => {
        if (node) {
            setContainerRef(node);
        }
    };

    // Add the fab action
    const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
    const { setFab } = useContext(fabContext);
    useEffect(() => {
        setFab({
            icon: 'edit',
            label: 'Créer un post',
            onClick: () => {
                setIsCreatePostOpen(true);
            },
        });

        return () => {
            setFab(undefined);
        };
    }, [setFab, setIsCreatePostOpen]);

    return <main id={id} className={`${className} ${style.home}`} ref={mainRef}>
        <h1 className={style.heading}>Accueil</h1>
        <InfinitePostFeed containerElt={containerRef} errorClassName={style.error} className={style.posts}/>
        {isCreatePostOpen && <UpsertPostDialog isOpen={isCreatePostOpen} setIsOpen={setIsCreatePostOpen}/>}
    </main>;
}