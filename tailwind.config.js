/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  colors: {
    'gray-100': '#f9f9f9',
    'gray-200': '#d9d9d9',
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'head': 'Aeonik',
        'body': 'Ageo',
      },
      colors: {
        'primary': '#1069DF',
        'body': '#444444',
        'head': '#2a2a2a',
        'sky': '#f8f8ff',
      },
      boxShadow: {
        'linear': '0 3px 12px 0px rgba(0, 0, 0, 0.1)',
        'linear-2': '0 0px 10px 0px rgba(0, 0, 0, 0.1)',
        '11xl': '0 0 8px 0px rgba(0, 0, 0, 0.1)',
      },
      gridTemplateColumns: {
        '16': '20% 20% 20% 40%'
      },
      fontSize: {
        '5xl': '32px',
        '6xl': '46px',
        '7xl': '64px',
        '8xl': '80px',
        '9xl': '90px',
      },
      borderRadius: {
        '5xl': '30px'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}