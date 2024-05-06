/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-color": "#2f5fc7",
				"secondary-color": "#0f7a60",
				"light-pink": "#FBF5F1",
				"light-yellow": "#fff26f",
			},
		},
	},
	plugins: [],
};
