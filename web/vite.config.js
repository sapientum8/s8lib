import {defineConfig} from 'vite'
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	root: path.join(__dirname, "public"),
	publicDir: path.join(__dirname, "public"),
	build: {
		outDir: path.join(__dirname, "build/public"),
		emptyOutDir: true,
	},
})