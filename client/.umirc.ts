import { defineConfig } from "umi";
import { resolve } from "path";

const config = {
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
  proxy: {},
};

if (process.env.NODE_ENV === "development") {
  config["proxy"] = {
    "/api": {
      target: "http://localhost:5005/",
      changeOrigin: true,
      // pathRewrite: { '^/api': '/api' },
    },
  };
}

export default defineConfig(config);
