module.exports = [
    {
      ignores: ["node_modules/**", "dist/**"],
    },
    {
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: {
        "no-unused-vars": "warn",
        "no-console": "off",
        "eqeqeq": "error",
      },
    },
  ];
  