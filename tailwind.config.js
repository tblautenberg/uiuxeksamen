module.exports = {
  content: [
    "./src/**/*.{html,js}", // Adjust based on where your HTML/JS files are
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1c3d5d', // Add your custom color
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
