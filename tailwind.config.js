/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/App.js',
    './src/index.js',

    './src/Components/Uitily/Navbar.js',
    './src/Components/Uitily/Slider.js',
    './src/Components/Uitily/ImgInfo.js',
    './src/Components/Home/HomeCategorie.js',
    './src/Components/Home/ProductLists.js',
    './src/Components/product/Allproduct.js',
    './src/Components/Home/SearchSection.js',
    './src/Components/Uitily/customButton.js',
    './src/Components/Uitily/supCategoriesFiltr.js',
    './src/Components/Uitily/headerFiltr.js',
    './src/Components/Uitily/Dropdown.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

