import { generateCRSFToken } from '../../services/session/generate-crsf-token.js';

/**
 * Generates the static HTML page.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export function staticHTMLController(req, res, next) {
    const crsfToken = generateCRSFToken();

    // Saves the CRSF token in the session
    req.session.crsfToken = crsfToken;

    // Generates the HTML page and hydrate it with the CRSF token
    res.render('index.html', {
        crsfToken,
    });
}