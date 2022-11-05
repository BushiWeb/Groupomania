import process from 'node:process';
import { normalizePort, getConnectionInformations, errorHandler } from '../../src/utils/server-utils.js';

describe('Server utils test suite', () => {
    describe('normalizePort test suite', () => {
        const port = 3000;
        it('should return the port number if it is given as a number', () => {
            expect(normalizePort(port)).toBe(port);
        });

        it('should return the port number if it is given as a string containing a number', () => {
            const portString = `${port}`;
            expect(normalizePort(portString)).toBe(port);
        });

        it('should throw an error if the port is given as a negative number', () => {
            expect(() => normalizePort(-port)).toThrow();
        });

        it('should throw an error if the port is given as a string not containing a number', () => {
            expect(() => normalizePort('test')).toThrow();
        });

        it('should throw an error if the port is neither a string nor a number', () => {
            expect(() => normalizePort(true)).toThrow();
        });
    });

    describe('getConnectionInformations test suite', () => {
        const mockServerAddress = jest.fn();
        const mockServer = { address: mockServerAddress };
        const addressObject = { port: 12346, family: 'IPv4', address: '127.0.0.1' };

        it('should return the address informations in a string if they are stored as an object', () => {
            mockServerAddress.mockReturnValueOnce(addressObject);

            const connectionInformations = getConnectionInformations(mockServer, addressObject.port);

            expect(typeof connectionInformations).toBe('string');
            expect(connectionInformations).toMatch(`${addressObject.port}`);
            expect(connectionInformations).toMatch(`${addressObject.family}`);
            expect(connectionInformations).toMatch(`${addressObject.address}`);
        });

        it('should return the address informations in a string if they are stored as a string', () => {
            const addressString = JSON.stringify(addressObject);
            mockServerAddress.mockReturnValueOnce(addressString);

            const connectionInformations = getConnectionInformations(mockServer, addressObject.port);

            expect(typeof connectionInformations).toBe('string');
            expect(connectionInformations).toMatch(addressString);
        });

        it('should return the port number if there is no address informations', () => {
            mockServerAddress.mockReturnValueOnce(null);

            const connectionInformations = getConnectionInformations(mockServer, addressObject.port);

            expect(connectionInformations).toMatch(`${addressObject.port}`);
        });
    });

    describe('errorHandler test suite', () => {
        class MockSystemError extends Error {
            constructor(syscall, code, message) {
                super(message);
                this.syscall = syscall;
                this.code = code;
            }
        }

        const mockProcessExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

        beforeEach(() => {
            mockProcessExit.mockClear();
            mockConsoleError.mockClear();
        });

        it('should log the error and exit the program', () => {
            const error = new MockSystemError('listen', 'EADDRINUSE', 'test message');
            errorHandler(error);

            expect(mockConsoleError).toHaveBeenCalled();
            expect(mockProcessExit).toHaveBeenCalled();
        });
    });
});
