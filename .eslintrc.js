module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@next/next/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    React: "writable",
  },
  ignorePatterns: ["build"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 13,
    sourceType: "module",
    project: ["./tsconfig.json", "./postcss.config.js"],
  },
  plugins: ["@typescript-eslint", "react", "tailwindcss", "jsx-a11y"],
  settings: { react: { version: "detect" } },
  rules: {
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  }
};
