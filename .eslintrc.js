// .eslintrc.js
module.exports = {
  env: {
    node: true, // or 'browser', or both, depending on your project
    es2021: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended', // Recommended ESLint rules
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
    'prettier', // Disables ESLint rules that conflict with Prettier
    'plugin:mocha/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'mocha', // or 'jest' for Jest
  ],
  rules: {
    // Add or override rules here
    'no-undef': 'error', // Ensures no undefined variables
    indent: ['error', 2], // Example rule for indentation
    quotes: ['error', 'single'], // Example rule for quotes
    semi: ['error', 'always'], // Example rule for semicolons
    'prettier/prettier': ['error', { singleQuote: true }], // Prettier configuration options
  },
};
