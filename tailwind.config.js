/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./assets/back.png')",
      },
      width:{
        "90%":"90%",
        "440px":"440px",
      },
      boxShadow: {
        '3xl': '0 4px 30px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

