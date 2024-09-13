// @ts-check
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import js from '@eslint/js'
import json from '@eslint/json'
import stylistic from '@stylistic/eslint-plugin'
import angular from 'angular-eslint'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default tseslint.config(
  {
    name: 'ignores',
    ignores: [
      '/**/node_modules/*',
      'node_modules/',
      'dist/',
      '.nx/',
      '.angular/',
      'coverage/'
    ]
  },

  {
    name: 'lib tsc options',
    files: ['projects/angular-stl-model-viewer/**/*.{ts,mts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['tsconfig.lib.json', 'tsconfig.spec.json'],
        tsconfigRootDir: 'projects/angular-stl-model-viewer'
      }
    }
  },
  {
    name: 'examples tsc options',
    files: ['projects/examples/**/*.{ts,mts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['tsconfig.app.json', 'tsconfig.spec.json'],
        tsconfigRootDir: 'projects/examples'
      }
    }
  },
  {
    name: 'angular ts recommended rules',
    files: ['projects/angular-stl-model-viewer/**/*.{ts,mts,tsx}', 'projects/examples/**/*.{ts,mts,tsx}'],
    plugins: {
      '@stylistic': stylistic
    },
    extends: [...tseslint.configs.recommended, ...tseslint.configs.stylistic, ...angular.configs.tsRecommended, stylistic.configs['recommended-flat']],
    rules: {
      '@angular-eslint/no-output-on-prefix': 'off',
      '@angular-eslint/component-class-suffix': [
        'off',
        {
          type: 'element',
          prefix: 'lib',
          style: 'kebab-case'
        }
      ],
      '@angular-eslint/component-selector': [
        'off',
        {
          type: 'element',
          prefix: 'lib',
          style: 'kebab-case'
        }
      ],
      '@angular-eslint/directive-selector': [
        'off',
        {
          type: 'attribute',
          prefix: 'lib',
          style: 'camelCase'
        }
      ],

      '@stylistic/no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 1
        }
      ],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'none',
            requireLast: true
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false
          },
          multilineDetection: 'brackets'
        }
      ],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/object-property-newline': ['error'],
      '@stylistic/object-curly-newline': ['error'],
      '@stylistic/object-curly-spacing': ['error', 'always'],

      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': ['warn'],
      '@typescript-eslint/no-empty-function': ['warn']
    }
  },
  {
    name: 'Angular template recommended rules',
    files: ['projects/angular-stl-model-viewer/**/*.html', 'projects/examples/**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {
      '@angular-eslint/template/no-negated-async': 'off',
      '@angular-eslint/template/click-events-have-key-events': ['warn'],
      '@angular-eslint/template/interactive-supports-focus': ['warn']
    }
  },

  // root files
  {
    name: 'Root files tsc options',
    files: ['*.{ts,tsx,mts}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['tsconfig.json'],
        tsconfigRootDir: __dirname
      }
    }
  },
  {
    name: 'Scripts stylistic ts recommended rules',
    files: ['*.{ts,tsx,mts}'],
    plugins: {
      '@stylistic': stylistic
    },
    extends: [...tseslint.configs.recommended, ...tseslint.configs.stylistic, stylistic.configs['recommended-flat']],
    rules: {
      '@stylistic/no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 1
        }
      ],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'none',
            requireLast: true
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false
          },
          multilineDetection: 'brackets'
        }
      ],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/object-property-newline': ['error'],
      '@stylistic/object-curly-newline': ['error'],
      '@stylistic/object-curly-spacing': ['error', 'always'],

      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': ['warn'],
      '@typescript-eslint/no-empty-function': ['warn']
    }
  },

  {
    name: 'JS',
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    plugins: {
      js,
      '@stylistic': stylistic
    },
    extends: [js.configs.recommended, stylistic.configs['recommended-flat']],
    languageOptions: {
      globals: {
        ...globals.node,
        document: false
      }
    },
    rules: {
      '@stylistic/no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 1
        }
      ],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'none',
            requireLast: true
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false
          },
          multilineDetection: 'brackets'
        }
      ],
      '@stylistic/comma-dangle': ['error', 'never']
    }
  },

  // lint JSON files
  {
    files: ['**/*.json'],
    plugins: {
      json,
      '@stylistic': stylistic
    },
    ignores: ['package-lock.json'],
    language: 'json/json',
    extends: [json.configs.recommended]
  },

  // lint JSONC files
  {
    files: ['**/*.jsonc'],
    plugins: {
      json,
      '@stylistic': stylistic
    },
    language: 'json/jsonc',
    extends: [json.configs.recommended]
  },

  // lint JSON5 files
  {
    files: ['**/*.json5'],
    plugins: {
      json,
      '@stylistic': stylistic
    },
    language: 'json/json5',
    extends: [json.configs.recommended]
  }
)
