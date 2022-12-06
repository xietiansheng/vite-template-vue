import { defineConfig, loadEnv, normalizePath } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, join } from "path";
import windiCSS from "vite-plugin-windicss";
import viteEslint from "vite-plugin-eslint";
import viteImagemin from "vite-plugin-imagemin";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { visualizer } from "rollup-plugin-visualizer";
import { BeautifyConsolePlugin } from "beautify-console";
// element-plus
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const variablePath = normalizePath(resolve("./src/styles/variable.scss"));
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    define: {
      __SERVER_NAME__: `'${env.VITE_SERVER_NAME}'`,
      __DEV__: env.VITE_SERVER_NAME !== "production",
    },
    plugins: [
      vue(),
      windiCSS(),
      viteEslint(),
      viteImagemin({
        optipng: { optimizationLevel: 7 },
        pngquant: { quality: [0.8, 0.9] },
        svgo: {
          plugins: [
            { name: "removeViewBox" },
            { name: "removeEmptyAttrs", active: false },
          ],
        },
      }),
      createSvgIconsPlugin({
        iconDirs: [
          join("D:\\project\\web\\vite-template-vue", "src/assets/icons"),
        ],
      }),
      visualizer({
        open: true,
      }),
      BeautifyConsolePlugin({
        title: "Vite",
        info: "Log",
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${variablePath}";`,
        },
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "@assets": resolve(__dirname, "src/assets"),
      },
    },
    optimizeDeps: {
      exclude: ["vue"],
    },
    build: {
      minify: "esbuild",
      target: "es2015",
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ["vue"],
          },
        },
      },
    },
  };
});
