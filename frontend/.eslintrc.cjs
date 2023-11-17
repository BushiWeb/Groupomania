module.exports = {
    env: {
        es2022: true,
        node: true,
        jest: true,
        browser: true,
    },
    extends: ['eslint:recommended', 'react-app'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-await-in-loop': 'error',
        'no-duplicate-imports': 'error',
        'no-return-await': 'warn',
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        'no-var': 'error',
        curly: ['error', 'all'],
    },
};
