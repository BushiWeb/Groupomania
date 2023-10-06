import style from './Post.module.css';
import { useContext } from 'react';
import { postContext } from './Post';

/** Displays one post data. */
export default function PostContent() {
    const {
        title,
        titleId,
        message,
        messageId,
    } = useContext(postContext);

    return <div className={style.content}>
        <h2 className={style.title} id={titleId}>{title}</h2>
        <p className={style.message} id={messageId}>{message}</p>
    </div>;

}