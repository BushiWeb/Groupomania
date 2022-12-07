import UnsupportedMediaTypeError from '../../../src/errors/errors/UnsupportedMediaTypeError.js';

describe('UnsupportedMediaTypeError test suite', () => {
    const errorInformations = {
        message: 'Error message',
        title: 'Error short user description',
        description: 'More informations about the error',
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
        path: 'api/error',
        method: 'GET',
        moreData1: 'Supplement',
        moreData2: 'Second supplement'
    };
    const origin = new Error('Error message');

    describe('Constructor test suite', () => {
        it('should create an instance with the specified informations', () => {
            const error = new UnsupportedMediaTypeError(errorInformations, origin);

            expect(error).toHaveProperty('name', 'UnsupportedMediaTypeError');
            expect(error).toHaveProperty('message', errorInformations.message);
            expect(error).toHaveProperty('title', errorInformations.title);
            expect(error).toHaveProperty('description', errorInformations.description);
            expect(error).toHaveProperty('details', errorInformations.details);
            expect(error).toHaveProperty('statusCode', 415);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('dateTime');
            expect(error).toHaveProperty('cause', origin);
            expect(error).toHaveProperty('more');
            expect(error.more).toHaveProperty('moreData1', errorInformations.moreData1);
            expect(error.more).toHaveProperty('moreData2', errorInformations.moreData2);
        });

        it('should create an instance with the default informations', () => {
            const lessErrorInformations = {
                message: errorInformations.message,
                path: errorInformations.path,
                method: errorInformations.method
            };
            const error = new UnsupportedMediaTypeError(lessErrorInformations);

            expect(error).toHaveProperty('name', 'UnsupportedMediaTypeError');
            expect(error).toHaveProperty('message', errorInformations.message);
            expect(error).toHaveProperty('title');
            expect(error.title).not.toBeUndefined();
            expect(typeof error.title).toBe('string');
            expect(error).toHaveProperty('description');
            expect(error.description).not.toBeUndefined();
            expect(typeof error.description).toBe('string');
            expect(error).toHaveProperty('details');
            expect(error.details).toBeUndefined();
            expect(error).toHaveProperty('statusCode', 415);
            expect(error).toHaveProperty('path', errorInformations.path);
            expect(error).toHaveProperty('method', errorInformations.method);
            expect(error).toHaveProperty('dateTime');
            expect(error).not.toHaveProperty('cause');
            expect(error).toHaveProperty('more');
            expect(error.more).toEqual({});
        });
    });
});