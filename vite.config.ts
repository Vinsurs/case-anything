import { defineConfig } from "vite"
import typescript from "@rollup/plugin-typescript"
import { resolve } from "path"

export default defineConfig({
    build: {
        target: "es2015",
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'caseAnything',
            fileName: 'case-anything',
        },
        rollupOptions: {
            output: {
                dir: resolve(__dirname, "dist")
            },
            plugins: [typescript()],
        },
    }
})