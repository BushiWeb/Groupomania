const pathToJobs = './src/jobs/';

export default [
    {
        name: 'deleteExpiredRefreshTokens',
        path: `${pathToJobs}delete-expired-refresh-tokens.js`,
        timeout: 0,
        interval: 'every 1 day',
    },
];