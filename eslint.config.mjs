import next from "eslint-config-next";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  next,
  prettierRecommended,
  {
    ignores: ["node_modules", ".next", "dist", "build", "out", "coverage", ".vercel", ".netlify"],
  },
];
