/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        main: 'rgba(79, 192, 141, 1)',
        'dark-1': '#151515',
        'dark-2': '#1e1e1e',
        'dark-3': '#ffffff31'
      },
      transitionTimingFunction: {
        evanyou: 'cubic-bezier(0, 0.8, 0.13, 1)',
      },
      screens: {
        xs: '475px',
      },
      fontFamily: {
        montserrat: [
          '"Montserrat"',
          '"Helvetica Neue"',
          ' "Hiragino Sans GB"',
          '"LiHei Pro"',
          'Arial',
          'sans-serif',
        ],
        roboto: [
          '"Roboto"',
          '"Helvetica Neue"',
          '"Hiragino Sans GB"',
          '"LiHei Pro"',
          'Arial',
          'serif',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
