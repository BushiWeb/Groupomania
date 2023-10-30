import { useOutletContext, useParams } from 'react-router-dom';
import style from './User.module.css';
import { useId, useState } from 'react';
import InfinitePostFeed from '../../features/posts/InifinitePostFeed/InfinitePostFeed';
import UserHeader from '../../features/users/UserHeader/UserHeader';
import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import { simpleFetch } from '../../utils/fetch';
import { useHandleRequestError } from '../../hooks/useHandleRequestError';

/**
 * User page.
 * This component is used either at top navigation level on mobile,
 *  inserted in the UI on tablet or
 *  inserted in the network page on desktop.
 */
export default function User({ topLevelPage }) {
    const { userId: stringUserId } = useParams();
    const userId = parseInt(stringUserId);
    const outletContext = useOutletContext();
    const mainId = useId();

    // Choose the layout, depending on the nesting of the pages
    let Wrapper, Content;

    if (topLevelPage) {
        Wrapper = 'div';
        Content = 'main';
    } else if (outletContext?.id) {
        Wrapper = 'main';
        Content = 'div';
    } else {
        Wrapper = 'section';
        Content = 'div';
    }

    // User request and header
    const {
        data,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['users', userId],
        queryFn: async () => simpleFetch({ url: `/data/users/${userId}` }),
    });

    const status = useHandleRequestError(isError, error);

    // Get the ref for the container element but rerender the children when the ref changes
    const [containerRef, setContainerRef] = useState(null);
    const ref = (node) => {
        if (node) {
            setContainerRef(node);
        }
    };

    return <Wrapper
        id={outletContext?.id}
        className={`${style.user} ${outletContext?.className || ''}`}
        {...Wrapper === 'section' &&
        {
            'aria-label': isLoading || isError ?
                'Profil de l\'utilisateur' :
                `Profil de l'utilisateur ${data.email}`,
        }
        }
    >
        <UserHeader
            email={data?.email}
            admin={data?.role.roleId === 1}
            userId={userId}
            backArrow={Wrapper !== 'section'}
            topLevelHeader={topLevelPage}
            {...Content === 'main' && { mainContentId: mainId }}
            className={style.userHeader}
            busy={isLoading}
            errorMessage={isError ?
                status === 404 ?
                    'L\'utilisateur recherché ne peut pas être trouvé. Il se peut qu\'il ai été supprimé.' :
                    'Une erreur est survenue lors du chargement des données. Vous pouvez essayer de recharger la page. Si le problème persiste, n\'hésitez pas à vous rapprocher d\'un administrateur.' :
                undefined}
        />

        <Content className={style.content} ref={ref} {...topLevelPage && !outletContext?.id && { id: mainId }}>
            <InfinitePostFeed
                containerElt={containerRef}
                errorClassName={style.error}
                className={style.posts}
                userId={parseInt(userId)}
                vertical={Wrapper === 'section'}
            />
        </Content>
    </Wrapper>;
}

User.defaultProps = {
    topLevelPage: false,
};

User.propTypes = {
    /* Weither the page is top level or not, default to false */
    topLevelPage: PropTypes.bool,
};