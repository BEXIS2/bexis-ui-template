/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', 
	require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
	'.node_modules/@bexis/bexis2-core-ui/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'),require('@tailwindcss/line-clamp'),...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
}
