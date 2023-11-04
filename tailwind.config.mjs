/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'default-black':'#45474B',
				'default-white':'#F5F7F8',
				'primary':'#0174BE',
				'primary-darken':'#0C356A',
			}
		},
	},
	plugins: [],
}
