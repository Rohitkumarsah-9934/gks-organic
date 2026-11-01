/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        maroon: { DEFAULT: '#8B0F2F', dark: '#6E0B25', light: '#A8153D' },
        leaf: { DEFAULT: '#1B6B2A', dark: '#14501F', light: '#E6F2E1', soft: '#F1F8EC' },
        cream: '#FBF6F0',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};
