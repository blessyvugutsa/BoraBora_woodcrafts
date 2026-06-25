/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom earthy color palette for BoraBora Woodcrafts
        'wood-bg': '#FDFBF7',      // Warm Beige / Soft Off-White - Primary Background
        'wood-text': '#2F2519',    // Deep Bark Brown - Primary Text/Accents
        'wood-green': '#3F5E4D',   // Forest Green - Accent/Buttons
        'wood-green-dark': '#2C4436', // Darker Forest Green variant
        'wood-clay': '#D4A373',    // Sandy Clay - Subtle Highlights
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
