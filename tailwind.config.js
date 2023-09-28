
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './roverx/**/*.{html,js}', // Include HTML and JavaScript files in the "site" folder and its subdirectories
    './index.html', // Include the root "index.html" file
  ],
  theme: {
    screens: {
       sm: '480px',
       md: '768px',
       lg: '976px',
       xl: '1300px'
    },
    extend: {
      colors:{
        palepurple: '#F2A2B8',
        palepalepurple:'#F2D5DD',
        deeppurple: '#A60F7E',
        lightpurple: '#A6088C',
        black: '#0D0D0D',
        lightred: '#F2134F',
        smokewhite:'#F2F2F2',
      }
    },
  },
  plugins: [],
}

