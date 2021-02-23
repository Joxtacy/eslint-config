module.exports = {
    extends: ["eslint:recommended"],
    "env": {
        "browser": true,
        "amd": true,
        "node": true,
    },
    rules: {
        // Possible Errors
        "comma-dangle": [ // v0.16.0
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "never",
            },
        ],
        "no-console": [ // v0.0.2
            "error",
            {
                "allow": [
                    "warn",
                    "info",
                    "group",
                    "groupEnd",
                ],
            },
        ],
        // Best Practices
        "no-useless-concat": "error", // v1.3.0
        // Strict Mode
        // Variables
        // Node.js and CommonJS
        // Stylistic Issues
        "brace-style": [ // v0.0.7
            "error",
            "1tbs",
            { "allowSingleLine": false },
        ],
        "eol-last": ["error", "always"], // v0.7.1
        "indent": [ // v0.14.0
            "error",
            4,
            { "SwitchCase": 1 },
        ],
        "key-spacing": [ // v0.9.0
            "warn",
            {
                "beforeColon": false,
                "afterColon": true,
                "mode": "strict",
            },
        ],
        "keyword-spacing": "error", // v2.0.0-beta.1
        "linebreak-style": ["error", "unix"], // v0.21.0
        "no-multiple-empty-lines": [ // v0.9.0
            "warn",
            {
                "max": 2,
                "maxEOF": 1,
                "maxBOF": 0,
            },
        ],
        "no-negated-condition": ["warn"], // v1.6.0
        "no-tabs": "warn", // v3.2.0
        "no-trailing-spaces": [ // v0.7.1
            "warn",
            {
                "skipBlankLines": false,
                "ignoreComments": false,
            },
        ],
        "object-curly-newline": [ // v2.12.0
            "error",
            {
                "ObjectExpression": {
                    "multiline": true, "minProperties": 2,
                },
                "ObjectPattern": { "multiline": true },
                "ImportDeclaration": {
                    "multiline": true, "minProperties": 2,
                },
                "ExportDeclaration": {
                    "multiline": true, "minProperties": 2,
                },
            },
        ],
        "object-curly-spacing": [ // v0.22.0
            "warn",
            "always",
            {
                "arraysInObjects": false,
                "objectsInObjects": false,
            },
        ],
        "quotes": [ // v0.0.7
            "error",
            "double",
            { "avoidEscape": true },
        ],
        "semi": ["error", "always"], // v0.0.6
        "space-before-blocks": "error", // v0.9.0
        "switch-colon-spacing": [ // v4.0.0-beta.0
            "error",
            {
                "after": true,
                "before": false,
            },
        ],
        // ECMAScript 6
        "arrow-parens": ["error", "always"], // v1.0.0-rc-1
        "no-var": "error", // v0.12.0
        "prefer-const": [ // v0.23.0
            "error",
            {
                "destructuring": "any",
                "ignoreReadBeforeAssign": false,
            },
        ],
        "prefer-template": "warn", // v1.2.0
        "template-curly-spacing": ["warn", "never"], // v2.0.0-rc.0
    },
};
