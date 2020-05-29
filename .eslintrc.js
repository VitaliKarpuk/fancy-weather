  
module.exports = {
  env: {
      es6: true,
      browser: true,
      node: true,
      jest: true,
  },
  parser: 'babel-eslint',
  extends: [
      'airbnb-base',
      'plugin:jest/recommended',
  ],
  globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
  },
  rules: {
      'prefer-default-export': 0,
      'no-param-reassign': 0,
      "prefer-destructuring": ["error", {"object": true, "array": false}],
      'import/no-mutable-exports': 0,
      'no-unused-expressions': 0,
      'consistent-return': ["error", { "treatUndefinedAsUnspecified": true }],
      'no-nested-ternary' : 0,
      'no-unused-vars': 0,
      'no-shadow': 0,
      'max-len': 0,
      'new-cap': ["error", { "newIsCap": false }],
      'consistent-return': 0,
      'import/no-extraneous-dependencies': 0
  }
};