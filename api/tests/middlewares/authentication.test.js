import authenticate from '../../src/middlewares/authentication.js';
import { mockNext, mockResponse, mockRequest } from '../mocks/mock-express.js';
import { UnauthorizedError } from '../../src/errors/index.js';
import jwt from 'jsonwebtoken';
import { jest } from '@jest/globals';
import config from '../../src/config/config.js';

const mockJwtVerify = jest.spyOn(jwt, 'verify');

const request = mockRequest({});
const next = mockNext();
const response = mockResponse();

beforeEach(() => {
    next.mockClear();
    request.restore();
    response.clean();
    mockJwtVerify.mockReset();
});


describe('authenticate middleware test suite', () => {
    it('should call the next middleware if the user is authenticated', () => {
        request.headers.authorization = 'Bearer ghgsdqslkjfhqsldfkqsdqoiufhqkqnfqsdufhqso';
        const tokenPayload = {
            userId: 13,
            role: 2
        };
        mockJwtVerify.mockReturnValueOnce(tokenPayload);
        authenticate()(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
        expect(response.locals).toHaveProperty('auth', tokenPayload);
        expect(mockJwtVerify.mock.calls[0][1]).toEqual(config.get('jwt.key'));
    });

    it('should call the next middleware if the user is authenticated with a refresh token', () => {
        request.headers.authorization = 'Bearer ghgsdqslkjfhqsldfkqsdqoiufhqkqnfqsdufhqso';
        const tokenPayload = {
            userId: 13,
            jti: 'ffffff-ffffffff-fffffffffffffffff',
            role: 2
        };
        mockJwtVerify.mockReturnValueOnce(tokenPayload);
        authenticate(true)(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
        expect(response.locals).toHaveProperty('auth', tokenPayload);
        expect(mockJwtVerify.mock.calls[0][1]).toEqual(config.get('refreshJwt.key'));
    });

    it('should call the next middleware if the user is authenticated with a case insensitive bearer', () => {
        request.headers.authorization = 'bearer ghgsdqslkjfhqsldfkqsdqoiufhqkqnfqsdufhqso';
        const tokenPayload = {
            userId: 13,
            role: 2
        };
        mockJwtVerify.mockReturnValueOnce(tokenPayload);
        authenticate()(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
        expect(response.locals).toHaveProperty('auth', tokenPayload);
    });

    it('should call the next error middleware if there is no Authorization header', () => {
        authenticate()(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0][0]).toBeInstanceOf(UnauthorizedError);
        expect(next.mock.calls[0][0]).toHaveProperty('headers[www-authenticate]', 'Bearer');
    });

    it('should call the next error middleware if the authentication scheme is not bearer', () => {
        request.headers.authorization = 'basic ghgsdqslkjfhqsldfkqsdqoiufhqkqnfqsdufhqso';
        authenticate()(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0][0]).toBeInstanceOf(UnauthorizedError);
        expect(next.mock.calls[0][0]).toHaveProperty('headers[www-authenticate]', 'Bearer');
    });

    it('should call the next error middleware if the token is not valid anymore', () => {
        const errorMessage = 'Error message';
        const errorExpirationDate = Date.now();
        const expirationError = new jwt.TokenExpiredError(errorMessage, errorExpirationDate);
        mockJwtVerify.mockImplementation(() => { throw expirationError; });

        request.headers.authorization = 'Bearer ghgsdqslkjfhqsldfkqsdqoiufhqkqnfqsdufhqso';
        authenticate()(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0][0]).toEqual(expirationError);
    });

    it('should call the next error middleware if the token is not yet valid', () => {
        const errorMessage = 'Error message';
        const errorValidStartDate = Date.now();
        const notBeforeError = new jwt.NotBeforeError(errorMessage, errorValidStartDate);
        mockJwtVerify.mockImplementation(() => { throw notBeforeError; });

        request.headers.authorization = 'Bearer ghgsdqslkjfhqsldfkqsdqoiufhqkqnfqsdufhqso';
        authenticate()(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0][0]).toEqual(notBeforeError);
    });

    it('should call the next error middleware if the verification fails', () => {
        const errorMessage = 'Error message';
        const jwtError = new jwt.JsonWebTokenError(errorMessage);
        mockJwtVerify.mockImplementation(() => { throw jwtError; });

        request.headers.authorization = 'Bearer ghgsdqslkjfhqsldfkqsdqoiufhqkqnfqsdufhqso';
        authenticate()(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0][0]).toEqual(jwtError);
    });

    it('should call the next error middleware if the payload doesn\'t contain the userId', () => {
        request.headers.authorization = 'Bearer ghgsdqslkjfhqsldfkqsdqoiufhqkqnfqsdufhqso';
        const tokenPayload = {
            role: 2
        };
        mockJwtVerify.mockReturnValueOnce(tokenPayload);
        authenticate()(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0][0]).toBeInstanceOf(UnauthorizedError);
        expect(next.mock.calls[0][0]).toHaveProperty('headers[www-authenticate]', 'Bearer');
        expect(next.mock.calls[0][0].logDetails[0]).toHaveProperty('missingProperty', 'userId');
    });

    it('should call the next error middleware if the payload doesn\'t contain the role', () => {
        request.headers.authorization = 'Bearer ghgsdqslkjfhqsldfkqsdqoiufhqkqnfqsdufhqso';
        const tokenPayload = {
            userId: 2
        };
        mockJwtVerify.mockReturnValueOnce(tokenPayload);
        authenticate()(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0][0]).toBeInstanceOf(UnauthorizedError);
        expect(next.mock.calls[0][0]).toHaveProperty('headers[www-authenticate]', 'Bearer');
        expect(next.mock.calls[0][0].logDetails[0]).toHaveProperty('missingProperty', 'role');
    });

    it('should call the next error middleware if the payload of the refresh token doesn\'t contain the token id', () => {
        request.headers.authorization = 'Bearer ghgsdqslkjfhqsldfkqsdqoiufhqkqnfqsdufhqso';
        const tokenPayload = {
            userId: 2,
            role: 2
        };
        mockJwtVerify.mockReturnValueOnce(tokenPayload);
        authenticate(true)(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0][0]).toBeInstanceOf(UnauthorizedError);
        expect(next.mock.calls[0][0]).toHaveProperty('headers[www-authenticate]', 'Bearer');
        expect(next.mock.calls[0][0].logDetails[0]).toHaveProperty('missingProperty', 'jti');
    });
});