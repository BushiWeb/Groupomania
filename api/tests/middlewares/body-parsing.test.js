import createBodyParser from '../../src/middlewares/body-parsing.js';
import { jest } from '@jest/globals';
import express from 'express';
import { mockNext, mockResponse, mockRequest } from '../mocks/mock-express.js';

const mockExpressReturnedMiddleware = jest.fn((res, req, next) => next());
const mockExpressText = jest.spyOn(express, 'text').mockImplementation(() => mockExpressReturnedMiddleware);
const mockFunctionReturnedMiddleware = jest.fn((res, req, next) => next());
// eslint-disable-next-line no-unused-vars
const mockFctGenMiddleware = jest.fn((options) => mockFunctionReturnedMiddleware);
const functionInstanceGenMiddleware = (options) => mockFctGenMiddleware(options);
const mockObjectReturnedMiddleware = jest.fn((res, req, next) => next());
// eslint-disable-next-line no-unused-vars
const mockMethodGenMiddleware = jest.fn((options) => mockObjectReturnedMiddleware);
const mockObjectGenMiddleware = {
    method: mockMethodGenMiddleware
};
const mockDataFormating = jest.fn((body) => ({...body}));

const parserOptionsPositive = {
    'empty': {},
    'text/plain': {
        parser: 'text',
        options: {
            textOptions: 'value'
        }
    },
    'application/json': {
        parser:functionInstanceGenMiddleware,
        options: {
            parameter: 'value'
        },
        dataFormatting: mockDataFormating
    },
    'multipart/form-data': {
        parser: mockObjectGenMiddleware,
        options: {
            method: 'method',
            methodOptions: {
                option: 'value'
            }
        }
    }
};

const parserOptionsNegative = {
    'application/xml': {
        parser: mockObjectGenMiddleware,
        options: {
            invalid: 'value'
        }
    },
    'application/zip': {
        parser: true
    }
};

let middlewarePositive;
let middlewareNegative;

const request = mockRequest({}, '');
const next = mockNext();
const response = mockResponse();

beforeEach(() => {
    mockExpressText.mockClear();
    mockFunctionReturnedMiddleware.mockClear();
    mockFctGenMiddleware.mockClear();
    mockObjectReturnedMiddleware.mockClear();
    mockMethodGenMiddleware.mockClear();
    mockDataFormating.mockClear();
    next.mockClear();
});


describe('createBodyParser and its middleware test suite', () => {
    describe('createBodyParser test suite', () => {
        it('should call the parser functions / methods', () => {
            middlewarePositive = createBodyParser(parserOptionsPositive);
            expect(mockExpressText).toHaveBeenCalled();
            expect(mockExpressText).toHaveBeenCalledWith(parserOptionsPositive['text/plain'].options);
            expect(mockFctGenMiddleware).toHaveBeenCalled();
            expect(mockFctGenMiddleware).toHaveBeenCalledWith(parserOptionsPositive['application/json'].options);
            expect(mockMethodGenMiddleware).toHaveBeenCalled();
            expect(mockMethodGenMiddleware).toHaveBeenCalledWith(parserOptionsPositive['multipart/form-data'].options.methodOptions);
        });

        it('shouldn\'t call the method if the method name is not given', () => {
            middlewareNegative = createBodyParser(parserOptionsNegative);
            expect(mockMethodGenMiddleware).not.toHaveBeenCalled();
        });
    });


    describe('Returned middleware test suite', () => {
        it('should call the next middleware if there is no Content-Type and an empty body is allowed', () => {
            middlewarePositive(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(0);
        });

        it('should call the express.text returned middleware if the Content-Type is text/plain', () => {
            request.headers['content-type'] = 'text/plain';
            middlewarePositive(request, response, next);
            expect(mockExpressReturnedMiddleware).toHaveBeenCalled();
            expect(mockExpressReturnedMiddleware.mock.calls[0]).toContainEqual(request);
            expect(mockExpressReturnedMiddleware.mock.calls[0]).toContainEqual(response);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(0);
        });

        it('should call the express.text method if the Content-Type is text/plain;charset=utf-8', () => {
            request.headers['content-type'] = 'text/plain;charset=utf-8';
            middlewarePositive(request, response, next);
            expect(mockExpressReturnedMiddleware).toHaveBeenCalled();
            expect(mockExpressReturnedMiddleware.mock.calls[0]).toContainEqual(request);
            expect(mockExpressReturnedMiddleware.mock.calls[0]).toContainEqual(response);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(0);
        });

        it('should call the function and the associated middleware if the Content-Type is application/json', () => {
            request.headers['content-type'] = 'application/json';
            middlewarePositive(request, response, next);
            expect(mockFunctionReturnedMiddleware).toHaveBeenCalled();
            expect(mockFunctionReturnedMiddleware.mock.calls[0]).toContainEqual(request);
            expect(mockFunctionReturnedMiddleware.mock.calls[0]).toContainEqual(response);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(0);
        });

        it('should call the data formatting function if the Content-Type is application/json', () => {
            request.headers['content-type'] = 'application/json';
            middlewarePositive(request, response, next);
            expect(mockDataFormating).toHaveBeenCalled();
            expect(mockDataFormating).toHaveBeenCalledWith(request.body);
        });

        it('should call the method and the associated middleware if the Content-Type is multipart/form-data', () => {
            request.headers['content-type'] = 'multipart/form-data';
            middlewarePositive(request, response, next);
            expect(mockObjectReturnedMiddleware).toHaveBeenCalled();
            expect(mockObjectReturnedMiddleware.mock.calls[0]).toContainEqual(request);
            expect(mockObjectReturnedMiddleware.mock.calls[0]).toContainEqual(response);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(0);
        });

        it('should call the next error middleware if the Content-Type is not allowed', () => {
            request.headers['content-type'] = 'not/allowed';
            middlewarePositive(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(1);
        });

        it('should call the next error middleware if the Content-Type is "empty"', () => {
            request.headers['content-type'] = 'empty';
            middlewarePositive(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(1);
        });

        it('should call the next error middleware if there is no body but a body is required', () => {
            request.headers['content-type'] = '';
            middlewareNegative(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(1);
        });

        it('should call the next error middleware if the parser is an object but has no options regarding the method to execute', () => {
            request.headers['content-type'] = 'application/xml';
            middlewareNegative(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(1);
        });

        it('should call the next error middleware if the parser can\'t be executed', () => {
            request.headers['content-type'] = 'application/zip';
            middlewareNegative(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next.mock.calls[0]).toHaveLength(1);
        });

        it('should call the next error middleware if the middleware throws', () => {
            request.headers['content-type'] = 'text/plain';
            const error = new Error('Error');
            mockExpressReturnedMiddleware.mockImplementation(() => {throw error;});
            middlewarePositive(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next).toHaveBeenCalledWith(error);
        });

        it('should call the next error middleware if the middleware calls it\'s next middleware with an error', () => {
            request.headers['content-type'] = 'text/plain';
            const error = new Error('Error');
            mockExpressReturnedMiddleware.mockImplementation((req, res, next) => next(error));
            middlewarePositive(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next).toHaveBeenCalledWith(error);
        });

        it('should call the next error middleware if the data formatting function throws', () => {
            request.headers['content-type'] = 'application/json';
            const error = new Error('Error');
            mockDataFormating.mockImplementation(() => {throw error;});
            middlewarePositive(request, response, next);
            expect(next).toHaveBeenCalled();
            expect(next).toHaveBeenCalledWith(error);
        });
    });
});