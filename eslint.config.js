import pluginVue from 'eslint-plugin-vue';
import pluginTypeScript from 'typescript-eslint';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import parserVue from 'vue-eslint-parser';
import * as parserJavaScript from 'espree';

export default [
    ...pluginVue.configs['flat/essential'],
    pluginPrettier,
    {
        files: ["**/*.vue"],
        ignores: [
            ".nuxt/*",
            ".nuxt/**/*",
            "src-manager/*",
            "public/*"
        ],
        plugins: {
            '@typescript-eslint': pluginTypeScript.plugin
        },
        languageOptions: {
            parser: parserVue,
            parserOptions: {
                parser: {
                    js: parserJavaScript,
                    ts: pluginTypeScript.parser
                }
            }
        },
        rules: {
            "no-unused-vars": "error",
            "no-unused-expressions": "error",
            "no-lonely-if": "error",
            "no-const-assign": "error",
            "dot-notation": "error",
            "no-undef": "error",
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
                3
            ],
            "max-depth": [
                "error",
                3
            ],
            "no-console": "warn",
            
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
            "vue/multi-word-component-names": "off",

            // "@typescript-eslint/no-array-constructor": "error",
            // "@typescript-eslint/no-unsafe-assignment": "error",
            // "@typescript-eslint/no-unsafe-call": "error",
            // "@typescript-eslint/no-unsafe-function-type": "error",
            // "@typescript-eslint/no-unsafe-declaration-merging": "error",
            // "@typescript-eslint/no-unsafe-enum-comparison": "error",
            // "@typescript-eslint/no-unsafe-member-access": "error",
            // "@typescript-eslint/no-unsafe-return": "error",
            // "@typescript-eslint/no-unsafe-unary-minus": "error",

        }
    }
]