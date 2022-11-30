import {jest} from '@jest/globals';

export const mockRequest = (body = {}, contentType) => {
    const req = {
        body,
        headers: {
            'content-type': contentType,
        }
    };
    req.get = jest.fn().mockImplementation((parameter) => {
        switch (parameter) {
        case 'Content-Type':
            return req.headers['content-type'];
        default:
            return parameter;
        }
    });
    return req;
};

export const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

export const mockNext = () => jest.fn();
