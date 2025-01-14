const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: [
          __dirname,
          path.join(__dirname, 'packages/authentication'),
          path.join(__dirname, 'packages/shared'),
          path.join(__dirname, 'apps/siiges-app'),
        ],
      },
    ],
  },
};
