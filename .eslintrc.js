module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-methods-use-this': 'off',
    'linebreak-style': 0,
    'consistent-return': 'off',
    camelcase: 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
