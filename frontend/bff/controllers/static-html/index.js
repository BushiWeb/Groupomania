import { generateCRSFToken } from '../../services/generateCRSFToken.js';
import { createLoggerNamespace } from '../../logger/index.js';
import { updateCRSFToken } from '../../middlewares/authentication.js';

const htmlControllerLogger = createLoggerNamespace(
    'groupomania:bff:controllers:html',
);

/**
 * Generates the static HTML page.
 * @param {Express.Request} req - Express request object.
 * @param {Express.Response} res - Express response object.
 * @param next - Next middleware to execute.
 */
export function staticHTMLController(req, res, next) {
    htmlControllerLogger.verbose('Static HTML generation controller starting');
    const csrfToken = generateCRSFToken();
    updateCRSFToken(req, res);
    htmlControllerLogger.debug('Anti CSRF token updated');

    const userInfos = req.session.user;

    // Saves the CRSF token in the session
    req.session.regenerate((error) => {
        if (error) {
        htmlControllerLogger.debug(
            'Error while regenerating the session',
            );
            return next(error);
        }

        htmlControllerLogger.debug(
        'Session regenerated, saving data in the session',
        );
        req.session.user = userInfos;

        // Generates the HTML page and hydrate it with the CRSF token
        res.render('index.html', {
            crsfToken: csrfToken,
        });
        htmlControllerLogger.verbose('Page generated and sent successfully');
    })
}
