/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //load any file in the views folder
    "./views/*.{ejs,html,js,ts,jsx,tsx,vue}",
    "./views/**/*.{ejs,html,js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-children"),
  ],
};
