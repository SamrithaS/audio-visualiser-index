// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            external: ["fs/promises"],
            input: {
                main: resolve(__dirname, "index.html"),
                magazine: resolve(__dirname, "magazine.html"),
            },
        },
    },
});
