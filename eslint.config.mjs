import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off"
    },
  },
  {
    files: ["jest.config.js"],
    languageOptions: {
      sourceType: "commonjs", // Allows module.exports
    },
  },

  {
    // ✅ Fix for Jest globals (`test`, `expect`)
    files: ["**/*.test.ts", "**/*.test.js"], // Apply only to test files
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
        jest: "readonly",
      },
    },
  },
  {
    files: ["**/*.ts"], // Enable Node.js globals for TypeScript files
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
];
