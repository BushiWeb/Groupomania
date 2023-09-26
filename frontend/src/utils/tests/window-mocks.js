// getComputedStyleMock
const { getComputedStyle } = window;
Object.defineProperty(window, 'getComputedStyle', {
    value: (elt, pseudoElt) => getComputedStyle(elt),
});

// URL createObjectUrl and revokeObjectUrl
Object.defineProperties(window.URL, {
    createObjectURL: {
        value: () => 'https://picsum.photos/200/300',
    },
    revokeObjectURL: {
        value: () => {},
    },
});