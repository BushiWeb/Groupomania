import accessControlRules from '../../src/authorization/index.js';
import { Condition } from '@ucast/core';
import db from '../../src/models/index.js';
import MockModel, * as mockModelMethods from '../mocks/mock-models.js';
import { jest } from '@jest/globals';
import NotFoundError from '../../src/errors/NotFoundError';
import InternalServerError from '../../src/errors/InternalServerError';

describe('Access control object test suite', () => {
    describe('PEP test suite', () => {
        const mockParsedRules = [
            {
                actions: ['ncAction'],
                subject: 'subject',
                fields: ['field'],
            },
            {
                actions: ['action'],
                subject: 'subject',
                fields: ['field1', 'field2'],
                conditions: 'condition_action_subject_[field1,field2]'
            },
            {
                actions: ['nfAction'],
                subject: 'subject',
                fields: ['field1', 'field2'],
                conditions: 'condition_nfAction_subject_[field1,field2]'
            },
            {
                actions: ['nfAction'],
                subject: 'subject',
                fields: [],
                conditions: 'condition_nfAction_subject'
            },
            {
                actions: ['sfAction'],
                subject: 'subject',
                fields: ['field1', 'field2'],
                conditions: 'condition_sfAction_subject_[field1,field2]'
            },
            {
                actions: ['sfAction'],
                subject: 'subject',
                fields: [],
                conditions: 'condition_sfAction_subject'
            },
            {
                actions: ['afAction'],
                subject: 'subject',
                fields: ['field1', 'field2', 'field3'],
                conditions: 'condition_afAction_subject_[field1,field2,field3]'
            },
            {
                actions: ['afAction'],
                subject: 'subject',
                fields: [],
                conditions: 'condition_afAction_subject'
            },
            {
                actions: ['eafAction'],
                subject: 'subject',
                fields: ['field1', 'field2', 'field3'],
                conditions: 'condition_eafAction_subject_[field1,field2,field3]'
            },
            {
                actions: ['eafAction'],
                subject: 'subject',
                fields: [],
                conditions: 'condition_eafAction_subject'
            }
        ];

        accessControlRules.parsedRules = mockParsedRules;

        it('Should return true if rules are matching but no conditions are present', () => {
            const conditions = accessControlRules.PEP('subject', 'ncAction', 'field');
            expect(conditions).toBe(true);
        });


        it('should return false if no rules are matching because of the action', () => {
            const conditions = accessControlRules.PEP('subject', 'wrongAction', 'field');
            expect(conditions).toBe(false);
        });


        it('should return false if no rules are matching because of the subject', () => {
            const conditions = accessControlRules.PEP('wrongSubject', 'action', 'field');
            expect(conditions).toBe(false);
        });


        it('should return false if no rules are matching because of the fields that is a string', () => {
            const conditions = accessControlRules.PEP('subject', 'action', 'wrongField');
            expect(conditions).toBe(false);
        });


        it('should return false if no rules are matching because of the fields that is an array', () => {
            const conditions = accessControlRules.PEP('subject', 'action', ['wrongField']);
            expect(conditions).toBe(false);
        });


        it('should return false if no rules are matching because of the fields that is an empty array', () => {
            const conditions = accessControlRules.PEP('subject', 'action', []);
            expect(conditions).toBe(false);
        });


        it('should return false if no rules are matching because of the fields that is absent', () => {
            const conditions = accessControlRules.PEP('subject', 'action');
            expect(conditions).toBe(false);
        });


        it('should return a compound condition of type OR with all the matching rule\'s conditions when there is no field', () => {
            const conditions = accessControlRules.PEP('subject', 'nfAction');
            expect(conditions).toBeInstanceOf(Condition);
            expect(conditions.operator).toBe('or');
            expect(conditions.value).toHaveLength(1);
            expect(conditions.value).toContain('condition_nfAction_subject');
        });


        it('should return a compound condition of type or with all the matching rule\'s conditions when there is a single field', () => {
            const conditions = accessControlRules.PEP('subject', 'sfAction', 'field1');
            expect(conditions).toBeInstanceOf(Condition);
            expect(conditions.operator).toBe('or');
            expect(conditions.value).toHaveLength(2);
            expect(conditions.value).toContain('condition_sfAction_subject');
            expect(conditions.value).toContain('condition_sfAction_subject_[field1,field2]');
        });


        it('should return a compound condition of type or with all the matching rule\'s conditions when there is an array of fields', () => {
            const conditions = accessControlRules.PEP('subject', 'afAction', ['field1', 'field2']);
            expect(conditions).toBeInstanceOf(Condition);
            expect(conditions.operator).toBe('or');
            expect(conditions.value).toHaveLength(2);
            expect(conditions.value).toContain('condition_afAction_subject');
            expect(conditions.value).toContain('condition_afAction_subject_[field1,field2,field3]');
        });


        it('should return a compound condition of type or with all the matching rule\'s conditions when there is an empty array of fields', () => {
            const conditions = accessControlRules.PEP('subject', 'eafAction', []);
            expect(conditions).toBeInstanceOf(Condition);
            expect(conditions.operator).toBe('or');
            expect(conditions.value).toHaveLength(1);
            expect(conditions.value).toContain('condition_eafAction_subject');
        });
    });



    describe('PIP test suite', () => {
        jest.spyOn(db, 'models', 'get').mockImplementation(
            () => new Proxy(
                {Model: MockModel},
                {
                    get: (target) => target.Model
                }
            )
        );

        const dbEntry = {
            id: 36,
            email: 'test@email.com',
            roleId: 1,
            age: 13
        };

        let base;

        const modelName = 'UserTest';

        beforeEach(() => {
            mockModelMethods.clearMocks();
            base = {
                id: dbEntry.id,
                email: dbEntry.email
            };
        });

        it('should return the property if the property is already in the object', async () => {
            const proxy = accessControlRules.PIP(modelName, base);
            const idValue = await proxy.id;

            expect(idValue).toBe(base.id);
            expect(mockModelMethods.mockFindAll).not.toHaveBeenCalled();
            expect(mockModelMethods.mockGetAttributes).not.toHaveBeenCalled();
        });


        it('should fetch the property form the datase and save it if the property is not in the object', async () => {
            mockModelMethods.mockGetAttributes.mockReturnValueOnce(dbEntry);
            mockModelMethods.mockFindAll.mockResolvedValueOnce([dbEntry]);

            const proxy = accessControlRules.PIP(modelName, base);
            const ageValue = await proxy.age;

            expect(ageValue).toBe(dbEntry.age);
            expect(mockModelMethods.mockFindAll).toHaveBeenCalled();
            expect(mockModelMethods.mockGetAttributes).toHaveBeenCalled();

            mockModelMethods.clearMocks();

            expect(await proxy.age).toBe(dbEntry.age);
            expect(mockModelMethods.mockFindAll).not.toHaveBeenCalled();
            expect(mockModelMethods.mockGetAttributes).not.toHaveBeenCalled();
        });


        it('should throw a NotFoundError if the object doesn\'t have a corresponding entry in the database', async () => {
            mockModelMethods.mockGetAttributes.mockReturnValueOnce(dbEntry);
            mockModelMethods.mockFindAll.mockResolvedValueOnce([]);

            const proxy = accessControlRules.PIP(modelName, base);
            await expect(proxy.roleId).rejects.toBeInstanceOf(NotFoundError);
        });


        it('should throw an InternalServerError if the property isn\'t defined in the model', async () => {
            mockModelMethods.mockGetAttributes.mockReturnValueOnce(dbEntry);

            const proxy = accessControlRules.PIP(modelName, base);
            await expect(proxy.absentProp).rejects.toBeInstanceOf(InternalServerError);
        });


        it('should throw an NotFoundError if multiple entries are found', async () => {
            mockModelMethods.mockGetAttributes.mockReturnValueOnce(dbEntry);
            mockModelMethods.mockFindAll.mockResolvedValueOnce([dbEntry, dbEntry]);

            const proxy = accessControlRules.PIP(modelName, base);
            await expect(proxy.roleId).rejects.toBeInstanceOf(NotFoundError);
        });
    });
});
