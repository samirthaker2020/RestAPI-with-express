import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
  {
    files: ['**/*.js'],
    languageOptions: { ecmaVersion: 11, sourceType: 'commonjs' }
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended
]
