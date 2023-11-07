import { useLocation, useNavigate } from 'react-router-dom';
import { useGetPrevNavigationInfo } from '../../features/navigationInfo/useGetPrevNavigationInfo';
import { useBreakpoint } from '../../hooks/useBreakpoints';
import style from './Network.module.css';
import { useEffect, useState } from 'react';
import { BP_ID } from '../../context/BreakpointContext';

/** Net<ork page page, inserted within the global UI */
export default function EmptyUser() {
    const breakpoint = useBreakpoint();
    const { prevState, key } = useGetPrevNavigationInfo();
    const navigate = useNavigate();
    const { key: currentKey } = useLocation();
    const [isRedirecting, setIsRedirecting] = useState(true);

    useEffect(() => {
        if (prevState?.userId && breakpoint >= BP_ID.xxl && key === currentKey) {
            navigate(`/reseau/${prevState.userId}`, { replace: true });
        } else {
            setIsRedirecting(false);
        }
    }, [breakpoint, prevState, navigate, key, currentKey]);

    if (isRedirecting) {
        return;
    }

    return <div className={style.userPlaceholder}>
        <p>Veuillez choisir un utilisateur dans la liste ci-contre pour voir ses informations et ses posts.</p>
    </div>;
}