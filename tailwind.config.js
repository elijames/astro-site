/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      fontFamily: {
        'special-elite': ['Special Elite', 'monospace'],
        'jost': ['Jost', 'sans-serif'],
      },
      colors: {
        'nav-black': '#000000',
        'nav-text': '#FFFFFF',
      },
      spacing: {
        'nav-height': '99px',
        'logo-left': '139px',
        'logo-top': '38px',
        'nav-top': '31px',
      },
      width: {
        'container-sm': '576px',    // 90% of 640px
        'container-md': '691px',    // 90% of 768px
        'container-lg': '921px',    // 90% of 1024px
        'container-xl': '1152px',   // 90% of 1280px
        'container-2xl': '1152px',  // Original Figma width
        'logo': '207px',
        'nav-item': '161px',
      },
      height: {
        'nav': '99px',
        'logo': '37px',
        'nav-item': '35px',
      },
    },
  },
  plugins: [],
}