import createLoggerNamespace from '../../src/logger/logger-namespace.js';
import {Logger} from '../../src/logger/logger.js';
import {jest} from '@jest/globals';
import winstonOptions from '../../src/logger/logger-config.js';

const mockWinstonLog = jest.spyOn(Logger, 'log').mockImplementation(() => {});

beforeEach(() => {
    mockWinstonLog.mockClear();
});

describe('createLoggerNamespace returned function test suite', () => {
    const namespace = 'testLabel';
    const logLevel = 'info';
    const defaultMessage = 'Test message';
    const splatArray = ['string', 3, {prop: 'string'}];

    describe('Function test suite', () => {
        it('should call the winston log method with the right level', () =>{
            const loggerNamespace = createLoggerNamespace(namespace);
            loggerNamespace(logLevel, defaultMessage);

            expect(mockWinstonLog).toHaveBeenCalled();
            expect(mockWinstonLog.mock.calls[0][0]).toMatch(logLevel);
        });

        it('should call the winston log method with an object containing the info properties plus the new label', () =>{
            const loggerNamespace = createLoggerNamespace(namespace);
            const info = {
                message: defaultMessage
            };
            loggerNamespace(logLevel, info);

            expect(mockWinstonLog.mock.calls[0][1]).toEqual({...info, label: namespace});
        });

        it('should call the winston log method with an object containing the info properties, including its label', () =>{
            const loggerNamespace = createLoggerNamespace(namespace);
            const objectLabel = `specific${namespace}`;
            const info = {
                message: defaultMessage,
                label: objectLabel
            };
            loggerNamespace(logLevel, info);

            expect(mockWinstonLog.mock.calls[0][1]).toEqual({...info});
        });

        it('should call the winston log method with an object containing the new label and the info object as a message', () =>{
            const loggerNamespace = createLoggerNamespace(namespace);
            const info = {
                notMessage: 'random string',
                notLabel: 'random string'
            };
            loggerNamespace(logLevel, info);

            expect(mockWinstonLog.mock.calls[0][1]).toEqual({message: info, label: namespace});
        });

        it('should call the winston log method with an object containing the info value as a message and the new label', () =>{
            const loggerNamespace = createLoggerNamespace(namespace);
            loggerNamespace(logLevel, defaultMessage);

            expect(mockWinstonLog.mock.calls[0][1]).toEqual({message: defaultMessage, label: namespace});
        });

        it('should call the winston log method with an object containing the new info message, label and the string interpolation array', () =>{
            const loggerNamespace = createLoggerNamespace(namespace);
            loggerNamespace(logLevel, defaultMessage, ...splatArray);

            expect(mockWinstonLog.mock.calls[0][1]).toEqual({message: defaultMessage, label: namespace, splat: splatArray});
        });

        it('should call the winston log method with an object containing the new info message, label and its original string interpolation array', () =>{
            const loggerNamespace = createLoggerNamespace(namespace);
            const objectSplat = [...splatArray].reverse();
            const info = {
                message: defaultMessage,
                splat: objectSplat
            };
            loggerNamespace(logLevel, info, ...splatArray);

            expect(mockWinstonLog.mock.calls[0][1]).toEqual({...info, label: namespace});
        });

    });

    describe('Logging methods test suite', () => {
        const loggerNamespace = createLoggerNamespace(namespace);

        it('should have a method for each login level', () => {
            for (const level in winstonOptions.levels) {
                expect(loggerNamespace).toHaveProperty(level);
            }
        });

        it('should call the main log function with the right level', () => {
            for (const level in winstonOptions.levels) {
                loggerNamespace[level](defaultMessage, ...splatArray);
                expect(mockWinstonLog).toHaveBeenCalled();
                expect(mockWinstonLog).toHaveBeenCalledWith(level, {message: defaultMessage, label: namespace, splat: splatArray});
            }
        });
    });
});