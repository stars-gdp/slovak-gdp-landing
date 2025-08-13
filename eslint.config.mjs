import next from "eslint-config-next";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  next, // <= просто элемент массива, не spread
  prettierRecommended, // включает правило prettier/prettier как error
  {
    ignores: ["node_modules", ".next", "dist", "build", "out", "coverage", ".vercel", ".netlify"],
  },
];
