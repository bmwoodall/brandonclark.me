/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    project: 'tsconfig.eslint.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    // Allow named exports
    'import/prefer-default-export': 'off',

    // Perfer simple import sort
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            '^\\u0000',
            '^node:',
            '^react',
            '^@react',
            '^[a-z]',
            '^@[a-z]',
            '^:[a-z]',
            '^\\.\\./',
            '^\\./',
            '^\\.$',
            '\\*',
          ],
        ],
      },
    ],
  },
};
