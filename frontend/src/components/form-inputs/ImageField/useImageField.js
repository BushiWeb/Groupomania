import { useEffect, useId, useState } from 'react';

/**
 * Hook containing the ImageField logic.
 * @param {File|string} image
 * @param ref
 * @param {Function} onChange
 * @returns {
 *   imageData,
 *   supportTextId,
 *   handleChange,
 *   handleDeleteImage,
 * }
 */
export default function useImageField(image, ref, onChange) {
    const [imageData, setImageData] = useState(null);
    const supportTextId = useId();

    useEffect(() => {
        if (!image) {
            ref.current.value = '';
            setImageData(null);
            return;
        }

        if (typeof image === 'string') {
            setImageData({
                src: image,
                uploaded: true,
                name: 'Image originale',
            });
            return;
        }

        const objectUrl = URL.createObjectURL(image);
        setImageData({
            src: objectUrl,
            name: image.name,
            uploaded: false,
        });
    }, [image, ref]);

    function handleChange(e) {
        if (e.target.files.length === 0) {
            onChange(null);
            setImageData(null);
            return;
        }
        onChange(e.target.files[0]);
    }

    function handleDeleteImage() {
        ref.current.value = '';
        onChange(null);
        setImageData(null);
    }

    return {
        imageData,
        supportTextId,
        handleChange,
        handleDeleteImage,
    };
}