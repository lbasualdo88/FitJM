/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        celeste: '#bee1e5',
        amarillo: '#eeff41',
        negro: '#000000',
        blanco: '#ffffff',
        grisOscuro: '#243c56',
        grisClaro: '#e6eaec',
      },
    },
  },
  plugins: [
    function({ addBase, addUtilities }) {
      addBase({
        html: {
          fontSize: '62.5%', // 1rem = 10px
          boxSizing: 'border-box',
          scrollSnapType: 'y mandatory',
        },
        '*, *::before, *::after': {
          boxSizing: 'inherit',
        },
        body: {
          fontSize: '1.6rem', // 1rem = 16px
          fontFamily: 'Forum, serif',
        },
      });
      const newUtilities = {
        '.mostrar': {
          visibility: 'visible',
          opacity: '1',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
        },
        '.flexColMenu': {
          display: 'flex',
          flexDirection: 'column',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
