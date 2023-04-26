// getComputedStyleMock
const { getComputedStyle } = window;
Object.defineProperty(window, 'getComputedStyle', {
    value: (elt, pseudoElt) => getComputedStyle(elt),
});