/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)

import { resolve } from "pathe";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

/**
 * For more information on how to configure this file, please refer to:
 * @see https://vitejs.dev/guide/build.html#library-mode
 */
export default defineConfig({
	resolve: {
		alias: {
			"@rwanda": resolve(__dirname, "src"),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "rwanda",
			fileName: "rwanda",
		},
	},
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
	],
	//   test: {},
});
