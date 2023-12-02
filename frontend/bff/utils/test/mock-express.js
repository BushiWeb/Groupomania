import { jest } from '@jest/globals';

function Session() {
    this.cookie = {
        maxAge: 24 * 60 * 60 * 1000,
    };
}

export const mockRequest = (
    body = {},
    { contentType, authorization, crsfToken } = {},
) => {
    const req = {
        body,
        headers: {
            ...(contentType && { 'content-type': contentType }),
            ...(authorization && { authorization: authorization }),
            ...(crsfToken && { 'x-crsf-token': authorization }),
        },
        query: {},
        params: {},
        session: new Session(),
        cookies: {}
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
        req.cookies = {};
        req.session = new Session();
    };
    return req;
};

export const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.cookie = jest.fn().mockReturnValue(res);
    res.locals = {};
    res.headers = {};

    res.set = jest.fn().mockImplementation((header, value = true) => {
        res.headers[header.toLowerCase()] = value;
    });

    res.clean = () => {
        res.status.mockClear();
        res.json.mockClear();
        res.cookie.mockClear();
        res.locals = {};
        res.headers = {};
    };
    return res;
};

export const mockNext = () => jest.fn();
