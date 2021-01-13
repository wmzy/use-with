module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  globals: {
    __DEV__: 'readonly'
  },
  plugins: ['prettier', 'builtin-compat'],
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  rules: {
    'prettier/prettier': 'error',
    'builtin-compat/no-incompatible-builtins': 'error',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': ['error', {functions: false}],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  settings: {
    'builtin-compat-ignore': [
      // App which dependence this lib should pollyfill these methods:
      'entries',
      'assign',
      'startsWith'
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
