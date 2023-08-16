/**
 * Allows to automatically focus an element after render
 * @param {boolean} focused - Weither the element is focused or not.
 * @returns Returns a function to give as a ref to the focusable element.
 */
export function useFocusable(focused) {
    return (node) => {
        if (focused) {
            node?.focus();
        }
    };
}