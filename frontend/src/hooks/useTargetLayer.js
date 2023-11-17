/**
 * Returns props to add to an element to provide a minimum target size for accessibility.
 * @returns Returns an object containing props to give to the element.
 */
export function useTargetLayer() {
    return {
        'data-target-layer': true,
    };
}
