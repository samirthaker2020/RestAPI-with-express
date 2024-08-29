import globals, { node } from 'globals'
import pluginJs from '@eslint/js'

export default [
  {
    files: ['**/*.js'],
    languageOptions: { ecmaVersion: 11, sourceType: 'commonjs' }
  },
  { languageOptions: { globals: globals.browser , node:true} },
  pluginJs.configs.recommended
]
