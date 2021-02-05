module.exports = {
    extends: ["eslint:recommended"],
    "env": {
        "browser": true,
        "amd": true,
        "node": true,
    },
    rules: {
        "arrow-parens": ["error", "always"],
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": false,
            }
        ],
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "never"
            }
        ],
        "eol-last": ["error", "always"],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "key-spacing": [
            "warn",
            {
                "beforeColon": false,
                "afterColon": true,
                "mode": "strict"
            }
        ],
        "keyword-spacing": "error",
        "linebreak-style": ["error", "unix"],
        "no-console": [
            "error",
            {
                "allow": [
                    "warn",
                    "info",
                    "group",
                    "groupEnd"
                ]
            }
        ],
        "no-multiple-empty-lines": [
            "warn",
            {
                "max": 2,
                "maxEOF": 1,
                "maxBOF": 0
            }
        ],
        "no-negated-condition": ["warn"],
        "no-tabs": "warn",
        "no-trailing-spaces": [
            "warn",
            {
                "skipBlankLines": false,
                "ignoreComments": false
            }
        ],
        "no-useless-concat": "error",
        "no-var": "error",
        "object-curly-spacing": [
            "warn",
            "always",
            {
                "arraysInObjects": false,
                "objectsInObjects": false
            }
        ],
        "prefer-const": [
            "error",
            {
                "destructuring": "any",
                "ignoreReadBeforeAssign": false
            }
        ],
        "prefer-template": "warn",
        "quotes": [
            "error",
            "double",
            {
                "avoidEscape": true
            }
        ],
        "semi": ["error", "always"],
        "space-before-blocks": "error",
        "switch-colon-spacing": [
            "error",
            {
                "after": true,
                "before": false
            }
        ],
        "template-curly-spacing": ["warn", "never"]
    }
}
