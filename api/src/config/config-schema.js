const CONFIG_SCHEMA = {
    env: {
        doc: 'Environment in which the API is running, e.g. development, production or test.',
        format: String,
        default: 'development',
        env: 'NODE_ENV',
        arg: 'env'
    },
    port: {
        doc: 'Port number on which the API is running.',
        format: 'port',
        default: 3000,
        env: 'PORT',
        arg: 'port'
    },
    passwordHash: {
        saltRound: {
            doc: 'Number of rounds for the bcrypt algorithm',
            format: 'int',
            default: 10,
            env: 'SALT_ROUND'
        }
    },
    cors: {
        origin: {
            doc: 'Access-Control-Allow-Origin header value. Can be a string with one origin, an array with multiple origins, true to accept all origins and false to disable CORS.',
            format: '*',
            default: true,
            nullable: false
        },
        methods: {
            doc: 'Access-Control-Allow-Methods header value.',
            format: Array,
            default: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTION'],
            nullable: false
        },
        allowedHeaders: {
            doc: 'Access-Control-Allow-Headers header value. If null, reflects the value of Access-Control-Request-Headers.',
            format: Array,
            default: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization'],
            nullable: true
        },
        exposedHeaders: {
            doc: 'Access-Control-Expose-Headers header value. If null, no custom headers are exposed.',
            format: Array,
            default: null,
            nullable: true
        },
        credentials: {
            doc: 'Access-Control-Allow-Credentials header value. If set to true, the header os passed with the response. If null, the header is not sent.',
            format: Boolean,
            default: null,
            nullable: true
        },
        maxAge: {
            doc: 'Access-Control-Max-Age header value. If null, the parameter is omitted.',
            format: 'int',
            default: null,
            nullable: true
        }
    },
    db: {
        sgbd: {
            doc: 'SGBD used to store the data, must be a valid sequelize dialect value',
            format: String,
            default: 'postgres',
            env: 'DB_SGBD'
        },
        name: {
            doc: 'Database name',
            format: String,
            default: null,
            nullable: false,
            env: 'DB_NAME'
        },
        username: {
            doc: 'Username to use to connect to the database',
            format: String,
            default: null,
            nullable: false,
            env: 'DB_USER'
        },
        password: {
            doc: 'Password associated to the username',
            format: String,
            default: null,
            nullable: false,
            env: 'DB_PASSWORD'
        },
        host: {
            doc: 'Database host',
            format: String,
            default: 'localhost',
            env: 'DB_HOST'
        },
        port: {
            doc: 'Database port',
            format: 'int',
            default: 5432,
            env: 'DB_PORT'
        },
        protocol: {
            doc: 'Database connection protocol',
            format: String,
            default: 'tcp',
            env: 'DB_PROTOCOL'
        },
        useSSL: {
            doc: 'Weither to use SSL or not',
            format: Boolean,
            default: false,
            env: 'DB_SSL'
        }
    },
    payload: {
        maxSize: {
            doc: 'Payload\'s max size in number of bytes',
            format : 'int',
            default: 10240
        }
    },
    password: {
        minLength: {
            doc: 'Minimum length for the password',
            format: 'int',
            default: 8
        },
        minLowercase: {
            doc: 'Minimum number of lowercase letters in the password',
            format: 'int',
            default: 1
        },
        minUppercase: {
            doc: 'Minimum number of uppercase letters in the password',
            format: 'int',
            default: 1
        },
        minNumbers: {
            doc: 'Minimum number of number characters in the password',
            format: 'int',
            default: 1
        },
        minSymbols: {
            doc: 'Minimum number of symbols in the password',
            format: 'int',
            default: 1
        }
    }
};

export default CONFIG_SCHEMA;