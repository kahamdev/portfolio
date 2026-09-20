import js from "@eslint/js";
import next from "eslint-config-next/core-web-vitals";
export default [js.configs.recommended, ...next, { ignores: [".next/**", "node_modules/**", "coverage/**"] }];
