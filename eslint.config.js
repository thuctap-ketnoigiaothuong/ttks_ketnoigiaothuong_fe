// eslint.config.js
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  ...tseslint.config({
    files: ['**/*.{ts,tsx}'],
    parserOptions: {
      project: './tsconfig.json',
    },
  }),
  {
    files: ['**/*.tsx', '**/*.ts'],
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      jsxA11y: eslintPluginJsxA11y,
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginJsxA11y.configs.recommended.rules,
      'prettier/prettier': 'warn',
      'react/react-in-jsx-scope': 'off', // React 17+
    },
  },
  prettier,
];
