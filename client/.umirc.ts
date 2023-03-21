import { defineConfig } from "umi";
import { resolve } from "path";

export default defineConfig({
  npmClient: "pnpm",
  devtool: "eval",
  fastRefresh: true,
  dva: {},
  hash: true,
  antd: {},
  plugins: ["@umijs/plugins/dist/dva", "@umijs/plugins/dist/antd"],
  alias: {
    themes: resolve(__dirname, "./src/themes"),
  },
  // proxy: {
  //   "/api": {
  //     target: "http://localhost:5005/",
  //     changeOrigin: true,
  //     // pathRewrite: { '^/api': '/api' },
  //   },
  // },
});
