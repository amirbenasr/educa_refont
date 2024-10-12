import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// Runtime: 'nodejs18.x' is not needed, Vercel will detect it automatically
			// Add any other Vercel-specific options here if needed
		})
	}
};

export default config;
