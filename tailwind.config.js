/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
	content: [
		'./app/*.{js,jsx,ts,tsx}',
		'./app/**/*.{js,jsx,ts,tsx}',
		'./app/**/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
