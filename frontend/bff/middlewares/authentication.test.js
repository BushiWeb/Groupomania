import authenticate from './authentication.js';
import {
    mockNext,
    mockResponse,
    mockRequest,
} from '../utils/test/mock-express.js';
import { ForbiddenError, UnauthorizedError } from '../errors/index.js';
import config from '../config/config.js';

const request = mockRequest({});
const next = mockNext();
const response = mockResponse();

const validCrsfToken = '123';
const invalidCrsfToken = '456';

const csrfCookieName = config.get('antiCsrfToken.cookieName');

beforeEach(() => {
    next.mockClear();
    request.restore();
});

describe('authenticate and its middleware test suite', () => {
    it("should call the next function if the user mustn't be authenticated and the CRSF token is valid", () => {
        request.cookies[csrfCookieName] = validCrsfToken;
        request.headers['x-crsf-token'] = validCrsfToken;
        authenticate(false)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
    });

    it('should call the next function if the user is authenticated and the CRSF token is valid', () => {
        request.cookies[csrfCookieName] = validCrsfToken;
        request.session.user = true;
        request.headers['x-crsf-token'] = validCrsfToken;
        authenticate(true)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
    });

    it('should generate a new CRSF token and save it in the session and the response header', () => {
        request.cookies[csrfCookieName] = validCrsfToken;
        request.headers['x-crsf-token'] = validCrsfToken;
        authenticate(false)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
        expect(response.cookie).toHaveBeenCalled();
        expect(response.cookie.mock.calls[0][0]).toBe(csrfCookieName);
        expect(response.cookie.mock.calls[0][1]).not.toBe(validCrsfToken);
    });

    it('should extend the session ttl if the cookie expiration is close', () => {
        request.cookies[csrfCookieName] = validCrsfToken;
        request.headers['x-crsf-token'] = validCrsfToken;
        request.session.cookie.maxAge = config.get('session.cookieExp') / 2;
        authenticate(false)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
        expect(response.cookie).toHaveBeenCalled();
        expect(response.cookie.mock.calls[0][0]).toBe(csrfCookieName);
        expect(request.session.cookie.maxAge).toBe(
            config.get('session.cookieExp'),
        );
    });

    it('should not extend the session ttl if the cookie expiration is not close', () => {
        request.cookies[csrfCookieName] = validCrsfToken;
        request.headers['x-crsf-token'] = validCrsfToken;
        request.session.cookie.maxAge = config.get('session.cookieExp') * 2;
        authenticate(false)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
        expect(response.cookie).toHaveBeenCalled();
        expect(response.cookie.mock.calls[0][0]).toBe(csrfCookieName);
        expect(request.session.cookie.maxAge).toBe(
            config.get('session.cookieExp') * 2,
        );
    });

    it('should call the next error middleware if there is no X-CRSF-Token header', () => {
        request.cookies[csrfCookieName] = validCrsfToken;
        authenticate(false)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(1);
        expect(next.mock.calls[0][0]).toBeInstanceOf(ForbiddenError);
    });

    it('should call the next error middleware if there is no registered token', () => {
        request.headers['x-crsf-token'] = validCrsfToken;
        authenticate(false)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(1);
        expect(next.mock.calls[0][0]).toBeInstanceOf(ForbiddenError);
    });

    it('should call the next error middleware if the provided token is invalid', () => {
        request.cookies[csrfCookieName] = validCrsfToken;
        request.headers['x-crsf-token'] = invalidCrsfToken;
        authenticate(false)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(1);
        expect(next.mock.calls[0][0]).toBeInstanceOf(ForbiddenError);
    });

    it('should call the next error middleware if the user is not authenticated', () => {
        request.cookies[csrfCookieName] = validCrsfToken;
        request.headers['x-crsf-token'] = validCrsfToken;
        authenticate(true)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(1);
        expect(next.mock.calls[0][0]).toBeInstanceOf(UnauthorizedError);
    });
});
