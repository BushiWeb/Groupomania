import createBodyParser from '../../src/middlewares/body-parsing.js';
import { jest } from '@jest/globals';
import { mockNext, mockResponse, mockRequest } from '../mocks/mock-express.js';

const defaultError = new Error('Error');

const mockParserAlone = jest.fn((res, req, next) => next());
const mockParserWithDataFormating = jest.fn((res, req, next) => next());
const mockParserDirect = jest.fn((res, req, next) => next());
const mockParserNextError = jest.fn((res, req, next) => next(defaultError));
const mockParserThrowError = jest.fn(() => { throw defaultError; });
const mockDataFormating = jest.fn((body) => ({...body}));
const mockDataFormatingThrowError = jest.fn(() => { throw defaultError; });

const parserOptionsAllowEmpty = {
    'empty': {},
    'parser/alone': {
        parser: mockParserAlone
    },
    'parser/withDataFormatting': {
        parser: mockParserWithDataFormating,
        dataFormatting: mockDataFormating
    },
    'parser/noObject': mockParserDirect
};

const parserOptionsForbidEmpty = {
    'text/plain': {
        parser: mockParserAlone
    }
};

const parserOptionsErrors = {
    'next/error': {
        parser: mockParserNextError
    },
    'throw/error': {
        parser: mockParserThrowError
    },
    'dataFormatting/throw': {
        parser: mockParserWithDataFormating,
        dataFormatting: mockDataFormatingThrowError
    }
};

const parserMiddleware = createBodyParser(parserOptionsAllowEmpty);
const nonEmptyParserMiddleware = createBodyParser(parserOptionsForbidEmpty);
const errorsParserMiddleware = createBodyParser(parserOptionsErrors);

const request = mockRequest({}, '');
const next = mockNext();
const response = mockResponse();

beforeEach(() => {
    mockParserAlone.mockClear();
    mockParserWithDataFormating.mockClear();
    mockParserDirect.mockClear();
    mockParserNextError.mockClear();
    mockParserThrowError.mockClear();
    mockDataFormating.mockClear();
    mockDataFormatingThrowError.mockClear();
    next.mockClear();
});


describe('createBodyParser and its middleware test suite', () => {
    describe('Returned middleware test suite', () => {
        it('should call the next middleware if there is no Content-Type and an empty body is allowed', () => {
            parserMiddleware(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(0);
        });

        it('should call the middleware associated to the Content-Type parser/alone', () => {
            request.headers['content-type'] = 'parser/alone';
            parserMiddleware(request, response, next);
            expect(mockParserAlone).toHaveBeenCalled();
            expect(mockParserAlone.mock.calls[0]).toContainEqual(request);
            expect(mockParserAlone.mock.calls[0]).toContainEqual(response);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(0);
        });

        it('should call the middleware associated to the Content-Type parser/alone if the Content-Type is parser/alone;charset=utf-8', () => {
            request.headers['content-type'] = 'parser/alone;charset=utf-8';
            parserMiddleware(request, response, next);
            expect(mockParserAlone).toHaveBeenCalled();
            expect(mockParserAlone.mock.calls[0]).toContainEqual(request);
            expect(mockParserAlone.mock.calls[0]).toContainEqual(response);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(0);
        });

        it('should call the middleware and dataFormatting function associated to the Content-Type parser/withDataFormatting', () => {
            request.headers['content-type'] = 'parser/withDataFormatting';
            parserMiddleware(request, response, next);
            expect(mockParserWithDataFormating).toHaveBeenCalled();
            expect(mockParserWithDataFormating.mock.calls[0]).toContainEqual(request);
            expect(mockParserWithDataFormating.mock.calls[0]).toContainEqual(response);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(0);
            expect(mockDataFormating).toHaveBeenCalled();
            expect(mockDataFormating).toHaveBeenCalledWith(request.body);
        });

        it('should call the middleware function associated to the Content-Type parser/noObject', () => {
            request.headers['content-type'] = 'parser/noObject';
            parserMiddleware(request, response, next);
            expect(mockParserDirect).toHaveBeenCalled();
            expect(mockParserDirect.mock.calls[0]).toContainEqual(request);
            expect(mockParserDirect.mock.calls[0]).toContainEqual(response);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(0);
        });

        it('should call the next error middleware if the Content-Type is not allowed', () => {
            request.headers['content-type'] = 'not/allowed';
            parserMiddleware(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(1);
        });

        it('should call the next error middleware if the Content-Type is "empty"', () => {
            request.headers['content-type'] = 'empty';
            parserMiddleware(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(1);
        });

        it('should call the next error middleware if there is no body but a body is required', () => {
            request.headers['content-type'] = '';
            nonEmptyParserMiddleware(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(1);
        });

        it('should call the next error middleware if the middleware calls it\'s next middleware with an error', () => {
            request.headers['content-type'] = 'next/error';
            errorsParserMiddleware(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next).toHaveBeenCalledWith(defaultError);
        });

        it('should call the next error middleware if the middleware throws an error', () => {
            request.headers['content-type'] = 'throw/error';
            errorsParserMiddleware(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next).toHaveBeenCalledWith(defaultError);
        });

        it('should call the next error middleware if the data formatting function throws', () => {
            request.headers['content-type'] = 'dataFormatting/throw';
            errorsParserMiddleware(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next).toHaveBeenCalledWith(defaultError);
        });
    });
});