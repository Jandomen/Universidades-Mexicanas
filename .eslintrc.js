module.exports = {
  ignorePatterns: ['node_modules/', 'build/', 'public/', 'src/gql/'],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended'
  ],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'prefer-arrow',
    'jsx-a11y',
    'promise',
    'no-loops',
    'immutable'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never'
      }
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'react/jsx-no-useless-fragment': 'error',
    'func-style': ['error', 'expression'],
    'prefer-arrow-callback': 'error',
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': [
      'off',
      {
        additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)'
      }
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false
      }
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: true,
        reservedFirst: true
      }
    ],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        fixToUnknown: true
      }
    ],
    'react/button-has-type': 'error',
    'react/no-array-index-key': 'error',
    'react/no-deprecated': 'error',
    'react/no-typos': 'error',
    'react/no-unsafe': 'error',
    'react/sort-prop-types': 'error',
    'react/static-property-placement': 'error',
    'no-loops/no-loops': 'error',
    'immutable/no-let': 'error',
    'immutable/no-this': 'error'
  }
}
