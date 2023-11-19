import UserInputValidationError from '../../src/errors/UserInputValidationError.js';
import { dataFormatter } from '../../src/middlewares/multer.js';

describe('Multer dataformatter test suite', () => {
    const jsonObject = {
        city: 'Annecy',
        street: 'Rue Carnot',
        zipCode: '74000',
    };
    let object;
    let baseObject;

    beforeEach(() => {
        object = {
            lastName: 'Doe',
            firstName: 'Jane',
            address: JSON.stringify(jsonObject),
            hobbies: ['drawing', 'karate'],
            invalid: '"lastName": "Doe", "firstName": "john"',
        };
        baseObject = JSON.parse(JSON.stringify(object));
    });

    it('should return the object with a totaly new value', () => {
        const formatFunction = dataFormatter('address');
        const objectCopy = formatFunction(object);

        expect(objectCopy).toEqual(jsonObject);
    });

    it('should return the object if the origin doesn\'t exist but the value is not requires', () => {
        const formatFunction = dataFormatter('work', { required: false });
        const objectCopy = formatFunction(object);

        expect(objectCopy).toEqual(object);
    });

    it('should throw an error if the origin does not exist but the value is requires', () => {
        const formatFunction = dataFormatter('work');

        expect(() => {
            formatFunction(object);
        }).toThrow(UserInputValidationError);
    });

    it('should throw an error if the origin is an invalid JSON string', () => {
        const formatFunction = dataFormatter('invalid');

        expect(() => {
            formatFunction(object);
        }).toThrow(UserInputValidationError);
    });

    it('should return the object with a totaly new value, without the need to parse', () => {
        const formatFunction = dataFormatter('hobbies', { parse: false });
        const objectCopy = formatFunction(object);

        expect(objectCopy).toEqual(baseObject.hobbies);
    });

    it('should return the object with the value in the destination and the origin deleted', () => {
        const formatFunction = dataFormatter('address', { destination: 'addressCopy' });
        const objectCopy = formatFunction(object);

        expect(objectCopy).toHaveProperty('addressCopy', jsonObject);
        expect(objectCopy).not.toHaveProperty('address');
    });
});