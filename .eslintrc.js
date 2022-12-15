module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'comma-dangle': ['error', 'never'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false
      }
    ],
    'global-require': 0,
    semi: ['error', 'never'],
    'object-curly-newline': 'off',
    'max-len': ['error', 120],
    'react/jsx-filename-extension': 'off',
    'react/jsx-fragments': 'off',
    'react/prefer-stateless-function': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    // typescript rules
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    indent: 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/static-property-placement': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ]
  },
  ignorePatterns: ['coverage/']
}
