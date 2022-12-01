import { validationErrorFormatter } from '../../src/schemas/index.js';

describe('validationErrorFormatter test suite', () => {
    const errorObject = {
        location: 'body',
        param: 'param',
        msg: 'error message',
        value: 'value'
    };

    const objectWithNestedErrors = {
        location: 'body',
        param: 'param',
        msg: 'error message',
        value: 'value',
        nestedErrors: [
            {
                location: 'body',
                param: 'param',
                msg: 'error message',
                value: 'value'
            },
            {
                location: 'body',
                param: 'param',
                msg: 'error message',
                value: 'value',
                nestedErrors: [
                    {
                        location: 'body',
                        param: 'param',
                        msg: 'error message',
                        value: 'value'
                    }
                ]
            }
        ]
    };

    it('should return an object containing all informations except the value', () => {
        const formatedError = validationErrorFormatter(errorObject);

        expect(formatedError).toHaveProperty('location', errorObject.location);
        expect(formatedError).toHaveProperty('param', errorObject.param);
        expect(formatedError).toHaveProperty('message', errorObject.msg);
        expect(formatedError).not.toHaveProperty('value');
    });

    it('should format the nested errors', () => {
        const formatedError = validationErrorFormatter(objectWithNestedErrors);

        expect(formatedError).toHaveProperty('location', errorObject.location);
        expect(formatedError).toHaveProperty('param', errorObject.param);
        expect(formatedError).toHaveProperty('message', errorObject.msg);
        expect(formatedError).not.toHaveProperty('value');

        expect(formatedError).toHaveProperty('nestedErrors');
        expect(Array.isArray(formatedError.nestedErrors)).toBe(true);
        expect(formatedError.nestedErrors).toHaveLength(2);

        expect(formatedError.nestedErrors[0]).toHaveProperty('location', errorObject.location);
        expect(formatedError.nestedErrors[0]).toHaveProperty('param', errorObject.param);
        expect(formatedError.nestedErrors[0]).toHaveProperty('message', errorObject.msg);
        expect(formatedError.nestedErrors[0]).not.toHaveProperty('value');

        expect(formatedError.nestedErrors[1]).toHaveProperty('location', errorObject.location);
        expect(formatedError.nestedErrors[1]).toHaveProperty('param', errorObject.param);
        expect(formatedError.nestedErrors[1]).toHaveProperty('message', errorObject.msg);
        expect(formatedError.nestedErrors[1]).not.toHaveProperty('value');
        expect(formatedError.nestedErrors[1]).toHaveProperty('nestedErrors');
        expect(Array.isArray(formatedError.nestedErrors[1].nestedErrors)).toBe(true);
        expect(formatedError.nestedErrors[1].nestedErrors).toHaveLength(1);
        expect(formatedError.nestedErrors[1].nestedErrors[0]).toHaveProperty('location', errorObject.location);
        expect(formatedError.nestedErrors[1].nestedErrors[0]).toHaveProperty('param', errorObject.param);
        expect(formatedError.nestedErrors[1].nestedErrors[0]).toHaveProperty('message', errorObject.msg);
        expect(formatedError.nestedErrors[1].nestedErrors[0]).not.toHaveProperty('value');
    });
});