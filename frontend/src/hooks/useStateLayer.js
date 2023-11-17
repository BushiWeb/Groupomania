/**
 * Returns props to add to an element to insert the state layer.
 * @prop {{hover: boolean, focus: boolean, active: boolean, dragged: boolean}} usedStates - States to activate for
 *  the element.
 * @prop {Object} style
 * @prop {string} style.width - Width of the element, as a string with a unit, defaults to 100%
 * @prop {string} style.height - Height of the element, as a string with a unit, defaults to 100%
 * @prop {string} style.borderRadius - Border radius of the element, as a string with a unit, defaults to inherit
 * @prop {string} style.color - Color of the state layer, defaults to the text color
 * @returns Returns an object containing props to give to the element.
 */
export function useStateLayer(
    usedStates = {
        hover: false,
        focus: false,
        active: false,
        dragged: false,
    },
    { width, height, color, borderRadius } = {},
) {
    let states = '';

    for (const state in usedStates) {
        if (usedStates[state]) {
            states += ` ${state}`;
        }
    }

    return {
        'data-state-layer': states,
        style: {
            ...(width && { '--state-layer-width': width }),
            ...(height && { '--state-layer-height': height }),
            ...(color && {
                '--state-layer-color': `rgb(var(--color-${color}))`,
            }),
            ...(borderRadius && {
                '--state-layer-border-radius': borderRadius,
            }),
        },
    };
}
