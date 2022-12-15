import { logout, createRefreshToken, createAccessToken, validatePassword, validateRefreshToken, invalidateRefreshToken } from '../../src/services/auth.js';
import { jest } from '@jest/globals';
import db from '../../src/models/index.js';
import MockModel, * as mockModelMethods from '../mocks/mock-models.test.js';
import bcrypt from 'bcrypt';
import { InternalServerError, UnauthorizedError } from '../../src/errors/index.js';
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
        const user = new MockModel({ password: 'passwordhash' });
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

    describe('validateRefreshToken test suite', () => {
        const tokenId = 'tokenId';
        const refreshToken = new MockModel({
            tokenId,
            expiration: 11111111111,
            tokenValue: 'hashed token value',
            userId: 113
        });

        it('should return true if the password is valid', async () => {
            mockModelMethods.mockFindByPk.mockResolvedValueOnce(refreshToken);
            await expect(validateRefreshToken(tokenId)).resolves.toBe(refreshToken);
        });

        it('should return false if the password is invalid', async () => {
            mockModelMethods.mockFindByPk.mockResolvedValueOnce(null);
            await expect(validateRefreshToken(tokenId)).rejects.toBeInstanceOf(UnauthorizedError);
        });
    });

    describe('invalidateRefreshToken test suite', () => {
        const tokenId = 'tokenId';
        const userId = 113;
        const refreshToken = new MockModel({
            tokenId,
            expiration: 11111111111,
            tokenValue: 'hashed token value',
            userId
        });

        it('should use the token id to choose the refresh token to delete', async () => {
            await invalidateRefreshToken(tokenId);
            expect(mockModelMethods.mockStaticDestroy).toHaveBeenCalled();
            expect(mockModelMethods.mockStaticDestroy).toHaveBeenCalledWith({
                where: {
                    tokenId
                }
            });
        });

        it('should use the user id to choose the refresh token to delete', async () => {
            await invalidateRefreshToken(userId);
            expect(mockModelMethods.mockStaticDestroy).toHaveBeenCalled();
            expect(mockModelMethods.mockStaticDestroy).toHaveBeenCalledWith({
                where: {
                    userId
                }
            });
        });

        it('should delete the token corresponding to the RefreshToken instance given', async () => {
            await invalidateRefreshToken(refreshToken);
            expect(mockModelMethods.mockInstanceDestroy).toHaveBeenCalled();
        });

        it('should throw if the parameter don\'t have the right type', async () => {
            await expect(invalidateRefreshToken(true)).rejects.toBeInstanceOf(InternalServerError);
        });
    });
});