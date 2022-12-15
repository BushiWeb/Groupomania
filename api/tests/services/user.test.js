import { createUser, getUserByEmail } from '../../src/services/users.js';
import { jest } from '@jest/globals';
import db from '../../src/models/index.js';
import MockModel, * as mockModelMethods from '../mocks/mock-models.test.js';
import bcrypt from 'bcrypt';
import { NotFoundError } from '../../src/errors/index.js';

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
    });

    describe('Get user by email service test suite', () => {
        it('should get the user informations', async () => {
            const returnedUserInfos = {
                email: userInfos.email,
                password: 'mockedBcryptHash',
                roleId: userInfos.roleId,
                userId: 113
            };
            mockModelMethods.mockFindOne.mockResolvedValueOnce(new MockModel(returnedUserInfos));
            const user = await getUserByEmail(returnedUserInfos.email);

            expect(user).toHaveProperty('email', returnedUserInfos.email);
            expect(user).toHaveProperty('password');
            expect(user).toHaveProperty('roleId', returnedUserInfos.roleId);
            expect(user).toHaveProperty('userId', returnedUserInfos.userId);
        });

        it('should create throw a NotFoundError if the user doesn\'t exist', async () => {
            expect.assertions(1);
            mockModelMethods.mockFindOne.mockResolvedValueOnce(null);
            await expect(getUserByEmail(userInfos.email)).rejects.toBeInstanceOf(NotFoundError);
        });
    });
});