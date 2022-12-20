import parseAccessControlRules from '../../src/authorisation/authorisation-parser.js';
import { Condition } from '@ucast/core';
import { jest } from '@jest/globals';

const mockProcessExit = jest.spyOn(process, 'exit').mockImplementation(() => {});

beforeEach(() => {
    mockProcessExit.mockClear();
});

describe('Authorization parser test suite', () => {
    const rules = [
        {
            actions: 'update',
            subject: 'User',
            fields: ['email', 'password'],
            conditions: { 'User.userId': '{{Subject.userId}}' }
        },
        {
            actions: 'update',
            subject: 'User',
            fields: ['roleId'],
            conditions: { 'User.roleId': 1 }
        },
        {
            actions: ['update', 'create'],
            subject: 'User',
            fields: ['roleId'],
            conditions: { 'User.roleId': 1 }
        },
        {
            actions: 'update',
            subject: 'User',
            fields: 'roleId',
            conditions: { 'User.roleId': 1 }
        },
        {
            subject: 'User',
            fields: ['email', 'password'],
            conditions: { 'User.roleId': 1 }
        },
        {
            actions: true,
            subject: 'User',
            fields: ['email', 'password'],
            conditions: { 'User.roleId': 1 }
        },
        {
            actions: [true, 'string'],
            subject: 'User',
            fields: ['email', 'password'],
            conditions: { 'User.roleId': 1 }
        },
        {
            actions: 'delete',
            fields: ['email', 'password'],
            conditions: { 'User.roleId': 1 }
        },
        {
            actions: 'delete',
            subject: true,
            fields: ['email', 'password'],
            conditions: { 'User.roleId': 1 }
        },
        {
            actions: 'delete',
            subject: 'User',
            conditions: { 'User.roleId': 1 }
        },
        {
            actions: 'delete',
            subject: 'User',
            fields: true,
            conditions: { 'User.roleId': 1 }
        },
        {
            actions: 'delete',
            subject: 'User',
            fields: [true, 'password'],
            conditions: { 'User.roleId': 1 }
        },
        {
            actions: 'delete',
            subject: 'User',
            fields: ['email', 'password'],
        },
    ];

    it('should return the parsed object', () => {
        const parsedRules = parseAccessControlRules([rules[0], rules[1]]);
        expect(parsedRules[0]).toMatchObject({
            actions: [rules[0].actions],
            subject: rules[0].subject,
            fields: rules[0].fields
        });
        expect(parsedRules[0].conditions).toBeInstanceOf(Condition);
        expect(parsedRules[1]).toMatchObject({
            actions: [rules[1].actions],
            subject: rules[1].subject,
            fields: rules[1].fields
        });
        expect(parsedRules[1].conditions).toBeInstanceOf(Condition);
    });


    it('should return the parsed object if the action is an array', () => {
        const parsedRules = parseAccessControlRules([rules[2]]);
        expect(parsedRules[0]).toMatchObject({
            actions: rules[2].actions,
            subject: rules[2].subject,
            fields: rules[2].fields
        });
        expect(parsedRules[0].conditions).toBeInstanceOf(Condition);
    });


    it('should return the parsed object if the fields is string', () => {
        const parsedRules = parseAccessControlRules([rules[3]]);
        expect(parsedRules[0]).toMatchObject({
            actions: [rules[3].actions],
            subject: rules[3].subject,
            fields: [rules[3].fields]
        });
        expect(parsedRules[0].conditions).toBeInstanceOf(Condition);
    });


    it('should call the exit method if the action is missing', () => {
        parseAccessControlRules([rules[4]]);
        expect(mockProcessExit).toHaveBeenCalled();
    });


    it('should call the exit method if the action is not a string nor an array', () => {
        parseAccessControlRules([rules[5]]);
        expect(mockProcessExit).toHaveBeenCalled();
    });


    it('should call the exit method if the action is an array containing other types than string', () => {
        parseAccessControlRules([rules[6]]);
        expect(mockProcessExit).toHaveBeenCalled();
    });


    it('should call the exit method if the subject is missing', () => {
        parseAccessControlRules([rules[7]]);
        expect(mockProcessExit).toHaveBeenCalled();
    });


    it('should call the exit method if the subject is not a string', () => {
        parseAccessControlRules([rules[8]]);
        expect(mockProcessExit).toHaveBeenCalled();
    });


    it('should return the parsed object if the fields are missing', () => {
        const parsedRules = parseAccessControlRules([rules[9]]);
        expect(parsedRules[0]).toMatchObject({
            actions: [rules[9].actions],
            subject: rules[9].subject,
            fields: []
        });
        expect(parsedRules[0].conditions).toBeInstanceOf(Condition);
    });


    it('should call the exit method if the fields are not a string nor an array', () => {
        parseAccessControlRules([rules[10]]);
        expect(mockProcessExit).toHaveBeenCalled();
    });


    it('should call the exit method if the fields are an array containing other types than string', () => {
        parseAccessControlRules([rules[11]]);
        expect(mockProcessExit).toHaveBeenCalled();
    });


    it('should return the parsed object if the conditions are missing', () => {
        const parsedRules = parseAccessControlRules([rules[12]]);
        expect(parsedRules[0]).toMatchObject({
            actions: [rules[12].actions],
            subject: rules[12].subject,
            fields: rules[12].fields
        });
        expect(parsedRules[0]).not.toHaveProperty('conditions');
    });
});