/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'button': 'box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);'
      },
      fontFamily: {

      },
      backgroundColor: {
        'button-outlined': 'background: rgba(238, 238, 238, 0.0001);'
      },
      colors: {
        'light-grey': '#EEEEEE',
        'bright-pink': '#E23595'
      }
    },
  },
  plugins: [],
}

