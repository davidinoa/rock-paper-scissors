module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'davidinoa',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['vite.config.ts'] },
    ],
  },
}
