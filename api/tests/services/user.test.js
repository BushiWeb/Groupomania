import { createUser } from '../../src/services/users.js';
import { jest } from '@jest/globals';
import db from '../../src/models/index.js';
import MockModel, * as mockModelMethods from '../mocks/mock-models.test.js';
import bcrypt from 'bcrypt';

jest.spyOn(db, 'models', 'get').mockImplementation(
    () => new Proxy(
        {Model: MockModel},
        {
            get: (target) => target.Model
        }
    )
);

const mockBcryptHash = jest.spyOn(bcrypt, 'hash');

beforeEach(() => {
    mockModelMethods.clearMocks();
    mockBcryptHash.mockClear();
});

describe('User services test suite', () => {
    const userInfos = {
        email: 'test@example.com',
        password: 'password123',
        roleId: 1
    };

    const testError = new Error('Error');

    describe('Create user service test suite', () => {
        it('should create a user with the default role id and return the user', async () => {
            const newUser = await createUser({email: userInfos.email, password: userInfos.password});

            expect(newUser).toHaveProperty('email', userInfos.email);
            expect(newUser).toHaveProperty('password');
            expect(newUser.password).toHaveLength(60);
        });

        it('should create a user with the given role id and return the user', async () => {
            const newUser = await createUser(userInfos);

            expect(newUser).toHaveProperty('email', userInfos.email);
            expect(newUser).toHaveProperty('password');
            expect(newUser.password).toHaveLength(60);
            expect(newUser).toHaveProperty('roleId', 1);
        });

        it('should throw an error if the password hash fails', async () => {
            expect.assertions(1);
            mockBcryptHash.mockRejectedValue(testError);
            await expect(createUser(userInfos)).rejects.toEqual(testError);
        });

        it('should throw an error if the saving fails', async () => {
            expect.assertions(1);
            mockModelMethods.mockCreate.mockRejectedValue(testError);
            await expect(createUser(userInfos)).rejects.toEqual(testError);
        });
    });
});