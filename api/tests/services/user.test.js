import {
    createUser,
    getUserByEmail,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser,
} from '../../src/services/users.js';
import { jest } from '@jest/globals';
import db from '../../src/models/index.js';
import MockModel, * as mockModelMethods from '../mocks/mock-models.js';
import bcrypt from 'bcrypt';
import { NotFoundError } from '../../src/errors/index.js';

jest.spyOn(db, 'models', 'get').mockImplementation(
    () => new Proxy(
        { Model: MockModel },
        {
            get: (target) => target.Model,
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
        roleId: 1,
    };


    describe('Create user service test suite', () => {
        it('should create a user with the default role id and return the user', async () => {
            const newUser = await createUser({ email: userInfos.email, password: userInfos.password });

            expect(newUser).toHaveProperty('email', userInfos.email);
            expect(newUser).toHaveProperty('password', userInfos.password);
        });

        it('should create a user with the given role id and return the user', async () => {
            const newUser = await createUser(userInfos);

            expect(newUser).toHaveProperty('email', userInfos.email);
            expect(newUser).toHaveProperty('password', userInfos.password);
            expect(newUser).toHaveProperty('roleId', 1);
        });
    });



    describe('Get user by email service test suite', () => {
        it('should get the user informations', async () => {
            const returnedUserInfos = {
                email: userInfos.email,
                password: 'mockedBcryptHash',
                roleId: userInfos.roleId,
                userId: 113,
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



    describe('Get user by id service test suite', () => {
        it('should get the user informations', async () => {
            const returnedUserInfos = {
                email: userInfos.email,
                roleId: userInfos.roleId,
                userId: 113,
            };
            mockModelMethods.mockFindByPk.mockResolvedValueOnce(new MockModel(returnedUserInfos));
            const user = await getUserById(returnedUserInfos.userId);

            expect(user).toHaveProperty('email', returnedUserInfos.email);
            expect(user).toHaveProperty('roleId', returnedUserInfos.roleId);
            expect(user).toHaveProperty('userId', returnedUserInfos.userId);
            expect(mockModelMethods.mockFindByPk).toHaveBeenCalled();
            expect(mockModelMethods.mockFindByPk.mock.calls[0][1]).toHaveProperty('attributes');
            expect(mockModelMethods.mockFindByPk.mock.calls[0][1].attributes).toContain('email');
            expect(mockModelMethods.mockFindByPk.mock.calls[0][1].attributes).toContainEqual('userId');
            expect(mockModelMethods.mockFindByPk.mock.calls[0][1].attributes).toContain('roleId');
        });

        it('should get the user informations with more informations about the user\'s role', async () => {
            const returnedUserInfos = {
                email: userInfos.email,
                role: {
                    roleId: userInfos.roleId,
                    name: 'role',
                },
                id: 113,
            };
            mockModelMethods.mockFindByPk.mockResolvedValueOnce(new MockModel(returnedUserInfos));
            const user = await getUserById(returnedUserInfos.email, { roleInfo: true });

            expect(user).toHaveProperty('email', returnedUserInfos.email);
            expect(user).toHaveProperty('role');
            expect(user.role).toHaveProperty('roleId', returnedUserInfos.role.roleId);
            expect(user.role).toHaveProperty('name', returnedUserInfos.role.name);
            expect(user).toHaveProperty('id', returnedUserInfos.id);
            expect(user).not.toHaveProperty('roleId');
            expect(mockModelMethods.mockFindByPk).toHaveBeenCalled();
            expect(mockModelMethods.mockFindByPk.mock.calls[0][1]).toHaveProperty('attributes');
            expect(mockModelMethods.mockFindByPk.mock.calls[0][1].attributes).toContain('email');
            expect(mockModelMethods.mockFindByPk.mock.calls[0][1].attributes).toContain('userId');
            expect(mockModelMethods.mockFindByPk.mock.calls[0][1].attributes).not.toContain('roleId');
            expect(mockModelMethods.mockFindByPk.mock.calls[0][1]).toHaveProperty('include');
            expect(mockModelMethods.mockFindByPk.mock.calls[0][1].include).toHaveProperty('association', 'role');
            expect(mockModelMethods.mockFindByPk.mock.calls[0][1].include).toHaveProperty('attributes');
            expect(mockModelMethods.mockFindByPk.mock.calls[0][1].include.attributes).toContain('roleId');
            expect(mockModelMethods.mockFindByPk.mock.calls[0][1].include.attributes).toContain('name');
        });

        it('should create throw a NotFoundError if the user doesn\'t exist', async () => {
            expect.assertions(1);
            mockModelMethods.mockFindByPk.mockResolvedValueOnce(null);
            await expect(getUserById(113)).rejects.toBeInstanceOf(NotFoundError);
        });
    });



    describe('Get all users service test suite', () => {
        const otherUser = {
            email: 'other@email.com',
            roleId: 1,
            userId: 114,
        };

        it('should get all users\' informations', async () => {
            const returnedUserInfos = [
                {
                    email: userInfos.email,
                    roleId: userInfos.roleId,
                    userId: 113,
                },
                otherUser,
            ];

            mockModelMethods.mockFindAll.mockResolvedValueOnce(returnedUserInfos.map((value) => new MockModel(value)));
            const users = await getAllUsers();

            expect(Array.isArray(users)).toBe(true);
            expect(users).toHaveLength(2);

            for (const index in users) {
                expect(users[index]).toHaveProperty('email', returnedUserInfos[index].email);
                expect(users[index]).toHaveProperty('roleId', returnedUserInfos[index].roleId);
                expect(users[index]).toHaveProperty('userId', returnedUserInfos[index].userId);
            }

            expect(mockModelMethods.mockFindAll).toHaveBeenCalled();
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('attributes');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].attributes).toContain('email');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].attributes).toContainEqual('userId');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].attributes).toContain('roleId');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('order');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].order).toContainEqual(['email', 'ASC']);
        });

        it('should get all users\' informations if they match the roleId', async () => {
            const returnedUserInfos = [
                {
                    email: userInfos.email,
                    roleId: userInfos.roleId,
                    userId: 113,
                },
            ];

            mockModelMethods.mockFindAll.mockResolvedValueOnce(returnedUserInfos.map((value) => new MockModel(value)));
            const users = await getAllUsers({ role: userInfos.roleId });

            expect(Array.isArray(users)).toBe(true);
            expect(users).toHaveLength(1);

            for (const index in users) {
                expect(users[index]).toHaveProperty('email', returnedUserInfos[index].email);
                expect(users[index]).toHaveProperty('roleId', returnedUserInfos[index].roleId);
                expect(users[index]).toHaveProperty('userId', returnedUserInfos[index].userId);
            }

            expect(mockModelMethods.mockFindAll).toHaveBeenCalled();
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('attributes');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].attributes).toContain('email');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].attributes).toContainEqual('userId');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].attributes).toContain('roleId');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('where');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].where).toHaveProperty('roleId', userInfos.roleId);
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('order');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].order).toContainEqual(['email', 'ASC']);
        });

        it('should get all users\' informations if they match the role name', async () => {
            const returnedUserInfos = [
                {
                    email: userInfos.email,
                    roleId: userInfos.roleId,
                    userId: 113,
                },
            ];

            const roleName = 'admin';

            mockModelMethods.mockFindAll.mockResolvedValueOnce(returnedUserInfos.map((value) => new MockModel(value)));
            const users = await getAllUsers({ role: roleName });

            expect(Array.isArray(users)).toBe(true);
            expect(users).toHaveLength(1);

            for (const index in users) {
                expect(users[index]).toHaveProperty('email', returnedUserInfos[index].email);
                expect(users[index]).toHaveProperty('roleId', returnedUserInfos[index].roleId);
                expect(users[index]).toHaveProperty('userId', returnedUserInfos[index].userId);
            }

            expect(mockModelMethods.mockFindAll).toHaveBeenCalled();
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('attributes');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].attributes).toContain('email');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].attributes).toContainEqual('userId');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].attributes).toContain('roleId');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('include');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].include).toHaveProperty('association', 'role');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].include).toHaveProperty('attributes');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].include.attributes).toHaveLength(0);
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('where', { '$role.name$': 'admin' });
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('order');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].order).toContainEqual(['email', 'ASC']);
        });

        it('should get all users\' informations paginated', async () => {
            const returnedUserInfos = [
                {
                    email: userInfos.email,
                    roleId: userInfos.roleId,
                    userId: 113,
                },
                otherUser,
            ];

            const limit = 1;
            const page = 2;

            mockModelMethods.mockFindAll.mockResolvedValueOnce([new MockModel(returnedUserInfos[1])]);
            const users = await getAllUsers({ limit, page });

            expect(Array.isArray(users)).toBe(true);
            expect(users).toHaveLength(1);

            expect(users[0]).toHaveProperty('email', returnedUserInfos[1].email);
            expect(users[0]).toHaveProperty('roleId', returnedUserInfos[1].roleId);
            expect(users[0]).toHaveProperty('userId', returnedUserInfos[1].userId);


            expect(mockModelMethods.mockFindAll).toHaveBeenCalled();
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('attributes');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].attributes).toContain('email');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].attributes).toContainEqual('userId');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].attributes).toContain('roleId');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('offset', (page - 1) * limit);
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('limit', limit);
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('order');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].order).toContainEqual(['email', 'ASC']);

        });

        it('should get the user informations with more informations about the user\'s role', async () => {
            const returnedUserInfos = [
                {
                    email: userInfos.email,
                    role: {
                        roleId: userInfos.roleId,
                        name: 'role',
                    },
                    id: 113,
                },
                {
                    email: otherUser.email,
                    role: {
                        roleId: otherUser.roleId,
                        name: 'role',
                    },
                    id: 113,
                },
            ];

            mockModelMethods.mockFindAll.mockResolvedValueOnce(returnedUserInfos.map((value) => new MockModel(value)));
            const users = await getAllUsers({ roleInfo: true });

            expect(Array.isArray(users)).toBe(true);
            expect(users).toHaveLength(2);

            for (const index in users) {
                expect(users[index]).toHaveProperty('email', returnedUserInfos[index].email);
                expect(users[index]).toHaveProperty('role');
                expect(users[index].role).toHaveProperty('roleId', returnedUserInfos[index].role.roleId);
                expect(users[index].role).toHaveProperty('name', returnedUserInfos[index].role.name);
                expect(users[index]).toHaveProperty('id', returnedUserInfos[index].id);
                expect(users[index]).not.toHaveProperty('roleId');
            }

            expect(mockModelMethods.mockFindAll).toHaveBeenCalled();
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('attributes');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].attributes).toContain('email');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].attributes).toContain('userId');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].attributes).not.toContain('roleId');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('include');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].include).toHaveProperty('association', 'role');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].include).toHaveProperty('attributes');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].include.attributes).toContain('roleId');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].include.attributes).toContain('name');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('order');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].order).toContainEqual(['email', 'ASC']);
        });
    });



    describe('Update user service test suite', () => {
        it('should return true', async () => {
            mockModelMethods.mockUpdate.mockResolvedValueOnce([1]);
            const user = await updateUser(113, { email: userInfos.email });

            expect(user).toBe(true);
        });


        it('should throw a NotFoundError if the user doesn\'t exist', async () => {
            expect.assertions(1);
            mockModelMethods.mockUpdate.mockResolvedValueOnce([0]);
            await expect(updateUser(113, { email: userInfos.email })).rejects.toBeInstanceOf(NotFoundError);
        });
    });



    describe('Delete user service test suite', () => {
        it('should return true', async () => {
            mockModelMethods.mockStaticDestroy.mockResolvedValueOnce(1);
            const user = await deleteUser(113);

            expect(user).toBe(true);
        });


        it('should throw a NotFoundError if the user doesn\'t exist', async () => {
            expect.assertions(1);
            mockModelMethods.mockStaticDestroy.mockResolvedValueOnce(0);
            await expect(deleteUser(113)).rejects.toBeInstanceOf(NotFoundError);
        });
    });
});