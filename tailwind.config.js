module.exports = {
  // mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './**/*.js',
    './**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bgGray': '#F8F8F8',
        'textColor': '#4F5665',
        'main-red': '#DE1A3E',
        'main-red-transparent': 'rgba(222, 26, 62, 0.7)',
        'main-green': '#5BC43A',
        'main-gray': '#4F5665',
        'bg-black': '#0B132A',
        // 'mainGreen': '#15BDB1',
        // 'mainGreenLight': '#5BC43A',
        // 'mainRed': '#FF535A',
        // 'mainBlue-drark': '#406A80',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      gridTemplateColumns: {
        // 'timeline': 'min-content 1fr min-content 1fr min-content 1fr min-content',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

