import vuePlugin from 'eslint-plugin-vue';
import typeScriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typeScriptEslintParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier'
import vueParser from 'vue-eslint-parser';
import * as javaScriptParser from 'espree';

const basicRules = {
    "prettier/prettier": "warn",
    "no-unused-vars": "warn",
    "no-unused-expressions": "error",
    "no-lonely-if": "error",
    "no-const-assign": "error",
    "no-magic-numbers": ["error",
        {
            "ignoreArrayIndexes": true,
            "ignoreClassFieldInitialValues": true,
            "enforceConst": true,
            "ignore": [0, 1, -1]
        }
    ],
    "dot-notation": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "default-case": "warn",
    "eqeqeq": "error",
    "func-style": [
        "error",
        "declaration",
        {
            "allowArrowFunctions": true,
            "overrides": {
                "namedExports": "ignore"
            }
        }
    ],
    "max-params": [
        "error",
        5
    ],
    "max-depth": [
        "error",
        3
    ],
    "no-console": "warn"
};

const typeScriptRules = {
    ...prettierConfig.rules,
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-function-type": "error",
    "@typescript-eslint/no-unsafe-declaration-merging": "error",
    "@typescript-eslint/no-unsafe-enum-comparison": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-unsafe-unary-minus": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/promise-function-async": [
        "error",
        {
            "allowAny": true,
        }
    ],
    "@typescript-eslint/no-require-imports": "error"
};

const vueRuels = {
    "vue/html-indent": [
        "error",
        4,
        {
            "baseIndent": 1,
        }
    ],
    "vue/max-props": [
        "error",
        {
            maxProps: 5
        }
    ],
    "vue/multi-word-component-names": "off"
};

export default [
    ...vuePlugin.configs['flat/essential'],
    {
        files: ["**/*.vue"],
        ignores: [
            ".nuxt/*",
            ".nuxt/**/*",
            "src-manager/*",
            "public/*"
        ],
        plugins: {
            'vue': vuePlugin,
            'prettier': prettierPlugin
        },
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                ecmaVersion: "latest",
                parser: {
                    js: javaScriptParser,
                    ts: typeScriptEslintParser
                }
            }
        },
        rules: {
            ...basicRules,
            ...vueRuels
        }
    },
    {
        files: ["composables/*.ts", "utils/*.ts", "server/**/*.ts", "composables/*.tsx", "utils/*.tsx"],
        plugins: {
            '@typescript-eslint': typeScriptEslintPlugin,
            'prettier': prettierPlugin
        },
        languageOptions: {
            parser: typeScriptEslintParser,
            parserOptions: {
                ecmaVersion: 2023,
                project: true
            }
        },
        rules: {
            ...basicRules,
            ...typeScriptRules
        }
    }
]
