module.exports = {
    'root': true,
    'parserOptions': {
        'parser': 'babel-eslint',
        'sourceType': 'module'
    },
    'plugins': ['html', 'standard', 'promise', 'vue'],
    'env': {
        'browser': true,
        'node': true,
        'es6': true
    },
    'extends': [
        'plugin:vue/essential',
        'standard'
    ],
    'rules': {
        'generator-star-spacing': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'no-new' :0
    }
};