import { useOutletContext, useParams } from 'react-router-dom';
import style from './User.module.css';
import { useState } from 'react';
import InfinitePostFeed from '../../features/posts/InifinitePostFeed/InfinitePostFeed';

/**
 * User page.
 * This component is used either at top navigation level on mobile,
 *  inserted in the UI on tablet or
 *  inserted in the network page on desktop.
 */
export default function User() {
    const { userId } = useParams();
    const { className } = useOutletContext();

    // Get the ref for the container element but rerender the children when the ref changes
    const [containerRef, setContainerRef] = useState(null);
    const ref = (node) => {
        if (node) {
            setContainerRef(node);
        }
    };

    return <div className={`${className} ${style.user}`} ref={ref}>
        <InfinitePostFeed
            containerElt={containerRef}
            errorClassName={style.error}
            className={style.posts}
            userId={parseInt(userId)}
        />
    </div>;
}