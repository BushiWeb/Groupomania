import { login } from '../../src/services/auth.js';
import { jest } from '@jest/globals';
import db from '../../src/models/index.js';
import MockModel, * as mockModelMethods from '../mocks/mock-models.test.js';
import bcrypt from 'bcrypt';
import { UnauthorizedError } from '../../src/errors/index.js';

jest.spyOn(db, 'models', 'get').mockImplementation(
    () => new Proxy(
        {Model: MockModel},
        {
            get: (target) => target.Model
        }
    )
);

const mockBcryptCompare = jest.spyOn(bcrypt, 'compare');

beforeEach(() => {
    mockModelMethods.clearMocks();
    mockBcryptCompare.mockReset();
});

describe('Auth services test suite', () => {
    const userInfos = {
        email: 'email@example.com',
        password: 'mockedBcryptHash',
        roleId: 2,
        userId: 113
    };

    const password = 'password';

    describe('Login service test suite', () => {
        it('should return the authenticated user and the JWT', async () => {
            mockBcryptCompare.mockResolvedValueOnce(true);
            const newUser = await login(userInfos, password);

            expect(newUser).toHaveProperty('userId', userInfos.userId);
            expect(newUser).toHaveProperty('accessToken');
            expect(newUser).toHaveProperty('refreshToken');
        });

        it('should throw an error if the password is incorrect', async () => {
            expect.assertions(1);
            mockBcryptCompare.mockResolvedValueOnce(false);

            await expect(login(userInfos)).rejects.toBeInstanceOf(UnauthorizedError);
        });
    });
});