import { useOutletContext } from 'react-router-dom';
import style from './Home.module.css';
import { useState } from 'react';
import InfinitePostFeed from '../../features/posts/InifinitePostFeed/InfinitePostFeed';

/** Home page, inserted within the global UI */
export default function Home() {
    const { id, className } = useOutletContext();
    const [containerRef, setContainerRef] = useState(null);
    const mainRef = (node) => {
        if (node) {
            setContainerRef(node);
        }
    };

    return <main id={id} className={`${className} ${style.home}`} ref={mainRef}>
        <h1 className={style.heading}>Accueil</h1>
        <InfinitePostFeed containerElt={containerRef} errorClassName={style.error} className={style.posts}/>
    </main>;
}