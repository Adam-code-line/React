// 文件名: eslint.config.mjs

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// 引入 Prettier 相關依賴
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended"; // 推荐使用此方式引入插件及规则

const eslintConfig = defineConfig([
  // 1. Next.js 核心及 TypeScript 规则
  ...nextVitals,
  ...nextTs,

  // 2. 禁用所有与 Prettier 冲突的 ESLint 格式规则 (必须放在 Next/TS 配置之后)
  eslintConfigPrettier,

  // 3. 将 Prettier 规则作为 ESLint 错误报告出来
  //    注意: 如果你使用 `eslint-plugin-prettier/recommended`，则不需要手动添加 plugin:
  eslintPluginPrettier,

  // 4. 忽略配置
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // 确保忽略 Prettier 配置文件本身
    "prettier.config.js",
  ]),
]);

export default eslintConfig;
