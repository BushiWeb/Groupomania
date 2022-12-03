import HttpError from '../../../src/errors/errors/HttpError.js';

describe('HttpError test suite', () => {
    const errorInformations = {
        summary: 'Error summary',
        description: 'More informations about the error',
        path: 'api/error',
        method: 'GET',
        statusCode: 400,
        details: [
            {
                info: 'Details object',
                error: 'Invalid'
            },
            {
                info: 'Details object',
                error: 'Invalid'
            }
        ],
    };
    const origin = new Error('Error message');
    const log = {
        label: 'log label',
        message: 'log message',
        details: 'details',
        metadata: 'metadata',
        moreData: 'More!'
    };

    describe('Constructor test suite', () => {
        it('should create an instance with the specified informations', () => {
            const error = new HttpError(errorInformations, log, origin);

            expect(error).toHaveProperty('name', 'HttpError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', errorInformations.statusCode);
            expect(error).toHaveProperty('details', errorInformations.details);
            expect(error).toHaveProperty('dateTime');
            expect(error).toHaveProperty('cause', origin);
            expect(error).toHaveProperty('logInformations');
            expect(error.logInformations).toHaveProperty('label', log.label);
            expect(error.logInformations).toHaveProperty('message', log.message);
            expect(error.logInformations).toHaveProperty('path', error.path);
            expect(error.logInformations).toHaveProperty('method', error.method);
            expect(error.logInformations).toHaveProperty('errorDate', error.dateTime);
            expect(error.logInformations).toHaveProperty('statusCode', error.statusCode);
            expect(error.logInformations).toHaveProperty('details', log.details);
            expect(error.logInformations).toHaveProperty('stack', error.stack);
            expect(error.logInformations).toHaveProperty('originStack', origin.stack);
            expect(error.logInformations).toHaveProperty('metadata', log.metadata);
            expect(error.logInformations).toHaveProperty('moreData', log.moreData);
        });

        it('should create an instance with the default informations', () => {
            const lessErrorInformations = {
                summary: errorInformations.summary,
                path: errorInformations.path,
                method: errorInformations.method
            };
            const error = new HttpError(lessErrorInformations);

            expect(error).toHaveProperty('name', 'HttpError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).not.toHaveProperty('description');
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 500);
            expect(error).not.toHaveProperty('details');
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('cause');
            expect(error).toHaveProperty('logInformations');
            expect(error.logInformations).toHaveProperty('label', error.name);
            expect(error.logInformations).toHaveProperty('message', error.message);
            expect(error.logInformations).toHaveProperty('path', error.path);
            expect(error.logInformations).toHaveProperty('method', error.method);
            expect(error.logInformations).toHaveProperty('errorDate', error.dateTime);
            expect(error.logInformations).toHaveProperty('statusCode', error.statusCode);
            expect(error.logInformations).not.toHaveProperty('details');
            expect(error.logInformations).toHaveProperty('stack', error.stack);
            expect(error.logInformations).not.toHaveProperty('originStack');
        });

        it('should create an instance with the default options except the description', () => {
            const lessErrorInformations = {
                summary: errorInformations.summary,
                path: errorInformations.path,
                method: errorInformations.method,
                description: errorInformations.description
            };
            const error = new HttpError(lessErrorInformations);

            expect(error).toHaveProperty('name', 'HttpError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 500);
            expect(error).not.toHaveProperty('details');
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('cause');
            expect(error).toHaveProperty('logInformations');
            expect(error.logInformations).toHaveProperty('label', error.name);
            expect(error.logInformations).toHaveProperty('message', error.description);
            expect(error.logInformations).toHaveProperty('path', error.path);
            expect(error.logInformations).toHaveProperty('method', error.method);
            expect(error.logInformations).toHaveProperty('errorDate', error.dateTime);
            expect(error.logInformations).toHaveProperty('statusCode', error.statusCode);
            expect(error.logInformations).not.toHaveProperty('details');
            expect(error.logInformations).toHaveProperty('stack', error.stack);
            expect(error.logInformations).not.toHaveProperty('originStack');
        });

        it('should create an instance with details that is not an array', () => {
            const lessErrorInformations = {
                summary: errorInformations.summary,
                path: errorInformations.path,
                method: errorInformations.method,
                details: errorInformations.details[0]
            };
            const error = new HttpError(lessErrorInformations);

            expect(error).toHaveProperty('name', 'HttpError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).not.toHaveProperty('description');
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 500);
            expect(error).toHaveProperty('details', [errorInformations.details[0]]);
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('cause');
            expect(error).toHaveProperty('logInformations');
            expect(error.logInformations).toHaveProperty('label', error.name);
            expect(error.logInformations).toHaveProperty('message', error.message);
            expect(error.logInformations).toHaveProperty('path', error.path);
            expect(error.logInformations).toHaveProperty('method', error.method);
            expect(error.logInformations).toHaveProperty('errorDate', error.dateTime);
            expect(error.logInformations).toHaveProperty('statusCode', error.statusCode);
            expect(error.logInformations).toHaveProperty('details', error.details);
            expect(error.logInformations).toHaveProperty('stack', error.stack);
            expect(error.logInformations).not.toHaveProperty('originStack');
        });
    });



    describe('getErrorResponse test suite', () => {
        it('should return an object containing the error informations', () => {
            const error = new HttpError(errorInformations);
            const errorResponse = error.getErrorResponse();

            expect(errorResponse).toHaveProperty('error');
            expect(errorResponse).toHaveProperty('error.type', error.name);
            expect(errorResponse).toHaveProperty('error.title', error.message);
            expect(errorResponse).toHaveProperty('error.message', error.description);
            expect(errorResponse).toHaveProperty('error.path', error.path);
            expect(errorResponse).toHaveProperty('error.method', error.method);
            expect(errorResponse).toHaveProperty('error.statusCode', error.statusCode);
            expect(errorResponse).toHaveProperty('error.details', error.details);
            expect(errorResponse).toHaveProperty('error.timestamp', error.dateTime);
        });

        it('should return an object with no optionnal informations', () => {
            const lessErrorInformations = {
                summary: errorInformations.summary,
                path: errorInformations.path,
                method: errorInformations.method
            };
            const error = new HttpError(lessErrorInformations);
            const errorResponse = error.getErrorResponse();

            expect(errorResponse).toHaveProperty('error');
            expect(errorResponse).toHaveProperty('error.type', error.name);
            expect(errorResponse).toHaveProperty('error.title', error.message);
            expect(errorResponse).not.toHaveProperty('error.message');
            expect(errorResponse).toHaveProperty('error.path', error.path);
            expect(errorResponse).toHaveProperty('error.method', error.method);
            expect(errorResponse).toHaveProperty('error.statusCode', error.statusCode);
            expect(errorResponse).not.toHaveProperty('error.details');
            expect(errorResponse).toHaveProperty('error.timestamp', error.dateTime);
        });
    });
});