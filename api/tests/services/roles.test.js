import { getAllRoles } from '../../src/services/roles.js';
import { jest } from '@jest/globals';
import db from '../../src/models/index.js';
import MockModel, * as mockModelMethods from '../mocks/mock-models.js';

jest.spyOn(db, 'models', 'get').mockImplementation(
    () => new Proxy(
        { Model: MockModel },
        {
            get: (target) => target.Model,
        }
    )
);

beforeEach(() => {
    mockModelMethods.clearMocks();
});

describe('User services test suite', () => {
    describe('Get all roles service test suite', () => {
        const rolesData = [
            {
                roleId: 1,
                name: 'admin',
            },
            {
                roleId: 1,
                name: 'admin',
            },
        ];

        it('should get all users\' informations', async () => {
            mockModelMethods.mockFindAll.mockResolvedValueOnce(rolesData.map((value) => new MockModel(value)));
            const roles = await getAllRoles();

            expect(Array.isArray(roles)).toBe(true);
            expect(roles).toHaveLength(2);

            for (const index in roles) {
                expect(roles[index]).toHaveProperty('name', rolesData[index].name);
                expect(roles[index]).toHaveProperty('roleId', rolesData[index].roleId);
            }

            expect(mockModelMethods.mockFindAll.mock.calls[0][0]).toHaveProperty('order');
            expect(mockModelMethods.mockFindAll.mock.calls[0][0].order).toContainEqual(['roleId', 'ASC']);
        });
    });
});