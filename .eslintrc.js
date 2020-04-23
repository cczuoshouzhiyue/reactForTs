module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread":true,
            "modules":true
        },
        "ecmaVersion":6,
        "sourceType":"module",
    },
    "plugins": [
        "react"
    ],
    "globals": {
        "document": true,
        "localStorage": true,
        "window": true,
        "require": true,
        "BMap": true,
        "BMapGL": true
    },
    "rules": {
        // 双峰驼命名格式
        "camelcase": 2,
        // switch语句强制default分支，也可添加 // no default 注释取消此次警告
        "default-case": 2,
        "no-console":0,
        "indent": ["off", 2],
        "no-debugger": 1,
        "linebreak-style": [
            0,
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "off",
            "always"
        ],
        "no-unused-vars": [
            0,
            "error",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false
            }
        ]
    }
};
