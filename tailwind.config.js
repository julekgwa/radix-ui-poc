import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        button: 'box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);',
        input: '0px 20px 15px rgba(0, 0, 0, 0.05)',
        logo: 'box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.05)'
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
  plugins: [
    plugin(({addBase, theme}) => {
      addBase({
        // or whichever color you'd like
        'html': {color: theme('colors.white')},
      });
    })
  ],
}

