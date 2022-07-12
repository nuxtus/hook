/// <reference types="vitest" />
import { defineConfig } from "vite"

export default defineConfig({
	test: {
		exclude: [
			"node_modules",
			"dist",
			".github",
			"**/.{idea,git,cache,output,temp}/**",
			"src",
		],
	},
})
