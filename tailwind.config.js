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
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      backgroundColor: {
        300: "#FFFFFF",
        500: "#222BF3",
        900: "#181FC7",
      },
      textColor: {
        500: "#FFFFFF",
        900: "#09090A",
      },
      buttonColor: {
        500: "#FFFD00",
        600: '#FFC700',
      },
      buttonSecondaryColor: {
        500: "#F8F8F8",
        600: "#E1E1E6",
      },
      primaryColor: {
        100: "#E1E1E6",
        200: "#C4C4CC",
        300: "#8D8D99",
        500: "#323238",
        600: "#29292E",
        700: "#121214",
        900: "#09090A",
      },
    },
  },
  plugins: [],
};