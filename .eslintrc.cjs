module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": "plugin:vue/vue3-essential",
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        'array-bracket-spacing': ['error', 'never'], // 数组紧贴括号部分不允许包含空格
        'object-curly-spacing': ['error', 'never'], // 对象紧贴花括号部分不允许包含空格
        'block-spacing': ['error', 'never'], // 单行代码块中紧贴括号部分不允许包含空格
        'no-multiple-empty-lines': 'error', // 不允许多个空行
    }
}
