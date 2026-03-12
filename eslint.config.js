import js from '@eslint/js'
import vuePlugin from 'eslint-plugin-vue'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],
  prettierConfig,
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  },
  {
    files: ['src/main.js', 'src/preload.js'],
    languageOptions: {
      globals: {
        MAIN_WINDOW_VITE_DEV_SERVER_URL: 'readonly',
        MAIN_WINDOW_VITE_NAME: 'readonly',
      },
    },
  },
]
