const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        fancy: ['Abril Fatface', ...defaultTheme.fontFamily.sans],
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        yllw: '#FFF00D',
        orng: '#FF991A',
        rd: '#C41200',
        pnk: '#FFA8F7',
        prpl: '#913DFF',
        blu: '#008AFF',
        brwn: '#6B3D00',
        gry: '#A8ADAD',
        blck: '#000000',
        wht: '#ffffff',
      },
      backgroundImage: {
        'card-background':
          "url('https://www.photos-public-domain.com/wp-content/uploads/2011/01/yellow-notebook-paper-texture.jpg')",
        'purple-grad':
          "url('https://yt3.ggpht.com/xn3MznMqzvtyk7h2gmWPfMSQr7lEPDt_i8vCYnfWHbZxFHgBRYzrb4tVtkGSvBB0YE4=w1080')",
        'img-1': "url('https://i.ibb.co/zZyhhdP/row-1-column-1.png')",
        'img-2': "url('https://i.ibb.co/qYsF4WL/row-2-column-1.png')",
        'img-3': "url('https://i.ibb.co/YNp3zsB/row-3-column-1.png')",
        'img-4': "url('https://i.ibb.co/Qc4T6Vj/row-4-column-1.png')",
        'img-5': "url('https://i.ibb.co/1XXjKSc/row-5-column-1.png')",
        'img-6': "url('https://i.ibb.co/mGc46QG/row-6-column-1.png')",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-debug-screens'),
    require('tailwindcss-textshadow'),
    require('@tailwindcss/forms'),
  ],
};
