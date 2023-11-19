import interpret, {
    getValue,
    get,
    eq,
    or,
} from '../../src/authorization/condition-operators.js';
import { compare } from '@ucast/js';
import { FieldCondition } from '@ucast/core';

describe('Operators test suite', () => {
    const error = new Error('error');

    const proxyHandler = {
        get: function (target, prop) {
            return new Promise((resolve, reject) => {
                if (!target[prop]) {
                    reject(error);
                } else {
                    resolve(target[prop]);
                }
            });
        },
    };

    const baseUser = {
        userId: 113,
        role: {
            roleId: 1,
            name: 'user',
        },
        subjects: [56],
    };

    const baseSubject = {
        id: 12,
        title: 'title',
        message: 'message',
        users: [baseUser.userId, 54],
    };

    baseUser.subjects.push(baseSubject.id);

    const data = {
        User: new Proxy(baseUser, proxyHandler),
        Subject: new Proxy(baseSubject, proxyHandler),
    };



    describe('get test suite', () => {
        it('should return the value of the property', async () => {
            expect.assertions(1);
            try {
                const value = await get(data, 'User.role.name');
                expect(value).toBe(baseUser.role.name);
            } catch (error) {
                console.log(error);
            }
        });


        it('should return a promise rejected with an error', async () => {
            expect.assertions(1);
            try {
                await get(data, 'User.error');
            } catch (error) {
                expect(error).toEqual(error);
            }
        });
    });



    describe('getValue test suite', () => {
        it('should return the value if the value has nothing special', async () => {
            const condition = {
                field: 'User.userId',
                value: 13,
            };
            const value = await getValue(condition, data);

            expect(value).toBe(condition.value);
        });


        it('should return the targeted User property', async () => {
            const condition = {
                field: 'User.userId',
                value: '{{User.userId}}',
            };
            const value = await getValue(condition, data);

            expect(value).toBe(baseUser.userId);
        });


        it('should return the targeted Subject property', async () => {
            const condition = {
                field: 'User.userId',
                value: '{{Subject.id}}',
            };
            const value = await getValue(condition, data);

            expect(value).toBe(baseSubject.id);
        });


        it('should return the value if the value has the syntax of a special string but does not target User nor Subject', async () => {
            const condition = {
                field: 'User.userId',
                value: '{{Test.id}}',
            };
            const value = await getValue(condition, data);

            expect(value).toBe(condition.value);
        });


        it('should return the special string with no escape character', async () => {
            const result = '{{User.userId}}';
            const condition = {
                field: 'User.userId',
                value: '\\' + result,
            };
            const value = await getValue(condition, data);

            expect(value).toBe(result);
        });


        it('should reject with an error if the proxy rejects with an error', async () => {
            const condition = {
                field: 'User.userId',
                value: '{{User.error}}',
            };

            await expect(getValue(condition, data)).rejects.toEqual(error);
        });
    });



    describe('eq test suite', () => {
        it('should return true if both values are equal', async () => {
            const condition = {
                field: 'User.userId',
                value: '{{User.userId}}',
            };

            const result = await eq(condition, data, { compare });

            expect(result).toBe(true);
        });


        it('should return false if both value are different', async () => {
            const condition = {
                field: 'User.userId',
                value: '{{Subject.id}}',
            };

            const result = await eq(condition, data, { compare });

            expect(result).toBe(false);
        });


        it('should return true if the value of the object is an array containing the value of the condition', async () => {
            const condition = {
                field: 'Subject.users',
                value: '{{User.userId}}',
            };

            const result = await eq(condition, data, { compare });

            expect(result).toBe(true);
        });


        it('should return false if the value of the object is an array that does not include the value of the condition', async () => {
            const condition = {
                field: 'Subject.users',
                value: '{{User.role.name}}',
            };

            const result = await eq(condition, data, { compare });

            expect(result).toBe(false);
        });


        it('should return false if both values are arrays', async () => {
            const condition = {
                field: 'User.subjects',
                value: '{{Subject.users}}',
            };

            const result = await eq(condition, data, { compare });

            expect(result).toBe(false);
        });
    });



    describe('or test suite', () => {
        it('should return true if one condition is true', async () => {
            const condition = {
                value: [
                    new FieldCondition('eq', 'User.userId', baseUser.userId),
                    new FieldCondition('eq', 'User.userId', baseUser.userId + 1),
                ],
            };

            const result = await or(condition, data, { interpret });

            expect(await interpret(condition.value[0], data)).toBe(true);
            expect(await interpret(condition.value[1], data)).toBe(false);
            expect(result).toBe(true);
        });


        it('should return false no condition is true', async () => {
            const condition = {
                value: [
                    new FieldCondition('eq', 'User.userId', baseUser.userId - 1),
                    new FieldCondition('eq', 'User.userId', baseUser.userId + 1),
                ],
            };

            const result = await or(condition, data, { interpret });

            expect(await interpret(condition.value[0], data)).toBe(false);
            expect(await interpret(condition.value[1], data)).toBe(false);
            expect(result).toBe(false);
        });
    });



    describe('Interpreter test suite', () => {
        const simpleData = {
            number: 3,
        };

        it('should return a Promise resolved with true', async () => {
            const condition = new FieldCondition('eq', 'number', simpleData.number);
            const result = interpret(condition, simpleData);

            expect(result).toBeInstanceOf(Promise);
            expect(result).resolves.toBe(true);
        });


        it('should return a Promise resolved with false', async () => {
            const condition = new FieldCondition('eq', 'number', simpleData.number + 1);
            const result = interpret(condition, simpleData);

            expect(result).toBeInstanceOf(Promise);
            expect(result).resolves.toBe(false);
        });


        it('should return a Promise rejected with an error', () => {
            const condition = new FieldCondition('eq', 'User.error', 3);
            const result = interpret(condition, data);

            expect(result).toBeInstanceOf(Promise);
            expect(result).rejects.toEqual(error);
        });
    });
});