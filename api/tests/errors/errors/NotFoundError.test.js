import NotFoundError from '../../../src/errors/errors/NotFoundError.js';

describe('NotFoundError test suite', () => {
    const errorInformations = {
        summary: 'Not found!!!',
        description: 'More informations about the error',
        path: 'api/error',
        method: 'GET',
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
            const error = new NotFoundError(
                errorInformations.path,
                errorInformations.method,
                errorInformations.summary,
                errorInformations.description,
                errorInformations.details,
                errorInformations.origin
            );

            expect(error).toHaveProperty('name', 'NotFoundError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 404);
            expect(error).toHaveProperty('details', errorInformations.details);
            expect(error).toHaveProperty('dateTime');
            expect(error).toHaveProperty('originError', errorInformations.origin);
        });

        it('should create an instance without the origin', () => {
            const error = new NotFoundError(
                errorInformations.path,
                errorInformations.method,
                errorInformations.summary,
                errorInformations.description,
                errorInformations.details
            );

            expect(error).toHaveProperty('name', 'NotFoundError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 404);
            expect(error).toHaveProperty('details', errorInformations.details);
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance without details', () => {
            const error = new NotFoundError(
                errorInformations.path,
                errorInformations.method,
                errorInformations.summary,
                errorInformations.description
            );

            expect(error).toHaveProperty('name', 'NotFoundError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 404);
            expect(error).not.toHaveProperty('details');
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance and transform the detail in an array', () => {
            const error = new NotFoundError(
                errorInformations.path,
                errorInformations.method,
                errorInformations.summary,
                errorInformations.description,
                errorInformations.details[0]
            );

            expect(error).toHaveProperty('name', 'NotFoundError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 404);
            expect(error).toHaveProperty('details', [errorInformations.details[0]]);
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance without details and description', () => {
            const error = new NotFoundError(
                errorInformations.path,
                errorInformations.method,
                errorInformations.summary
            );

            expect(error).toHaveProperty('name', 'NotFoundError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).not.toHaveProperty('description');
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 404);
            expect(error).not.toHaveProperty('details');
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance with default status message', () => {
            const error = new NotFoundError(
                errorInformations.path,
                errorInformations.method
            );

            expect(error).toHaveProperty('name', 'NotFoundError');
            expect(error).toHaveProperty('message');
            expect(error.message).not.toBeFalsy();
            expect(error).not.toHaveProperty('description');
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 404);
            expect(error).not.toHaveProperty('details');
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('originError');
        });
    });
});