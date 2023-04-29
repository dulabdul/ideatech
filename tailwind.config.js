/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        light: '#FFFFFF',
        primary: '#1AA37A',
        tersier: '#B6B6B6',
        bgDark: '#2A2A2A',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
