/**
 * Get the anti CSRF token from the HTML meta tag
 * @returns {string}
 */
export const getAntiCSRFTokenMeta = () => {
    return document
        .querySelector('meta[name="crsf-token"]')
        ?.getAttribute('content');
};

/**
 * Get the anti CSRF token from the cookie
 * @returns {string|boolean}
 */
export const getAntiCSRFToken = () => {
    const COOKIE_NAME = '__host_csrf-token';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieList = decodedCookie.split(';');

    for (const cookie of cookieList) {
        const trimedCookie = cookie.trim();

        if (trimedCookie.indexOf(COOKIE_NAME) === 0) {
            return trimedCookie.substring(COOKIE_NAME.length + 1); // Remove equal sign
        }
    }

    return false;
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
