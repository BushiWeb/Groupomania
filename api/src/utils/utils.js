import parser from 'yargs-parser';

/**
 * Returns the current environment.
 * The environment is either in the env command line argument, in the NODE_ENV environment variable or development by default.
 * @returns Returns the name of the current environment in lowercase.
 */
export function getEnvironment() {
    return (
        parser(process.argv.slice(2)).env?.toLowerCase() ||
        process.env.NODE_ENV?.toLowerCase() ||
        'development'
    );
}