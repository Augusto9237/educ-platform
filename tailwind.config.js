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
        100: "#F8F8F8",
        300: "#E1E1E6",
        500: "#222BF3",
        900: "#140169",
      },
      buttonColor: {
        500: "#ffd321",
        600: '#d9af07',
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
        600: "#070024",
      },
    },
  },
  plugins: [],
};