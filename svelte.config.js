import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		compatibility: {
			componentApi: 4
		}
	},
	kit: {
		adapter: adapter({
			runtime: 'nodejs24.x'
		})
	},
	preprocess: vitePreprocess()
};

export default config;
