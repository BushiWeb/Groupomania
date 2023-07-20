export const getAntiCSRFToken = () => {
    return document.querySelector('meta[name="crsf-token"]').getAttribute('content');
};

export const setAntiCSRFToken = (token) => {
    document.querySelector('meta[name="crsf-token"]').setAttribute('content', token);
};