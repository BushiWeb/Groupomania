import { rest } from 'msw';

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
];