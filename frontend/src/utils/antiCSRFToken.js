/**
 * Get the anti CSRF token from the HTML meta tag
 * @returns {string}
 */
export const getAntiCSRFToken = () => {
    return document
        .querySelector('meta[name="crsf-token"]')
        ?.getAttribute('content');
};

/**
 * Change the anti CSRF token stored in the the HTML meta tag
 * @param {string} token
 */
export const setAntiCSRFToken = (token) => {
    let antiCsrfMeta = document.querySelector('meta[name="crsf-token"]');

    if (!antiCsrfMeta) {
        antiCsrfMeta = document.createElement('meta');
        antiCsrfMeta.setAttribute('name', 'crsf-token');
        document.head.append(antiCsrfMeta);
    }

    antiCsrfMeta.setAttribute('content', token);
};

/**
 * Handles the result of a request, weither it is successful or not, to save the CSRF token.
 * @param {Response} data
 */
export const handleCSRFToken = (data) => {
    const headers = data.headers;
    const csrfToken = headers.get('X-Crsf-Token');
    if (csrfToken) {
        setAntiCSRFToken(csrfToken);
    }
};
