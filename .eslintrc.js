/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  root: true,
  env: { node: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      // eslint-config-airbnb-typescript
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
  },
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      ts: 'never',
    }],
    'import/prefer-default-export': 'off',
  },
};

module.exports = eslintConfig;
