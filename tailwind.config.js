/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			screens: {
				'4k': '2560px',
			},
			colors: {
				darkGrey: '#24232C',
				grey: '#817D92',
				almostWhite: '#E6E5EA',
				veryDarkGrey: '#18171F',
				neonGreen: '#A4FFAF',
				red: '#F64A4A',
				orange: '#FB7C58',
				yellow: '#F8CD65',
			},
			fontFamily: {
				jetBrains: "'JetBrains Mono', monospace",
			},
		},
	},
	plugins: [],
};
