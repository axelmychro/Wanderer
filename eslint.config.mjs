// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default withNuxt(eslintConfigPrettier, {
  rules: {
    'vue/multi-word-component-names': 'off'
  },
  languageOptions: {
    sourceType: 'module',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      sourceType: 'module'
    }
  }
})
