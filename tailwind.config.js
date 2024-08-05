/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			body: "#141316",
			layout: "#1F2029",
			secondary: "#7396FA",
			"dark-secondary": "#2A3263",
			primary: "#F3F5F6",
			green: "#0E5645",
			"light-green": "#24A582",
			red: "#5E3238",
			"light-red": "#BE5564",
			gray: "#292B2F",
			"light-gray": "#95969C",
		},
		extend: {},
	},
	plugins: [],
};
