import nextVitals from 'eslint-config-next/core-web-vitals';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

const eslintConfig = [
  ...nextVitals,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      'react/no-unescaped-entities': 'off',
      'react-hooks/set-state-in-effect': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      '@next/next/no-img-element': 'off',
    },
  },
];

export default eslintConfig;
