import { jest } from '@jest/globals';

export const mockRequest = (body = {}, { contentType, authorization, crsfToken } = {}) => {
    const req = {
        body,
        headers: {
            ...contentType && { 'content-type': contentType },
            ...authorization && { 'authorization': authorization },
            ...crsfToken && { 'x-crsf-token': authorization },
        },
        query: {},
        params: {},
        session: {},
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
        req.session = {};
    };
    return req;
};

export const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.locals = {};
    res.headers = {};

    res.set = jest.fn().mockImplementation((header, value = true) => {
        res.headers[header.toLowerCase()] = value;
    });

    res.clean = () => {
        res.status.mockClear();
        res.json.mockClear();
        res.locals = {};
        res.headers = {};
    };
    return res;
};

export const mockNext = () => jest.fn();
