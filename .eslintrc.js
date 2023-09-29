/* eslint "sort-keys": "warn" */

module.exports = {
  extends: [],
  ignorePatterns: ["node_modules", "build", "coverage"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    createDefaultProgram: true,
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "unicorn", "import", "react", "react-hooks"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "warn",
    "@typescript-eslint/array-type": "warn",
    "@typescript-eslint/await-thenable": "warn",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/consistent-indexed-object-style": "warn",
    "@typescript-eslint/consistent-type-assertions": "warn",
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/default-param-last": "warn",
    "@typescript-eslint/dot-notation": "warn",
    "@typescript-eslint/explicit-member-accessibility": [
      "warn",
      { accessibility: "no-public" },
    ],
    "@typescript-eslint/method-signature-style": "warn",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-base-to-string": "warn",
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extraneous-class": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-loop-func": "warn",
    "@typescript-eslint/no-loss-of-precision": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-parameter-properties": "warn",
    "@typescript-eslint/no-this-alias": "warn",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
    "@typescript-eslint/no-unnecessary-condition": [
      "warn",
      { allowConstantLoopConditions: true },
    ],
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-useless-constructor": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/non-nullable-type-assertion-style": "warn",
    "@typescript-eslint/prefer-as-const": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/prefer-regexp-exec": "warn",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/quotes": ["warn", "double", { avoidEscape: true }],
    "@typescript-eslint/require-array-sort-compare": "warn",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/return-await": "warn",
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/triple-slash-reference": "warn",
    "@typescript-eslint/unbound-method": "warn",
    "accessor-pairs": ["warn", { enforceForClassMembers: true }],
    "array-callback-return": "error",
    "class-methods-use-this": "warn",
    "constructor-super": "error",
    "eqeqeq": ["error", "always", { null: "ignore" }],
    "for-direction": "warn",
    "func-name-matching": "warn",
    "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
    "grouped-accessor-pairs": ["warn", "getBeforeSet"],
    "guard-for-in": "error",
    "import/extensions": "warn",
    "import/first": "error",
    "import/newline-after-import": "warn",
    "import/no-cycle": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-default": "warn",
    "import/no-self-import": "error",
    "import/no-unused-modules": "warn",
    "import/no-useless-path-segments": "warn",
    "import/order": [
      "warn",
      {
        "alphabetize": { caseInsensitive: true, order: "asc" },
        "groups": [["builtin", "external", "internal"]],
        "newlines-between": "never",
      },
    ],
    "max-classes-per-file": "warn",
    "max-depth": ["warn", { max: 4 }],
    "max-nested-callbacks": ["warn", { max: 3 }],
    "max-params": ["warn", { max: 4 }],
    "new-cap": "warn",
    "no-alert": "error",
    "no-await-in-loop": "warn",
    "no-caller": "warn",
    "no-case-declarations": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-constructor-return": "error",
    "no-control-regex": "error",
    "no-delete-var": "error",
    "no-dupe-else-if": "warn",
    "no-duplicate-case": "warn",
    "no-else-return": "warn",
    "no-empty": "warn",
    "no-empty-character-class": "warn",
    "no-empty-pattern": "warn",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "warn",
    "no-extra-boolean-cast": "warn",
    "no-extra-label": "error",
    "no-fallthrough": "warn",
    "no-global-assign": "error",
    "no-implicit-coercion": "warn",
    "no-inner-declarations": "warn",
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-lone-blocks": "warn",
    "no-misleading-character-class": "warn",
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-octal": "warn",
    "no-octal-escape": "warn",
    "no-plusplus": ["warn", { allowForLoopAfterthoughts: true }],
    "no-promise-executor-return": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "warn",
    "no-restricted-properties": [
      "error",
      {
        message: "Please use Object.defineProperty instead.",
        property: "__defineGetter__",
      },
      {
        message: "Please use Object.defineProperty instead.",
        property: "__defineSetter__",
      },
    ],
    "no-restricted-syntax": ["error", "SequenceExpression"],
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-assign": "warn",
    "no-self-compare": "warn",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-undef-init": "warn",
    "no-underscore-dangle": ["warn", { enforceInMethodNames: true }],
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "warn",
    "no-unreachable-loop": "warn",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "warn",
    "no-useless-call": "warn",
    "no-useless-catch": "warn",
    "no-useless-computed-key": "warn",
    "no-useless-concat": "warn",
    "no-useless-escape": "warn",
    "no-useless-rename": "warn",
    "no-useless-return": "warn",
    "no-var": "error",
    "no-void": "error",
    "no-with": "error",
    "object-shorthand": "warn",
    "one-var": ["error", "never"],
    "operator-assignment": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-exponentiation-operator": "warn",
    "prefer-numeric-literals": "warn",
    "prefer-object-spread": "warn",
    "prefer-regex-literals": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "quote-props": ["warn", "consistent-as-needed"],
    "radix": "warn",
    "react-hooks/exhaustive-deps": [
      "error",
      { additionalHooks: "(useIsomorphicLayoutEffect)" },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-boolean-value": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react/jsx-fragments": "warn",
    "react/jsx-handler-names": "warn",
    "react/jsx-key": [
      "warn",
      { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true },
    ],
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-constructed-context-values": "warn",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-pascal-case": "warn",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "error",
    "react/no-children-prop": "warn",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unsafe": "error",
    "react/no-unused-state": "warn",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "warn",
    "react/prefer-stateless-function": "warn",
    "react/react-in-jsx-scope": "error",
    "react/require-render-return": "error",
    "react/self-closing-comp": "warn",
    "react/sort-comp": "warn",
    "react/state-in-constructor": ["warn", "never"],
    "require-atomic-updates": "error",
    "require-yield": "warn",
    "spaced-comment": ["warn", "always", { markers: ["/"] }],
    "symbol-description": "warn",
    "unicorn/better-regex": "warn",
    "unicorn/catch-error-name": "warn",
    "unicorn/consistent-function-scoping": "warn",
    "unicorn/custom-error-definition": "error",
    "unicorn/error-message": "error",
    "unicorn/explicit-length-check": "warn",
    "unicorn/filename-case": [
      "warn",
      { cases: { camelCase: true, pascalCase: true }, ignore: ["\\.d\\.ts$"] },
    ],
    "unicorn/new-for-builtins": "error",
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/no-array-for-each": "warn",
    "unicorn/no-array-instanceof": "error",
    "unicorn/no-array-push-push": "warn",
    "unicorn/no-console-spaces": "warn",
    "unicorn/no-for-loop": "warn",
    "unicorn/no-hex-escape": "warn",
    "unicorn/no-lonely-if": "warn",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-object-as-default-parameter": "warn",
    "unicorn/no-unused-properties": "warn",
    "unicorn/no-useless-undefined": "warn",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-array-find": "warn",
    "unicorn/prefer-array-flat-map": "warn",
    "unicorn/prefer-array-index-of": "warn",
    "unicorn/prefer-array-some": "warn",
    "unicorn/prefer-dataset": "error",
    "unicorn/prefer-date-now": "warn",
    "unicorn/prefer-default-parameters": "warn",
    "unicorn/prefer-event-key": "error",
    "unicorn/prefer-flat-map": "warn",
    "unicorn/prefer-modern-dom-apis": "warn",
    "unicorn/prefer-node-append": "warn",
    "unicorn/prefer-node-remove": "warn",
    "unicorn/prefer-number-properties": "warn",
    "unicorn/prefer-optional-catch-binding": "warn",
    "unicorn/prefer-query-selector": "warn",
    "unicorn/prefer-reflect-apply": "warn",
    "unicorn/prefer-regexp-test": "warn",
    "unicorn/prefer-replace-all": "warn",
    "unicorn/prefer-set-has": "warn",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-text-content": "error",
    "unicorn/prefer-type-error": "error",
    "use-isnan": "error",
    "yoda": "warn",
  },
  settings: {
    "import/extensions": [".ts", ".tsx", ".d.ts", ".js", ".jsx"],
    "import/external-module-folders": ["node_modules"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx", ".d.ts", ".js", ".jsx"],
      },
    },
    "react": {
      version: "detect",
    },
  },
}
