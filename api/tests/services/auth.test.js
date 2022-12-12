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
        email: 'test@example.com',
        password: 'password123'
    };

    const returnedUserInfos = {
        email: userInfos.email,
        password: 'mockedBcryptHash',
        roleId: 2,
        userId: 113
    };

    describe('Login service test suite', () => {
        it('should return the authenticated user and the JWT', async () => {
            mockModelMethods.mockFindOne.mockResolvedValueOnce(new MockModel(returnedUserInfos));
            mockBcryptCompare.mockResolvedValueOnce(true);
            const newUser = await login(userInfos);

            expect(newUser).toHaveProperty('userId', returnedUserInfos.userId);
            expect(newUser).toHaveProperty('accessToken');
        });

        it('should throw an error if the email doesn\'t exist', async () => {
            expect.assertions(1);

            mockModelMethods.mockFindOne.mockResolvedValueOnce(null);
            mockBcryptCompare.mockResolvedValueOnce(true);

            await expect(login(userInfos)).rejects.toBeInstanceOf(UnauthorizedError);
        });

        it('should throw an error if the password is incorrect', async () => {
            expect.assertions(1);

            mockModelMethods.mockFindOne.mockResolvedValueOnce(new MockModel(returnedUserInfos));
            mockBcryptCompare.mockResolvedValueOnce(false);

            await expect(login(userInfos)).rejects.toBeInstanceOf(UnauthorizedError);
        });

        it('should throw errors with the same public informations wether the email or password is invalid', async () => {
            mockModelMethods.mockFindOne.mockResolvedValueOnce(new MockModel(returnedUserInfos));
            mockBcryptCompare.mockResolvedValueOnce(false);
            let wrongPasswordError;
            try {
                await login(userInfos);
            } catch (error) {
                wrongPasswordError = error;
            }

            mockModelMethods.mockFindOne.mockResolvedValueOnce(null);
            mockBcryptCompare.mockResolvedValueOnce(true);
            let wrongEmailError;
            try {
                await login(userInfos);
            } catch (error) {
                wrongEmailError = error;
            }

            expect(wrongPasswordError.title).toBe(wrongEmailError.title);
            expect(wrongPasswordError.description).toBe(wrongEmailError.description);
        });
    });
});