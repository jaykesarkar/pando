const OFF = 0
// const WARN = 1
// const ERROR = 2

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
    'plugin:jest/recommended',
    // Prettier must be last
    'prettier',
  ],
  parser: require.resolve('@typescript-eslint/parser'),
  plugins: ['@typescript-eslint', 'sonarjs', 'jest'],
  rules: {
    '@typescript-eslint/no-var-requires': OFF,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  ignorePatterns: [
    'website/build/**',
    'website/.yarn',
    'packages/*/build',
    'packages/headless-styles/src/components/**/generated',
  ],
}
