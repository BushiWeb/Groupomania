import { useLayoutEffect, useRef, useState } from 'react';

/**
 * Hook providing the position of the listbox
 * @param {Object} props
 * @param {HTMLElement} [props.anchor] - Element to anchor the menu to
 * @param {bool} [props.open=false] - Weither the tooltip is opened or not
 * @returns {{
 *  position: {
 *    top: number,
 *    left: number,
 *    width: number
 *  }
 *  ref,
 * }}
 *  Returns an object containing the position of the menu
 */
export default function useListbox({
    anchor,
    open = false,
}) {
    const ref = useRef(null);
    const [{ top, left, width }, setPosition] = useState({ top: 0, left: 0, width: null });

    /* Get position when opening */
    useLayoutEffect(() => {
        if (!ref.current) {
            return;
        }

        if (!anchor) {
            setPosition({
                top: 0,
                left: 0,
                width: null,
            });
            return;
        }

        const listboxBox = ref.current.getBoundingClientRect();
        const anchorBox = anchor.getBoundingClientRect();

        // Place the element underneath the anchor except if it overflows
        const top = anchorBox.y + anchorBox.height + listboxBox.height > window.innerHeight ?
            Math.max(0, anchorBox.y - listboxBox.height) :
            anchorBox.y + anchorBox.height;

        // The element spans at least the widht of the anchor, and is placed in priority on the left side
        const width = listboxBox.width < anchorBox.width ? anchorBox.width : null;
        const left = anchorBox.x < window.innerWidth / 2 ?
            Math.min(anchorBox.x, window.innerWidth - listboxBox.width) :
            Math.max(0, anchorBox.x - listboxBox.width + anchorBox.width);

        setPosition({
            top,
            left,
            width,
        });

    }, [open, anchor]);

    return {
        position: {
            top,
            left,
            width,
        },
        ref,
    };
}