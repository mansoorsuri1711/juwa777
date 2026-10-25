/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Derived from Juwa 777 app icon: deep red-black + gold
        primary: '#140606',
        accent: '#FFD10F',
        secondary: '#1A0A0A',
      },
    },
  },
  plugins: [],
}
