/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //load any file in the views folder
    './views/*.{ejs,html,js,ts,jsx,tsx,vue}',
    './views/**/*.{ejs,html,js,ts,jsx,tsx,vue}',

    //load preline styles
    './node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-children'),
  ],
};
