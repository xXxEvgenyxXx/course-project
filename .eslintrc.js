module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'prettier', // Отключает конфликты с Prettier
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error', // Показывать ошибки Prettier как ошибки ESLint
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
};
