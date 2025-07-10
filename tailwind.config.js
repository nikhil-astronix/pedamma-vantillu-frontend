module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f59e0b', // yellow-500
        },
        background: {
          DEFAULT: '#ffffff', // white
        },
        'text-primary': '#1f2937', // gray-800
        'text-secondary': '#6b7280', // gray-500
      },
      fontFamily: {
        logo: ['Georgia', 'serif'],
        higuen: ['Higuen Elegant Serif', 'serif'],
      },
    },
  },
  plugins: [],
}; 