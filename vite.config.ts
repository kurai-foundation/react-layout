// vite.config.ts
import { defineConfig } from "vite"

import path from "path"
import { typescriptPaths } from "rollup-plugin-typescript-paths"

import dts from "vite-plugin-dts"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [
    react(),
    // генерация файла `index.d.ts`
    dts({
      insertTypesEntry: true,
      entryRoot: path.resolve(__dirname, "./src"),
      beforeWriteFile: filePath => {
        if (filePath.includes("dist/src/index.d.ts")) return false
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, "./src")
      }
    ]
  },
  server: {
    port: 3000
  },
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: [
        "react",
        "react-i18next",
        "classnames",
        "i18next"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      },
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
          nonRelative: true
        }),
      ]
    }
  }
})
