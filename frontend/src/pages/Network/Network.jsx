import { useState } from 'react';
import { Outlet, useOutletContext, useParams } from 'react-router-dom';
import InfiniteUserList from '../../features/users/InfiniteUserList/InfiniteUserList';
import { useBreakpoint } from '../../hooks/useBreakpoints';
import style from './Network.module.css';
import { useSetNavigationInfo } from '../../features/navigationInfo/useSetNavigationInfo';
import { useGetPrevNavigationInfo } from '../../features/navigationInfo/useGetPrevNavigationInfo';
import { BP_ID } from '../../context/BreakpointContext';
import { useChangePageTitle } from '../../hooks/useChangePageTitle';

export const PAGE_NAME = 'Network';

/** Net<ork page page, inserted within the global UI */
export default function Network() {
    const { id, className } = useOutletContext();
    const breakpoint = useBreakpoint();
    const { userId: paramUserId } = useParams();
    const { prevState } = useGetPrevNavigationInfo();
    const userId = paramUserId || prevState?.userId;
    useSetNavigationInfo(PAGE_NAME);

    useChangePageTitle('Groupomania - Réseau');

    // Get the ref for the container element but rerender the children when the ref changes
    const [containerRef, setContainerRef] = useState(null);
    const mainRef = (node) => {
        if (node) {
            setContainerRef(node);
        }
    };

    return (
        <main
            id={id}
            className={`${className} ${style.network}`}
            {...(breakpoint < 4 && { ref: mainRef })}
        >
            <h1 className={style.heading}>Réseau</h1>
            <InfiniteUserList
                containerElt={containerRef}
                errorClassName={style.error}
                className={style.users}
                {...(breakpoint >= BP_ID.xxl && { ref: mainRef })}
                selectedUserId={userId && parseInt(userId)}
            />
            {breakpoint >= BP_ID.xxl && (
                <Outlet context={{ className: style.user }} />
            )}
        </main>
    );
}
