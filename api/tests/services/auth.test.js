import { login, logout, createRefreshToken, createAccessToken, validatePassword } from '../../src/services/auth.js';
import { jest } from '@jest/globals';
import db from '../../src/models/index.js';
import MockModel, * as mockModelMethods from '../mocks/mock-models.test.js';
import bcrypt from 'bcrypt';
import { UnauthorizedError } from '../../src/errors/index.js';
import jwt from 'jsonwebtoken';

jest.spyOn(db, 'models', 'get').mockImplementation(
    () => new Proxy(
        {Model: MockModel},
        {
            get: (target) => target.Model
        }
    )
);

const mockBcryptCompare = jest.spyOn(bcrypt, 'compare');
const mockBcryptHash = jest.spyOn(bcrypt, 'hash');
const mockJwtSign = jest.spyOn(jwt, 'sign');

beforeEach(() => {
    mockModelMethods.clearMocks();
    mockBcryptCompare.mockReset();
    mockBcryptHash.mockReset();
    mockJwtSign.mockReset();
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

    describe('Logout service test suite', () => {
        const tokenId = 'fffffff-fffffffff-ffffffffffffffffff';
        it('should call the destroy method', async () => {
            await logout(tokenId);
            expect(mockModelMethods.mockStaticDestroy).toHaveBeenCalled();
            expect(mockModelMethods.mockStaticDestroy).toHaveBeenCalledWith({
                where: {
                    tokenId
                }
            });
        });
    });

    describe('createRefreshToken service test suite', () => {
        const refreshToken = 'refresh...';

        it('should return a refresh token', async () => {
            mockJwtSign.mockReturnValueOnce(refreshToken);

            const newRefreshToken = await createRefreshToken(userInfos.userId, userInfos.roleId);

            expect(newRefreshToken).toBe(refreshToken);
            expect(mockBcryptHash).toHaveBeenCalled();
            expect(mockJwtSign).toHaveBeenCalled();
            expect(mockModelMethods.mockCreate).toHaveBeenCalled();
        });

        it('should return a refresh token with a custom expiration date', async () => {
            mockJwtSign.mockReturnValueOnce(refreshToken);
            const expiration = 999999999;

            const newRefreshToken = await createRefreshToken(userInfos.userId, userInfos.roleId, expiration);

            expect(newRefreshToken).toBe(refreshToken);
            expect(mockBcryptHash).toHaveBeenCalled();
            expect(mockJwtSign).toHaveBeenCalled();
            expect(mockJwtSign.mock.calls[0][0]).toHaveProperty('exp', expiration);
            expect(mockModelMethods.mockCreate).toHaveBeenCalled();
            expect(mockModelMethods.mockCreate.mock.calls[0][0]).toHaveProperty('userId', userInfos.userId);
            expect(mockModelMethods.mockCreate.mock.calls[0][0]).toHaveProperty('expiration', expiration * 1000);
        });
    });

    describe('createRefreshToken service test suite', () => {
        const accessToken = 'access!';

        it('should return an access token', async () => {
            mockJwtSign.mockReturnValueOnce(accessToken);

            const newRefreshToken = await createAccessToken(userInfos.userId, userInfos.roleId);

            expect(newRefreshToken).toBe(accessToken);
        });
    });

    describe('validatePassword test suite', () => {
        const user = new db.models.User({ password: 'passwordhash' });
        const password = 'password';

        it('should return true if the password is valid', async () => {
            mockBcryptCompare.mockResolvedValueOnce(true);
            await expect(validatePassword(password, user)).resolves.toBe(true);
        });

        it('should return false if the password is invalid', async () => {
            mockBcryptCompare.mockResolvedValueOnce(false);
            await expect(validatePassword(password, user)).rejects.toBeInstanceOf(UnauthorizedError);
        });
    });
});