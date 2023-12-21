/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  colors: {
    'gray-100': '#f9f9f9',
    'gray-200': '#d9d9d9',
  },
  theme: {
    extend: {
      fontFamily: {
        'head': 'PlusJakartaSans',
        'body': 'Ageo',
      },
      colors: {
        'primary': '#1069DF',
        'body': '#3a3a3a',
        'head': '#1a1a1a',
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
      },
      borderRadius: {
        '5xl': '30px'
      }
    },
  },
  plugins: [],
}
