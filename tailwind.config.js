/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light' : "#ffffff",
        'light_gray' : '#f5f5f5',
        'light_light' : '#88949f',
        'l_dark' : "#2c2c32",
        'dark_dark' : '#25252b',
        'primary_blue' : '#0066b8',
        'footer_gray' : '#333333',
        'header_search' : '#3d3d42'
      },
      fontFamily: {
        'Poppins': 'sans-serif',
      },
      // backgroundImage: {
      //   'twitter': 'url(../img)'
      // }
      
    },
  },
  plugins: [],
};
