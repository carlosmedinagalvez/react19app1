import { defineConfig } from "eslint/config";

export default defineConfig([
    { ignores: ["**/*.js", "**/*.cjs", "**/*.mjs"] }, { rules: {semi:"error", "prefer-const": "error"}},
]);

