import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig([
    js.configs.recommended,
    ts.configs.strict,
    prettier,
    {
        languageOptions: {
            parser: ts.parser,
            globals: globals.node,
        },

        rules: {
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-empty-function': 'warn',
            'no-useless-escape': 'warn',
            'no-empty': 'warn',
            'no-var': 'error',
            'prefer-const': 'warn',
            'no-fallthrough': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/consistent-type-imports': 'warn',
            'no-console': 'warn',
        },
    },
    globalIgnores([
        '**/logs',
        '**/*.log',
        '**/pids',
        '**/*.pid',
        '**/*.seed',
        '**/node_modules',
        '**/.DS_Store',
        '**/eslint.config.*',
        '**/dist',
    ]),
]);
