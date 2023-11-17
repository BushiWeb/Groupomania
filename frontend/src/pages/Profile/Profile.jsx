import { useOutletContext } from 'react-router-dom';
import style from './Profile.module.css';
import { useContext, useEffect, useState } from 'react';
import InfinitePostFeed from '../../features/posts/InifinitePostFeed/InfinitePostFeed';
import { fabContext } from '../../context/fabContext';
import UpsertPostDialog from '../../features/posts/UpsertPostDialog/UpsertPostDialog';
import { useSetNavigationInfo } from '../../features/navigationInfo/useSetNavigationInfo';
import { useSelector } from 'react-redux';
import { selectUserId } from '../../utils/selectors';
import UserHeader from '../../features/users/UserHeader/UserHeader';
import { useBreakpoint } from '../../hooks/useBreakpoints';
import { BP_ID } from '../../context/BreakpointContext';
import useGetUser from '../../features/users/getUser/useGetUser';
import { useChangePageTitle } from '../../hooks/useChangePageTitle';

export const PAGE_NAME = 'Profile';

/** Home page, inserted within the global UI */
export default function Profile() {
    const { id, className } = useOutletContext();
    useSetNavigationInfo(PAGE_NAME);
    const breakpoint = useBreakpoint();
    const userId = useSelector(selectUserId);
    const { data, isLoading, isError } = useGetUser(userId);

    useChangePageTitle('Groupomania - Profil');

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

    return (
        <main id={id} className={`${className} ${style.profile}`} ref={mainRef}>
            <UserHeader
                email={data?.email}
                userId={userId}
                roleId={data?.role.roleId}
                className={style.header}
                {...(breakpoint > BP_ID.compact && { small: true })}
                busy={isLoading}
                errorMessage={
                    isError ?
                        "Une erreur est survenue lors du chargement des données. Vous pouvez essayer de recharger la page. Si le problème persiste, n'hésitez pas à vous rapprocher d'un administrateur."
                    :   undefined
                }
            />
            <InfinitePostFeed
                containerElt={containerRef}
                errorClassName={style.error}
                className={style.posts}
                userId={userId}
            />
            {isCreatePostOpen && (
                <UpsertPostDialog
                    isOpen={isCreatePostOpen}
                    setIsOpen={setIsCreatePostOpen}
                />
            )}
        </main>
    );
}
