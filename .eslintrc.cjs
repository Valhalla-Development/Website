module.exports = {
    env: {
        'browser': true
    },
    ignorePatterns: ['next.config.js', 'jest.config.js', 'jest.setup.js'],
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb-base'],
    rules: {
        'quotes': ['error', 'single'],
        'object-curly-spacing': ['error', 'always'],
        'import/prefer-default-export': 'off',
        'indent': ['error', 4],
        'no-console': 'off',
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 200,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true
            }
        ],
        'class-methods-use-this': 'off',
        'no-inner-declarations': 'off',
        'import/extensions': 'off',
        'consistent-return': 'off',
        'import/no-unresolved': 'off',
        'no-nested-ternary': 'off',
        'no-unused-expressions': 'off'
    },
};