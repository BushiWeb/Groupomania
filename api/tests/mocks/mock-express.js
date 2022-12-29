import { jest } from '@jest/globals';

export const mockRequest = (body = {}, { contentType, authorization } = {}) => {
    const req = {
        body,
        headers: {
            ...contentType && { 'content-type': contentType },
            ...authorization && { 'authorization': authorization },
        },
        query: {},
        params: {},
    };
    req.get = jest.fn().mockImplementation((parameter) => {
        return req.headers[parameter.toLowerCase()];
    });

    req.clean = () => {
        req.get.mockClear();
    };
    req.restore = () => {
        req.get.mockClear();
        req.body = {};
        req.query = {};
        req.params = {};
        req.headers = {};
    };
    return req;
};

export const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.locals = {};

    res.clean = () => {
        res.status.mockClear();
        res.json.mockClear();
        res.locals = {};
    };
    return res;
};

export const mockNext = () => jest.fn();
