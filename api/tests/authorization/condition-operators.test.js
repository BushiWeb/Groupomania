import { getValue, get } from '../../src/authorization/condition-operators.js';

describe('Operators test suite', () => {
    const error = new Error('error');

    const proxyHandler = {
        get: function(target, prop) {
            return new Promise((resolve, reject) => {
                if (!target[prop]) {
                    reject(error);
                } else {
                    resolve(target[prop]);
                }
            });
        }
    };

    const baseUser = {
        userId: 113,
        role: {
            roleId: 1,
            name: 'user'
        }
    };

    const baseSubject = {
        id: 12,
        title: 'title',
        message: 'message'
    };

    const data = {
        User: new Proxy(baseUser, proxyHandler),
        Subject: new Proxy(baseSubject, proxyHandler)
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
                value: 13
            };
            const value = await getValue(condition, data);

            expect(value).toBe(condition.value);
        });


        it('should return the targeted User property', async () => {
            const condition = {
                field: 'User.userId',
                value: '{{User.userId}}'
            };
            const value = await getValue(condition, data);

            expect(value).toBe(baseUser.userId);
        });


        it('should return the targeted Subject property', async () => {
            const condition = {
                field: 'User.userId',
                value: '{{Subject.id}}'
            };
            const value = await getValue(condition, data);

            expect(value).toBe(baseSubject.id);
        });


        it('should return the value if the value has the syntax of a special string but does not target User nor Subject', async () => {
            const condition = {
                field: 'User.userId',
                value: '{{Test.id}}'
            };
            const value = await getValue(condition, data);

            expect(value).toBe(condition.value);
        });


        it('should return the special string with no escape character', async () => {
            const result = '{{User.userId}}';
            const condition = {
                field: 'User.userId',
                value: '\\' + result
            };
            const value = await getValue(condition, data);

            expect(value).toBe(result);
        });


        it('should reject with an error if the proxy rejects with an error', async () => {
            const condition = {
                field: 'User.userId',
                value: '{{User.error}}'
            };

            await expect(getValue(condition, data)).rejects.toEqual(error);
        });
    });
});