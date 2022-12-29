import getRoutesRegexp from '../../src/utils/get-routes.js';

const createRouteMock = ({ regexp, noRoute = false }) => {
    if (noRoute) {
        return { regexp };
    }

    return {
        route: {
            path: 'path',
            methods: { get: true },
        },
        regexp,
    };
};

const createRouterMock = ({
    regexp,
    routes,
    name = 'router',
    noHandle = false,
    noStack = false,
}) => {
    const routerMock = {
        name,
        regexp,
    };

    if (noHandle) {
        return routerMock;
    }

    routerMock.handle = {};

    if (noStack) {
        return routerMock;
    }

    routerMock.handle.stack = [];

    for (const route of routes) {
        if (route.routes) {
            routerMock.handle.stack.push(createRouterMock(route));
        } else {
            routerMock.handle.stack.push(createRouteMock(route));
        }
    }

    return routerMock;
};

const createAppMock = (regexps, noRouter = false, noStack = false) => {
    if (noRouter) {
        return {};
    }

    const mockApp = {
        _router: {},
    };

    if (noStack) {
        return mockApp;
    }

    mockApp._router.stack = [];

    for (const regexp of regexps) {
        if (regexp.routes) {
            mockApp._router.stack.push(createRouterMock(regexp));
        } else {
            mockApp._router.stack.push(createRouteMock(regexp));
        }
    }

    return mockApp;
};

const regexps = [
    { regexp: /^\/?$/i, noRoute: true },
    { regexp: /^\/auth\/?$/i },
    {
        regexp: /^\/user\/?(?=\/|$)/i,
        routes: [
            { regexp: /^\/?$/i },
            { regexp: /^\/(?:([^/]+?))\/?$/i },
            {
                regexp: /^\/followers\/?(?=\/|$)/i,
                routes: [
                    { regexp: /^\/?$/i },
                    { regexp: /^\/(?:([^/]+?))\/?$/i },
                ],
            },
        ],
    },
    {
        regexp: /^\/user\/?(?=\/|$)/i,
        routes: [{ regexp: /^\/?$/i }],
        name: 'expressInit',
    },
    {
        regexp: /^\/user\/?(?=\/|$)/i,
        routes: [{ regexp: /^\/?$/i }],
        noHandle: true,
    },
    {
        regexp: /^\/user\/?(?=\/|$)/i,
        routes: [{ regexp: /^\/?$/i }],
        noStack: true,
    },
];


describe('getRoutesRegexp test suite', () => {
    it('should return an empty array if the layer is not a valid route', () => {
        const router = createRouteMock(regexps[0]);
        const routeRegexps = getRoutesRegexp(router);

        expect(Array.isArray(routeRegexps)).toBe(true);
        expect(routeRegexps).toHaveLength(0);
    });

    it('should return the regexp of the given route', () => {
        const router = createRouteMock(regexps[1]);
        const routeRegexps = getRoutesRegexp(router);

        expect(Array.isArray(routeRegexps)).toBe(true);
        expect(routeRegexps).toHaveLength(1);
        expect(routeRegexps[0]).toEqual(regexps[1].regexp);
    });

    it('should return the complete regexp of the router', () => {
        const router = createRouterMock(regexps[2]);
        const routeRegexps = getRoutesRegexp(router);

        expect(Array.isArray(routeRegexps)).toBe(true);
        expect(routeRegexps).toHaveLength(4);
        expect(routeRegexps).toContainEqual(/^\/user\/?$/i);
        expect(routeRegexps).toContainEqual(/^\/user\/(?:([^/]+?))\/?$/i);
        expect(routeRegexps).toContainEqual(/^\/user\/followers\/?$/i);
        expect(routeRegexps).toContainEqual(/^\/user\/followers\/(?:([^/]+?))\/?$/i);
    });

    it('should return an empty array if the router has no handle', () => {
        const router = createRouterMock(regexps[4]);
        const routeRegexps = getRoutesRegexp(router);

        expect(Array.isArray(routeRegexps)).toBe(true);
        expect(routeRegexps).toHaveLength(0);
    });

    it('should return an empty array if the router has no stack', () => {
        const router = createRouterMock(regexps[5]);
        const routeRegexps = getRoutesRegexp(router);

        expect(Array.isArray(routeRegexps)).toBe(true);
        expect(routeRegexps).toHaveLength(0);
    });

    it('should return an empty array if the layer don\'t have the right name', () => {
        const router = createRouterMock(regexps[3]);
        const routeRegexps = getRoutesRegexp(router);

        expect(Array.isArray(routeRegexps)).toBe(true);
        expect(routeRegexps).toHaveLength(0);
    });

    it('should return the complete regexp of all the routes in the application', () => {
        const app = createAppMock(regexps);
        const routeRegexps = getRoutesRegexp(app);

        expect(Array.isArray(routeRegexps)).toBe(true);
        expect(routeRegexps).toHaveLength(5);
        expect(routeRegexps).toContainEqual(/^\/auth\/?$/i);
        expect(routeRegexps).toContainEqual(/^\/user\/?$/i);
        expect(routeRegexps).toContainEqual(/^\/user\/(?:([^/]+?))\/?$/i);
        expect(routeRegexps).toContainEqual(/^\/user\/followers\/?$/i);
        expect(routeRegexps).toContainEqual(/^\/user\/followers\/(?:([^/]+?))\/?$/i);
    });

    it('should return an empty array if the app has no _router', () => {
        const app = createAppMock(regexps, true);
        const routeRegexps = getRoutesRegexp(app);

        expect(Array.isArray(routeRegexps)).toBe(true);
        expect(routeRegexps).toHaveLength(0);
    });

    it('should return an empty array if the app has no stack', () => {
        const app = createAppMock(regexps, false, true);
        const routeRegexps = getRoutesRegexp(app);

        expect(Array.isArray(routeRegexps)).toBe(true);
        expect(routeRegexps).toHaveLength(0);
    });

    it('should return the complete regexp of all the routes in the application but only once per regexp', () => {
        const repeatRegexps = [regexps[1], regexps[1]];
        const app = createAppMock(repeatRegexps);
        const routeRegexps = getRoutesRegexp(app);

        expect(Array.isArray(routeRegexps)).toBe(true);
        expect(routeRegexps).toHaveLength(1);
        expect(routeRegexps).toContainEqual(regexps[1].regexp);
    });
});