import { getEnvironment } from '../../src/utils/utils.js';
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
});