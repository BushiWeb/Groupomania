export const changeViewportWidth = (w) => {
    window.innerWidth = w;
    window.dispatchEvent(new Event('resize'));
};
