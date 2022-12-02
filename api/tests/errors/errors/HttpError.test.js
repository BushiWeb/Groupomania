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
        origin: new Error('Error message')
    };

    describe('Constructor test suite', () => {
        it('should create an instance with the specified informations', () => {
            const error = new HttpError(
                errorInformations.summary,
                errorInformations.path,
                errorInformations.method,
                errorInformations.statusCode,
                errorInformations.description,
                errorInformations.details,
                errorInformations.origin
            );

            expect(error).toHaveProperty('name', 'HttpError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', errorInformations.statusCode);
            expect(error).toHaveProperty('details', errorInformations.details);
            expect(error).toHaveProperty('dateTime');
            expect(error).toHaveProperty('originError', errorInformations.origin);
        });

        it('should create an instance without the origin', () => {
            const error = new HttpError(
                errorInformations.summary,
                errorInformations.path,
                errorInformations.method,
                errorInformations.statusCode,
                errorInformations.description,
                errorInformations.details
            );

            expect(error).toHaveProperty('name', 'HttpError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', errorInformations.statusCode);
            expect(error).toHaveProperty('details', errorInformations.details);
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance without details', () => {
            const error = new HttpError(
                errorInformations.summary,
                errorInformations.path,
                errorInformations.method,
                errorInformations.statusCode,
                errorInformations.description
            );

            expect(error).toHaveProperty('name', 'HttpError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', errorInformations.statusCode);
            expect(error).not.toHaveProperty('details');
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance and transform the detail in an array', () => {
            const error = new HttpError(
                errorInformations.summary,
                errorInformations.path,
                errorInformations.method,
                errorInformations.statusCode,
                errorInformations.description,
                errorInformations.details[0]
            );

            expect(error).toHaveProperty('name', 'HttpError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', errorInformations.statusCode);
            expect(error).toHaveProperty('details', [errorInformations.details[0]]);
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance without details and description', () => {
            const error = new HttpError(
                errorInformations.summary,
                errorInformations.path,
                errorInformations.method,
                errorInformations.statusCode,
            );

            expect(error).toHaveProperty('name', 'HttpError');
            expect(error).toHaveProperty('message');
            expect(error).not.toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', errorInformations.statusCode);
            expect(error).not.toHaveProperty('details');
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance with default status code', () => {
            const error = new HttpError(
                errorInformations.summary,
                errorInformations.path,
                errorInformations.method
            );

            expect(error).toHaveProperty('name', 'HttpError');
            expect(error).toHaveProperty('message');
            expect(error).not.toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 500);
            expect(error).not.toHaveProperty('details');
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('originError');
        });
    });



    describe('getErrorResponse test suite', () => {
        it('should return an object containing the error informations', () => {
            const error = new HttpError(
                errorInformations.summary,
                errorInformations.path,
                errorInformations.method,
                errorInformations.statusCode,
                errorInformations.description,
                errorInformations.details
            );
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

        it('should return an object with no details if the error has no details', () => {
            const error = new HttpError(
                errorInformations.summary,
                errorInformations.path,
                errorInformations.method,
                errorInformations.statusCode,
                errorInformations.description
            );
            const errorResponse = error.getErrorResponse();

            expect(errorResponse).toHaveProperty('error');
            expect(errorResponse).toHaveProperty('error.type', error.name);
            expect(errorResponse).toHaveProperty('error.title', error.message);
            expect(errorResponse).toHaveProperty('error.message', error.description);
            expect(errorResponse).toHaveProperty('error.path', error.path);
            expect(errorResponse).toHaveProperty('error.method', error.method);
            expect(errorResponse).toHaveProperty('error.statusCode', error.statusCode);
            expect(errorResponse).not.toHaveProperty('error.details');
            expect(errorResponse).toHaveProperty('error.timestamp', error.dateTime);
        });

        it('should return an object with no message if the error has no description', () => {
            const error = new HttpError(
                errorInformations.summary,
                errorInformations.path,
                errorInformations.method,
                errorInformations.statusCode
            );
            const errorResponse = error.getErrorResponse();

            expect(errorResponse).toHaveProperty('error');
            expect(errorResponse).toHaveProperty('error.type', error.name);
            expect(errorResponse).toHaveProperty('error.title', error.message);
            expect(errorResponse).not.toHaveProperty('error.message', error.description);
            expect(errorResponse).toHaveProperty('error.path', error.path);
            expect(errorResponse).toHaveProperty('error.method', error.method);
            expect(errorResponse).toHaveProperty('error.statusCode', error.statusCode);
            expect(errorResponse).not.toHaveProperty('error.details');
            expect(errorResponse).toHaveProperty('error.timestamp', error.dateTime);
        });
    });
});