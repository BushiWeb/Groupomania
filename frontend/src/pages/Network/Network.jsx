import { useOutletContext } from 'react-router-dom';
import style from './Network.module.css';
import { useState } from 'react';
import InfiniteUserList from '../../features/users/InfiniteUserList/InfiniteUserList';

/** Net<ork page page, inserted within the global UI */
export default function Network() {
    const { id, className } = useOutletContext();

    // Get the ref for the container element but rerender the children when the ref changes
    const [containerRef, setContainerRef] = useState(null);
    const mainRef = (node) => {
        if (node) {
            setContainerRef(node);
        }
    };

    return <main id={id} className={`${className} ${style.network}`} ref={mainRef}>
        <h1 className={style.heading}>Réseau</h1>
        <InfiniteUserList containerElt={containerRef} errorClassName={style.error} className={style.users}/>
    </main>;
}