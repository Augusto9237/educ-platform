/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      ip: '400px',
      sm: '480px',
      md: '822px',
      lg: '976px',
      fl: '1060px',
      xl: '1440px',
    },
    colors: {
      backgroundColor: {
        50: "#FFFF",
        100: "#F8F8F8",
        300: "#E1E1E6",
        400: "#3668ff",
        500: "#0363B4",
        900: "#004783",
      },
      buttonColor: {
        500: "#FBAC0F",
        600: '#db9302',
      },
      buttonSecondaryColor: {
        500: "",
        600: "#E1E1E6",
      },
      textColor: {
        100: "#F8F8F8",
        200: "#C4C4CC",
        300: "#8D8D99",
        500: "#323238",
        600: "#29292E",
        700: "#121214",
        900: "#09090A",
      },
      textSecondaryColor: {
        200: "#E74B67",
        300: "#56D551",
        400: "#20c71a",
        600: "#090030",
      },
    },
  },
  plugins: [],
};