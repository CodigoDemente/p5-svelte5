import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				p5: '#ed225d',
				svelte: '#ff3e00',
			},
		},
	},

	plugins: [],
} satisfies Config;
