module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns: [
    "/bin/cli.js",
    "/database/config/config.js",
    "/database/models/",
    "package.json",
    "package-lock.json",
  ],

  rules: {},
};
