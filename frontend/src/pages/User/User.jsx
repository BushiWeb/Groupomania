import { useParams } from 'react-router-dom';
import style from './User.module.css';
import { useState } from 'react';
import InfinitePostFeed from '../../features/posts/InifinitePostFeed/InfinitePostFeed';
import UserHeader from '../../layouts/UserHeader/UserHeader';

/**
 * User page.
 * This component is used either at top navigation level on mobile,
 *  inserted in the UI on tablet or
 *  inserted in the network page on desktop.
 */
export default function User() {
    const { userId } = useParams();

    // Get the ref for the container element but rerender the children when the ref changes
    const [containerRef, setContainerRef] = useState(null);
    const ref = (node) => {
        if (node) {
            setContainerRef(node);
        }
    };

    return <div className={`${style.user}`} ref={ref}>
        <UserHeader
            email="test@gmail.com"
            admin
            userId={3}
            backArrow
            topLevelHeader
            mainContentId="test"
        />
        <InfinitePostFeed
            containerElt={containerRef}
            errorClassName={style.error}
            className={style.posts}
            userId={parseInt(userId)}
        />
    </div>;
}