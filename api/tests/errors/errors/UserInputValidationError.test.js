import UserInputValidationError from '../../../src/errors/errors/UserInputValidationError.js';

describe('UserInputValidationError test suite', () => {
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
        label: 'log label',
        message: 'log message',
        details: 'details',
        metadata: 'metadata',
        moreData: 'More!'
    };

    describe('Constructor test suite', () => {
        it('should create an instance with the specified informations', () => {
            const error = new UserInputValidationError(errorInformations, log, origin);

            expect(error).toHaveProperty('name', 'UserInputValidationError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 400);
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
                path: errorInformations.path,
                method: errorInformations.method
            };
            const error = new UserInputValidationError(lessErrorInformations);

            expect(error).toHaveProperty('name', 'UserInputValidationError');
            expect(error).toHaveProperty('message');
            expect(error).toHaveProperty('description');
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 400);
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
    });
});