import UserInputValidationError from '../../../src/errors/errors/UserInputValidationError.js';

describe('UserInputValidationError test suite', () => {
    const errorInformations = {
        summary: 'Input error',
        description: 'More informations about the error',
        path: 'api/error',
        method: 'GET',
        details: [
            {
                field: 'email',
                location: 'body',
                details: 'email is required'
            },
            {
                field: 'password',
                location: 'body',
                details: 'password is not strong enough'
            }
        ],
        origin: new Error('Error message')
    };

    describe('Constructor test suite', () => {
        it('should create an instance with the specified informations', () => {
            const error = new UserInputValidationError(
                errorInformations.path,
                errorInformations.method,
                errorInformations.summary,
                errorInformations.description,
                errorInformations.details,
                errorInformations.origin
            );

            expect(error).toHaveProperty('name', 'UserInputValidationError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 400);
            expect(error).toHaveProperty('details', errorInformations.details);
            expect(error).toHaveProperty('dateTime');
            expect(error).toHaveProperty('originError', errorInformations.origin);
        });

        it('should create an instance without the origin', () => {
            const error = new UserInputValidationError(
                errorInformations.path,
                errorInformations.method,
                errorInformations.summary,
                errorInformations.description,
                errorInformations.details
            );

            expect(error).toHaveProperty('name', 'UserInputValidationError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 400);
            expect(error).toHaveProperty('details', errorInformations.details);
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance without details', () => {
            const error = new UserInputValidationError(
                errorInformations.path,
                errorInformations.method,
                errorInformations.summary,
                errorInformations.description
            );

            expect(error).toHaveProperty('name', 'UserInputValidationError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 400);
            expect(error).not.toHaveProperty('details');
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance and transform the detail in an array', () => {
            const error = new UserInputValidationError(
                errorInformations.path,
                errorInformations.method,
                errorInformations.summary,
                errorInformations.description,
                errorInformations.details[0]
            );

            expect(error).toHaveProperty('name', 'UserInputValidationError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 400);
            expect(error).toHaveProperty('details', [errorInformations.details[0]]);
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance without details and description', () => {
            const error = new UserInputValidationError(
                errorInformations.path,
                errorInformations.method,
                errorInformations.summary
            );

            expect(error).toHaveProperty('name', 'UserInputValidationError');
            expect(error).toHaveProperty('message', errorInformations.summary);
            expect(error).not.toHaveProperty('description');
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 400);
            expect(error).not.toHaveProperty('details');
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('originError');
        });

        it('should create an instance with default status message', () => {
            const error = new UserInputValidationError(
                errorInformations.path,
                errorInformations.method
            );

            expect(error).toHaveProperty('name', 'UserInputValidationError');
            expect(error).toHaveProperty('message');
            expect(error.message).not.toBeFalsy();
            expect(error).not.toHaveProperty('description');
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('statusCode', 400);
            expect(error).not.toHaveProperty('details');
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('originError');
        });
    });
});