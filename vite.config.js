import {defineConfig} from 'vite'
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	root: path.join(__dirname, "web/public"),
	publicDir: path.join(__dirname, "web/public"),
	build: {
		outDir: path.join(__dirname, "web/build/public"),
		emptyOutDir: true,
	},
})