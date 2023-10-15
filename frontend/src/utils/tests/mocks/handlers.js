import { rest } from 'msw';
import POSTS from './posts';
import USERS from './users';

export const handlers = [
    rest.post('/data/login', async (req, res, ctx) => {
        if (req.headers.get('Content-Type') !== 'application/json') {
            const userEmail = sessionStorage.getItem('user');
            if (!userEmail) {
                return res(
                    ctx.delay(),
                    ctx.status(401),
                    ctx.set('X-Crsf-Token', 'testToken'),
                    ctx.json({
                        error: {
                            type: 'UnauthorizedError',
                            statusCode: 401,
                        },
                    })
                );
            }

            return res(
                ctx.delay(),
                ctx.status(200),
                ctx.set('X-Crsf-Token', 'testToken'),
                ctx.json({
                    userId: 1,
                    email: userEmail,
                    role: {
                        name: 'user',
                        roleId: 2,
                    },
                })
            );
        }

        if (sessionStorage.getItem('requiredError')) {
            return res(
                ctx.delay(),
                ctx.status(400),
                ctx.set('X-Crsf-Token', 'testToken'),
                ctx.json({
                    error: {
                        type: 'UserInputValidationError',
                        details: [
                            {
                                param: 'email',
                                message: 'The email is required.',
                                location: 'body',
                            },
                            {
                                param: 'password',
                                message: 'The password is required.',
                                location: 'body',
                            },
                        ],
                        statusCode: 400,
                    },
                })
            );
        }

        if (sessionStorage.getItem('invalidError')) {
            return res(
                ctx.delay(),
                ctx.status(400),
                ctx.set('X-Crsf-Token', 'testToken'),
                ctx.json({
                    error: {
                        type: 'UserInputValidationError',
                        details: [
                            {
                                param: 'email',
                                message: 'The email must have the right format. It must contain your email username, followed by an @, followed by a domain name.',
                                location: 'body',
                            },
                            {
                                param: 'password',
                                message: 'The password must be stronger. It has to contain at least 8 characters, including at least 1 lowercase letters, 1 uppercase letters, 1 numbers and 1 symbols.',
                                location: 'body',
                            },
                        ],
                        statusCode: 400,
                    },
                })
            );
        }

        if (sessionStorage.getItem('credentialsError')) {
            return res(
                ctx.delay(),
                ctx.status(401),
                ctx.set('X-Crsf-Token', 'testToken'),
                ctx.json({
                    error: {
                        type: 'UnauthorizedError',
                        statusCode: 401,
                    },
                })
            );
        }

        if (sessionStorage.getItem('otherError')) {
            return res.networkError();
        }


        if (sessionStorage.getItem('otherSyntaxError')) {
            return res(
                ctx.delay(),
                ctx.status(400),
                ctx.set('X-Crsf-Token', 'testToken'),
                ctx.json({
                    error: {
                        type: 'UserInputValidationError',
                        statusCode: 400,
                    },
                })
            );
        }

        const data = await req.json();
        return res(
            ctx.delay(),
            ctx.status(200),
            ctx.set('X-Crsf-Token', 'testToken'),
            ctx.json({
                userId: 1,
                email: data.email,
                role: {
                    name: 'user',
                    roleId: 2,
                },
            })
        );
    }),

    rest.post('/data/signup', async (req, res, ctx) => {
        if (sessionStorage.getItem('conflictError')) {
            return res(
                ctx.delay(),
                ctx.status(409),
                ctx.set('X-Crsf-Token', 'testToken'),
                ctx.json({
                    error: {
                        type: 'ConflictError',
                        statusCode: 409,
                    },
                })
            );
        }

        const data = await req.json();
        return res(
            ctx.delay(),
            ctx.status(200),
            ctx.set('X-Crsf-Token', 'testToken'),
            ctx.json({
                userId: 1,
                email: data.email,
                role: {
                    name: 'user',
                    roleId: 2,
                },
            })
        );
    }),

    rest.post('/data/logout', async (req, res, ctx) => {
        return res(
            ctx.delay(),
            ctx.status(200),
            ctx.set('X-Crsf-Token', 'testToken')
        );
    }),

    rest.get('/data/posts', async (req, res, ctx) => {
        if (sessionStorage.getItem('inputError')) {
            return res(
                ctx.delay(),
                ctx.status(400),
                ctx.set('X-Crsf-Token', 'testToken'),
                ctx.json({
                    error: {
                        type: 'UserInputValidationError',
                        statusCode: 400,
                    },
                })
            );
        }

        if (sessionStorage.getItem('serverError')) {
            return res(
                ctx.delay(),
                ctx.status(500),
                ctx.set('X-Crsf-Token', 'testToken'),
                ctx.json({
                    error: {
                        type: 'ServerError',
                        statusCode: 500,
                    },
                })
            );
        }

        if (sessionStorage.getItem('networkError')) {
            return res.networkError();
        }

        if (sessionStorage.getItem('authError')) {
            return res(
                ctx.delay(),
                ctx.status(401),
                ctx.set('X-Crsf-Token', 'testToken'),
                ctx.json({
                    error: {
                        type: 'UnauthorizedError',
                        statusCode: 401,
                    },
                })
            );
        }

        const page = req.url.searchParams.get('page');
        const response = page === '1' ? POSTS.slice(0, 2) : POSTS.slice(2);
        return res(
            ctx.delay(),
            ctx.status(200),
            ctx.set('X-Crsf-Token', 'testToken'),
            ctx.json(response)
        );
    }),

    rest.post('/data/posts/:id/like', async (req, res, ctx) => {
        if (sessionStorage.getItem('inputError')) {
            return res(
                ctx.delay(),
                ctx.status(400),
                ctx.set('X-Crsf-Token', 'testToken'),
                ctx.json({
                    error: {
                        type: 'UserInputValidationError',
                        statusCode: 400,
                    },
                })
            );
        }

        if (sessionStorage.getItem('serverError')) {
            return res(
                ctx.delay(),
                ctx.status(500),
                ctx.set('X-Crsf-Token', 'testToken'),
                ctx.json({
                    error: {
                        type: 'ServerError',
                        statusCode: 500,
                    },
                })
            );
        }

        if (sessionStorage.getItem('networkError')) {
            return res.networkError();
        }

        if (sessionStorage.getItem('authError')) {
            return res(
                ctx.delay(),
                ctx.status(401),
                ctx.set('X-Crsf-Token', 'testToken'),
                ctx.json({
                    error: {
                        type: 'UnauthorizedError',
                        statusCode: 401,
                    },
                })
            );
        }
        const { like } = await req.json();
        const id = parseInt(req.params.id);
        const userId = parseInt(sessionStorage.getItem('userId'));

        const postIndex = POSTS.findIndex(elt => elt.postId === id);
        POSTS[postIndex].likes += like ? 1 : -1;

        if (like) {
            POSTS[postIndex].usersLiked.push(userId);
        } else {
            POSTS[postIndex].usersLiked.splice(POSTS[postIndex].usersLiked.indexOf(userId), 1);
        }

        const response = { message: 'done, or not' };

        return res(
            ctx.delay(),
            ctx.status(200),
            ctx.set('X-Crsf-Token', 'testToken'),
            ctx.json(response)
        );
    }),

    rest.get('/data/users', async (req, res, ctx) => {
        if (sessionStorage.getItem('inputError')) {
            return res(
                ctx.delay(),
                ctx.status(400),
                ctx.set('X-Crsf-Token', 'testToken'),
                ctx.json({
                    error: {
                        type: 'UserInputValidationError',
                        statusCode: 400,
                    },
                })
            );
        }

        if (sessionStorage.getItem('serverError')) {
            return res(
                ctx.delay(),
                ctx.status(500),
                ctx.set('X-Crsf-Token', 'testToken'),
                ctx.json({
                    error: {
                        type: 'ServerError',
                        statusCode: 500,
                    },
                })
            );
        }

        if (sessionStorage.getItem('networkError')) {
            return res.networkError();
        }

        if (sessionStorage.getItem('authError')) {
            return res(
                ctx.delay(),
                ctx.status(401),
                ctx.set('X-Crsf-Token', 'testToken'),
                ctx.json({
                    error: {
                        type: 'UnauthorizedError',
                        statusCode: 401,
                    },
                })
            );
        }

        const page = req.url.searchParams.get('page');
        const response = page === '1' ? USERS.slice(0, 5) : USERS.slice(5);
        return res(
            ctx.delay(),
            ctx.status(200),
            ctx.set('X-Crsf-Token', 'testToken'),
            ctx.json(response)
        );
    }),
];