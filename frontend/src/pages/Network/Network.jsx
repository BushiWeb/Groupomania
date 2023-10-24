import { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import InfiniteUserList from '../../features/users/InfiniteUserList/InfiniteUserList';
import { useBreakpoint } from '../../hooks/useBreakpoints';
import style from './Network.module.css';

/** Net<ork page page, inserted within the global UI */
export default function Network() {
    const { id, className } = useOutletContext();
    const breakpoint = useBreakpoint();

    // Get the ref for the container element but rerender the children when the ref changes
    const [containerRef, setContainerRef] = useState(null);
    const mainRef = (node) => {
        if (node) {
            setContainerRef(node);
        }
    };

    return <main id={id} className={`${className} ${style.network}`} {...breakpoint < 4 && { ref: mainRef }}>
        <h1 className={style.heading}>Réseau</h1>
        <InfiniteUserList
            containerElt={containerRef}
            errorClassName={style.error}
            className={style.users}
            {...breakpoint >= 4 && { ref: mainRef }}
        />
        {breakpoint >= 4 && <Outlet context={{ className: style.user }}/>}
    </main>;
}