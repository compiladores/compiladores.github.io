module.exports = {
  content: ['./src/**/*.{js,md,njk,svg,html}'],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    debugScreens: {
      position: ['bottom', 'right'],
    },
    extend: {
      colors:{
        "compiviolet":"#cfd5e6"
      }
    },
  },
}
