module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "import/no-extraneous-dependencies": 0,
    "no-console": 0,
  },
  "env": {
    "browser": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  rules: {
    "linebreak-style": ["error", "windows"],
    "no-console": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "no-param-reassign": ["error", { "props": false }],
    "react/prop-types": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2,
    "operator-linebreak": 0,
    "prefer-destructuring": ["error", {
      "array": false,
      "object": true
    }, {
        "enforceForRenamedProperties": false
      }]
  }
};