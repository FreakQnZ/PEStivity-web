/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
				connect4:["connect4", "sans-serif"],
        hangman:["hangman", "sans-serif"],
        tictactoe:["tictactoe", "sans-serif"],
        rps:["rps", "sans-serif"],
			}
    },
  },
  plugins: [require("daisyui")],
}

