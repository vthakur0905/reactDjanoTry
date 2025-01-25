/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust based on your project structure
    ],
    theme: {
      extend: {
        colors: {
          
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Add custom fonts
        },
        screens: {
          
        },
      },
    },
    
    plugins: [
      require('@tailwindcss/forms'), // Example plugin for better form styling
      require('@tailwindcss/typography'), // Example plugin for typography
    ],
  };
  