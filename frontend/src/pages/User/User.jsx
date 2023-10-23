import { useOutletContext, useParams } from 'react-router-dom';
import style from './User.module.css';
import { useId, useState } from 'react';
import InfinitePostFeed from '../../features/posts/InifinitePostFeed/InfinitePostFeed';
import UserHeader from '../../layouts/UserHeader/UserHeader';
import PropTypes from 'prop-types';

/**
 * User page.
 * This component is used either at top navigation level on mobile,
 *  inserted in the UI on tablet or
 *  inserted in the network page on desktop.
 */
export default function User({ topLevelPage }) {
    const { userId } = useParams();
    const outletContext = useOutletContext();
    const mainId = useId();

    const email = 'test@gmail.com';

    // Get the ref for the container element but rerender the children when the ref changes
    const [containerRef, setContainerRef] = useState(null);
    const ref = (node) => {
        if (node) {
            setContainerRef(node);
        }
    };

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

    return <Wrapper
        id={outletContext?.id}
        className={`${style.user} ${outletContext?.className || ''}`}
        aria-label={Wrapper === 'section' ? `Utilisateur ${email}` : undefined}
    >
        <UserHeader
            email={email}
            admin
            userId={1}
            backArrow={topLevelPage || !!outletContext?.id}
            topLevelHeader={topLevelPage}
            {...topLevelPage && !outletContext?.id && { mainContentId: mainId }}
            className={style.userHeader}
        />

        <Content className={style.content} ref={ref} {...topLevelPage && !outletContext?.id && { id: mainId }}>
            <InfinitePostFeed
                containerElt={containerRef}
                errorClassName={style.error}
                className={style.posts}
                userId={parseInt(userId)}
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