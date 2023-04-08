const CONFIG_SCHEMA = {
    env: {
        doc: 'Environment in which the API is running, e.g. development, production or test.',
        format: String,
        default: 'development',
        env: 'NODE_ENV',
        arg: 'env',
    },
    port: {
        doc: 'Port number on which the API is running.',
        format: 'port',
        default: 8000,
        env: 'BFF_PORT',
        arg: 'port',
    },
    session: {
        cookieExp: {
            doc: 'Number of milliseconds for before the cookie expires.',
            format: 'int',
            default: 1_200_000, // 20 min
        },
        extendedCookieExp: {
            doc: 'Number of milliseconds for before the cookie expires.',
            format: 'int',
            default: 2_592_000_000, // 30 day
        },
        sameSite: {
            doc: 'SameSite cookie option value.',
            format: 'sameSite',
            default: 'lax',
        },
        secure: {
            doc: 'Secure cookie option value.',
            format: Boolean,
            default: false,
        },
        httpOnly: {
            doc: 'HTTP-Only cookie option value.',
            format: Boolean,
            default: true,
        },
        secret: {
            doc: 'Secrets to use to sign the session id, and to verify it. It must be a space separated list. The first element of the list is used to sign, but all are considered when verifying the session id. Its value should be changed regularily. To change it without invalidating all sessions, append the new secret at the beginning of the list but keep the other ones.',
            format: 'secretList',
            nullable: false,
            default: null,
            env: 'SESSION_SECRET',
        },
        name: {
            doc: 'Cookie name',
            format: String,
            default: 'connect.sid',
        },
    },
    payload: {
        maxSize: {
            doc: 'Payload\'s max size in number of bytes',
            format: 'int',
            default: 10240,
        },
        files: {
            maxFileSize: {
                doc: 'Files max allowed size in bytes',
                format: 'int',
                default: 5242880,
            },
            allowedFileTypes: {
                doc: 'All files types that are accepted',
                format: Object,
                default: {
                    'image/jpg': 'jpg',
                    'image/jpeg': 'jpg',
                    'image/png': 'png',
                    'image/webp': 'webp',
                    'image/avif': 'avif',
                },
            },
            saveFolder: {
                doc: 'Path to the folder containing the images. Relative to the root of the project',
                format: String,
                default: 'images',
            },
        },
    },
    api: {
        protocol: {
            doc: 'Protocol to use to connect ot the API',
            dormat: String,
            default: 'http',
        },
        baseUrl: {
            doc: 'URL used to make requests to the API',
            format: String,
            default: 'localhost',
        },
        port: {
            doc: 'Port used by the API',
            format: 'port',
            default: 3000,
        },
        baseRoutePath: {
            doc: 'Common start of the path for all routes',
            format: String,
            default: '/api/v1',
        },
    },
    cors: {
        origin: {
            doc: 'Access-Control-Allow-Origin header value. Can be a string with one origin, an array with multiple origins, true to accept all origins and false to disable CORS.',
            format: '*',
            default: true,
            nullable: false,
        },
        methods: {
            doc: 'Access-Control-Allow-Methods header value.',
            format: Array,
            default: [
                'GET',
                'POST',
                'PUT',
                'DELETE',
                'PATCH',
                'OPTION',
            ],
            nullable: false,
        },
        allowedHeaders: {
            doc: 'Access-Control-Allow-Headers header value. If null, reflects the value of Access-Control-Request-Headers.',
            format: Array,
            default: [
                'Origin',
                'X-Requested-With',
                'Accept',
                'Content-Type',
                'Authorization',
            ],
            nullable: true,
        },
        exposedHeaders: {
            doc: 'Access-Control-Expose-Headers header value. If null, no custom headers are exposed.',
            format: Array,
            default: null,
            nullable: true,
        },
        credentials: {
            doc: 'Access-Control-Allow-Credentials header value. If set to true, the header os passed with the response. If null, the header is not sent.',
            format: Boolean,
            default: null,
            nullable: true,
        },
        maxAge: {
            doc: 'Access-Control-Max-Age header value. If null, the parameter is omitted.',
            format: 'int',
            default: null,
            nullable: true,
        },
    },
    pagination: {
        users: {
            doc: 'Number of users to display per page.',
            format: 'nat',
            default: 100,
        },
        posts: {
            doc: 'Number of posts to display per page.',
            format: 'nat',
            default: 50,
        },
    },
};

export default CONFIG_SCHEMA;