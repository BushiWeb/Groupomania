import style from './Post.module.css';
import ImageWithLighbox from '../../../components/Image/ImageWithLightbox';
import { useContext } from 'react';
import { postContext } from './Post';

/** Displays one post data. */
export default function PostImage() {
    const {
        title,
        authorEmail,
        imageUrl,
    } = useContext(postContext);

    if (!imageUrl) {
        return;
    }

    return <ImageWithLighbox
        className={style.image}
        src={imageUrl}
        lightboxLabel={`Lightbox contenant l'image du post ${title} de ${authorEmail}`}
        label="Agrandir l'image"
    />;

}