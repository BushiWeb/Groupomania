import ConflictError from '../../../src/errors/errors/ConflictError.js';

describe('ConflictError test suite', () => {
    const errorInformations = {
        summary: 'Error summary',
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
    };
    const origin = new Error('Error message');
    const log = {
        message: 'Logging message',
        otherData: 'data'
    };

    describe('Constructor test suite', () => {
        it('should create an instance with the specified informations', () => {
            const error = new ConflictError(errorInformations, log, origin);

            expect(error).toHaveProperty('name', 'ConflictError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 409);
            expect(error).toHaveProperty('details', errorInformations.details);
            expect(error).toHaveProperty('dateTime');
            expect(error).toHaveProperty('logInformations', log);
            expect(error).toHaveProperty('originError', origin);
        });

        it('should create an instance without the origin', () => {
            const error = new ConflictError(errorInformations, log);

            expect(error).toHaveProperty('name', 'ConflictError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 409);
            expect(error).toHaveProperty('details', errorInformations.details);
            expect(error).toHaveProperty('dateTime');
            expect(error).toHaveProperty('logInformations', log);
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance without the log', () => {
            const error = new ConflictError(errorInformations);

            expect(error).toHaveProperty('name', 'ConflictError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 409);
            expect(error).toHaveProperty('details', errorInformations.details);
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('logInformations');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance without details', () => {
            const lessErrorInformations = {...errorInformations};
            delete lessErrorInformations.details;
            const error = new ConflictError(lessErrorInformations);

            expect(error).toHaveProperty('name', 'ConflictError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 409);
            expect(error).not.toHaveProperty('details');
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('logInformations');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance and transform the detail in an array', () => {
            const lessErrorInformations = {...errorInformations};
            lessErrorInformations.details = errorInformations.details[0];
            const error = new ConflictError(lessErrorInformations);

            expect(error).toHaveProperty('name', 'ConflictError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 409);
            expect(error).toHaveProperty('details', [errorInformations.details[0]]);
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('logInformations');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance with the default description', () => {
            const lessErrorInformations = {...errorInformations};
            delete lessErrorInformations.description;
            const error = new ConflictError(lessErrorInformations);

            expect(error).toHaveProperty('name', 'ConflictError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description');
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 409);
            expect(error).toHaveProperty('details', errorInformations.details);
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('logInformations');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance with default status message', () => {
            const lessErrorInformations = {...errorInformations};
            delete lessErrorInformations.summary;
            const error = new ConflictError(lessErrorInformations);

            expect(error).toHaveProperty('name', 'ConflictError');
            expect(error).toHaveProperty('message');
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 409);
            expect(error).toHaveProperty('details', errorInformations.details);
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('logInformations');
            expect(error).not.toHaveProperty('originError');
        });
    });
});