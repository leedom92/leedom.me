/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				main: 'rgba(79, 192, 141, 1)'
			},
      transitionTimingFunction: {
        'evanyou': 'cubic-bezier(0, 0.8, 0.13, 1)',
      },
			screens: {
				'xs': '475px',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
