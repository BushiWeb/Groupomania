import createBodyParser from './body-parsing.js';
import { jest } from '@jest/globals';
import { mockNext, mockResponse, mockRequest } from '../utils/test/mock-express.js';
import express from 'express';
import { UnsupportedMediaTypeError } from '../errors/index.js';

const defaultError = new Error('Error');

const mockParser = () => (res, req, next) => next();
const mockParserNextError = () => (res, req, next) => next(defaultError);
const mockParserThrowError = () => {
    throw defaultError;
};

const mockExpressJson = jest.spyOn(express, 'json');

const request = mockRequest({});
const next = mockNext();
const response = mockResponse();

beforeEach(() => {
    next.mockClear();
    request.restore();
    mockExpressJson.mockReset();
});


describe('createBodyParser and its middleware test suite', () => {
    it('should call the next middleware if there is no Content-Type and the content is allowed but not required', () => {
        createBodyParser(true, true)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
    });

    it('should call the next middleware is there is no Content-Type and content is forbidden', () => {
        createBodyParser(false)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
    });

    it('should call the express.json middleware if there is a JSON Content-Type and the body is allowed', () => {
        mockExpressJson.mockImplementation(mockParser);
        request.headers['content-type'] = 'application/json';
        createBodyParser(true)(request, response, next);
        expect(mockExpressJson).toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
    });

    it('should call the express.json middleware if there is a JSON Content-Type and the body is required', () => {
        mockExpressJson.mockImplementation(mockParser);
        request.headers['content-type'] = 'application/json';
        createBodyParser(true, false)(request, response, next);
        expect(mockExpressJson).toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
    });

    it('should call the express.json middleware if there is a JSON Content-Type with metadata and the body is allowed', () => {
        mockExpressJson.mockImplementation(mockParser);
        request.headers['content-type'] = 'application/json;charset=utf-8';
        createBodyParser(true)(request, response, next);
        expect(mockExpressJson).toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
    });

    it('should call the express.json middleware if there is a JSON Content-Type with metadata and the body is required', () => {
        mockExpressJson.mockImplementation(mockParser);
        request.headers['content-type'] = 'application/json;charset=utf-8';
        createBodyParser(true, false)(request, response, next);
        expect(mockExpressJson).toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
    });

    it('should the the next middleware with an error if the body is required but there is no content', () => {
        createBodyParser(true, false)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(1);
        expect(next.mock.calls[0][0]).toBeInstanceOf(UnsupportedMediaTypeError);
    });

    it('should the the next middleware with an error if the body is forbidden but there is a content', () => {
        request.headers['content-type'] = 'parser/noObject';
        createBodyParser(false)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(1);
        expect(next.mock.calls[0][0]).toBeInstanceOf(UnsupportedMediaTypeError);
    });

    it('should the the next middleware with an error if the body is allowed but the content is not JSON', () => {
        request.headers['content-type'] = 'parser/noObject';
        createBodyParser(false)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(1);
        expect(next.mock.calls[0][0]).toBeInstanceOf(UnsupportedMediaTypeError);
    });

    it('should the the next middleware with an error if the parser execution fails', () => {
        mockExpressJson.mockImplementation(mockParserThrowError);
        request.headers['content-type'] = 'application/json';
        createBodyParser(true)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(1);
        expect(next.mock.calls[0][0]).toEqual(defaultError);
    });

    it('should the the next middleware with an error if the parser calls the next error middleware', () => {
        mockExpressJson.mockImplementation(mockParserNextError);
        request.headers['content-type'] = 'application/json';
        createBodyParser(true)(request, response, next);
        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(1);
        expect(next.mock.calls[0][0]).toEqual(defaultError);
    });
});
