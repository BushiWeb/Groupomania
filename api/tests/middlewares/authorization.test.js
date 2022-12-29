import authorize from '../../src/middlewares/authorization.js';
import accessControlRules from '../../src/authorization/index.js';
import { jest } from '@jest/globals';
import { mockRequest, mockResponse, mockNext } from '../mocks/mock-express.js';
import { CompoundCondition, FieldCondition } from '@ucast/core';
import ForbiddenError from '../../src/errors/ForbiddenError.js';

const error = new Error('error');

const proxyHandler = {
    get: function (target, prop) {
        return new Promise((resolve, reject) => {
            if (!target[prop]) {
                reject(error);
            } else {
                resolve(target[prop]);
            }
        });
    },
};

const mockPEP = jest.spyOn(accessControlRules, 'PEP');
jest.spyOn(accessControlRules, 'PIP').mockImplementation((modelName, data) => new Proxy(data, proxyHandler));

const baseUser = {
    userId: 113,
    role: {
        roleId: 1,
        name: 'user',
    },
    subjects: [56],
};
const baseSubject = {
    id: 12,
    title: 'title',
    message: 'message',
    users: [baseUser.userId, 54],
};
baseUser.subjects.push(baseSubject.id);

const request = mockRequest({});
const next = mockNext();
const response = mockResponse();

beforeEach(() => {
    next.mockClear();
    request.clean();
    response.clean();
});

describe('authorize middleware test suite', () => {
    it('should call the next middleware if the conditions are true', async () => {
        const condition = new CompoundCondition('or', [
            new FieldCondition('eq', 'User.userId', baseUser.userId),
            new FieldCondition('eq', 'Subject.id', baseUser.userId),
        ]);

        mockPEP.mockReturnValueOnce(condition);

        request.body.User = baseUser;
        request.body.Subject = baseSubject;
        const dataOrigin = {
            User: {
                origin: 'body',
                field: 'User',
            },
            Subject: {
                origin: 'body',
                field: 'Subject',
            },
        };

        const PDP = authorize('action', 'subject', dataOrigin);
        await PDP(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
    });


    it('should call the next error middleware if the conditions are false', async () => {
        const condition = new CompoundCondition('or', [
            new FieldCondition('eq', 'User.userId', baseUser.userId + 1),
            new FieldCondition('eq', 'Subject.id', baseUser.userId),
        ]);

        mockPEP.mockReturnValueOnce(condition);

        request.body.User = baseUser;
        request.body.Subject = baseSubject;
        const dataOrigin = {
            User: {
                origin: 'body',
                field: 'User',
            },
            Subject: {
                origin: 'body',
                field: 'Subject',
            },
        };

        const PDP = authorize('action', 'subject', dataOrigin);
        await PDP(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0][0]).toBeInstanceOf(ForbiddenError);
    });


    it('should call the next error middleware if the interpretor is rejected with an error', async () => {
        const condition = new CompoundCondition('or', [
            new FieldCondition('eq', 'User.error', baseUser.userId + 1),
            new FieldCondition('eq', 'Subject.id', baseUser.userId),
        ]);

        mockPEP.mockReturnValueOnce(condition);

        request.body.User = baseUser;
        request.body.Subject = baseSubject;
        const dataOrigin = {
            User: {
                origin: 'body',
                field: 'User',
            },
            Subject: {
                origin: 'body',
                field: 'Subject',
            },
        };

        const PDP = authorize('action', 'subject', dataOrigin);
        await PDP(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0][0]).toEqual(error);
    });


    it('should call the next middleware if there are no conditions', async () => {
        mockPEP.mockReturnValueOnce(true);

        request.body.User = baseUser;
        request.body.Subject = baseSubject;
        const dataOrigin = {
            User: {
                origin: 'body',
                field: 'User',
            },
            Subject: {
                origin: 'body',
                field: 'Subject',
            },
        };

        const PDP = authorize('action', 'subject', dataOrigin);
        await PDP(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
    });


    it('should call the next error middleware if there are no rules', async () => {
        mockPEP.mockReturnValueOnce(false);

        request.body.User = baseUser;
        request.body.Subject = baseSubject;
        const dataOrigin = {
            User: {
                origin: 'body',
                field: 'User',
            },
            Subject: {
                origin: 'body',
                field: 'Subject',
            },
        };

        const PDP = authorize('action', 'subject', dataOrigin);
        await PDP(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0][0]).toBeInstanceOf(ForbiddenError);
    });


    it('should call the next middleware if the conditions are true and the data are in the response', async () => {
        const condition = new CompoundCondition('or', [
            new FieldCondition('eq', 'User.userId', baseUser.userId),
            new FieldCondition('eq', 'Subject.id', baseUser.userId),
        ]);

        mockPEP.mockReturnValueOnce(condition);

        response.locals.User = baseUser;
        response.locals.Subject = baseSubject;
        const dataOrigin = {
            User: {
                origin: 'res',
                field: 'User',
            },
            Subject: {
                origin: 'res',
                field: 'Subject',
            },
        };

        const PDP = authorize('action', 'subject', dataOrigin);
        await PDP(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
    });


    it('should call the next middleware if the conditions are true and the data are in the query parameters', async () => {
        const condition = new CompoundCondition('or', [
            new FieldCondition('eq', 'User.userId', baseUser.userId),
            new FieldCondition('eq', 'Subject.id', baseUser.userId),
        ]);

        mockPEP.mockReturnValueOnce(condition);

        request.query.User = baseUser;
        request.query.Subject = baseSubject;
        const dataOrigin = {
            User: {
                origin: 'query',
                field: 'User',
            },
            Subject: {
                origin: 'query',
                field: 'Subject',
            },
        };

        const PDP = authorize('action', 'subject', dataOrigin);
        await PDP(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
    });


    it('should call the next middleware if the conditions are true and the data are in the parameters', async () => {
        const condition = new CompoundCondition('or', [
            new FieldCondition('eq', 'User.userId', baseUser.userId),
            new FieldCondition('eq', 'Subject.id', baseUser.userId),
        ]);

        mockPEP.mockReturnValueOnce(condition);

        request.params.User = baseUser;
        request.params.Subject = baseSubject;
        const dataOrigin = {
            User: {
                origin: 'params',
                field: 'User',
            },
            Subject: {
                origin: 'params',
                field: 'Subject',
            },
        };

        const PDP = authorize('action', 'subject', dataOrigin);
        await PDP(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0]).toHaveLength(0);
    });


    it('should call the next error middleware if there is no data that is needed', async () => {
        const condition = new CompoundCondition('or', [
            new FieldCondition('eq', 'User.userId', baseUser.userId),
            new FieldCondition('eq', 'Subject.id', baseUser.userId),
        ]);

        mockPEP.mockReturnValueOnce(condition);

        const PDP = authorize('action', 'subject');
        await PDP(request, response, next);

        expect(next).toHaveBeenCalled();
        expect(next.mock.calls[0][0]).toEqual(error);
    });
});