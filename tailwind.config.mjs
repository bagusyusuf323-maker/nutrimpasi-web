/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4ABFCA',      // Fresh Turquoise
          'primary-dark': '#389FA9',// Hover state for primary
          secondary: '#FFF3D6',    // Soft Cream
          'secondary-dark': '#F9E4B7',
          accent: '#FFB86B',       // Warm Peach
          'accent-coral': '#F58F8F',// Soft Coral
          text: '#31545A',         // Deep Teal
          'text-muted': '#5D7C82', // Lighter Deep Teal for secondary copy
          bg: '#F8FCFA',           // Clean Mint White
          card: '#FFFFFF',
          border: '#E3EFEA',
        },
      },
      fontFamily: {
        sans: ['"Quicksand"', '"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['"Quicksand"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(74, 191, 202, 0.12)',
        'soft-hover': '0 20px 35px -10px rgba(74, 191, 202, 0.22)',
        'warm': '0 10px 30px -10px rgba(255, 184, 107, 0.2)',
      },
    },
  },
  plugins: [],
};
