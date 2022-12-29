import {
    deleteValueFromPath,
    getEnvironment,
    getValueFromPath,
    setValueFromPath,
} from '../../src/utils/utils.js';
import { jest } from '@jest/globals';

describe('Utils functions test suite', () => {
    describe('getEnvironment test suite', () => {
        beforeEach(() => {
            jest.resetModules();
        });

        const envValue = 'randomEnv';

        afterEach(() => {
            process.env.NODE_ENV = 'test';
        });

        it('should return the value of the env parameter', () => {
            const envArgument = `--env=${envValue}`;
            process.argv.push(envArgument);

            expect(getEnvironment()).toBe(envValue.toLowerCase());
            process.argv.pop();
        });

        it('should return the value of the node_env environment variable', () => {
            process.env.NODE_ENV = envValue;

            expect(getEnvironment()).toBe(envValue.toLowerCase());
        });

        it('should return development', () => {
            delete process.env.NODE_ENV;

            expect(getEnvironment()).toBe('development');
        });
    });



    describe('getValueFromPath test suite', () => {
        const object = {
            p1: 'val',
            p2: {
                p2p1: 3,
                p2p2: {
                    p2p2p1: 'final',
                },
            },
        };
        it('should return the object if the path is empty', () => {
            expect(getValueFromPath(object)).toBe(object);
        });
        it('should return the property value', () => {
            expect(getValueFromPath(object, 'p2.p2p2.p2p2p1')).toBe(object.p2.p2p2.p2p2p1);
        });
        it('should return undefined if the property doesn\'t exist', () => {
            expect(getValueFromPath(object, 'p2.p2p2.pUn.p3')).toBeUndefined();
        });
    });



    describe('deleteValueFromPath test suite', () => {
        let object;

        beforeEach(() => {
            object = {
                p1: 'val',
                p2: {
                    p2p1: 3,
                    p2p2: {
                        p2p2p1: 'final',
                    },
                },
            };
        });

        it('should return the object if the path is empty', () => {
            expect(deleteValueFromPath(object)).toBe(object);
        });
        it('should return the object with the property missing', () => {
            const expectedObject = JSON.parse(JSON.stringify(object));
            delete expectedObject.p2.p2p2.p2p2p1;
            expect(deleteValueFromPath(object, 'p2.p2p2.p2p2p1')).toEqual(expectedObject);
        });
        it('should return the object if the property doesn\'t exist', () => {
            expect(deleteValueFromPath(object, 'p2.p2p2.pUn.p3')).toBe(object);
        });
    });



    describe('setValueFromPath test suite', () => {
        let object;
        const data = 113;

        beforeEach(() => {
            object = {
                p1: 'val',
                p2: {
                    p2p1: 3,
                    p2p2: {
                        p2p2p1: 'final',
                    },
                },
            };
        });

        it('should return the object with the new value if the path is empty', () => {
            expect(setValueFromPath(object, data)).toBe(data);
        });
        it('should update the targeted property', () => {
            expect(setValueFromPath(object, data, 'p2.p2p2.p2p2p1').p2.p2p2.p2p2p1).toBe(data);
        });
        it('should return undefined if the property doesn\'t exist', () => {
            expect(setValueFromPath(object, data, 'p2.p2p2.pUn.p3').p2.p2p2.pUn.p3).toBe(data);
        });
    });
});