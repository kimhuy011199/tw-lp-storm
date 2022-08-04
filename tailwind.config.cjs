module.exports = {
  content: ['./dist/*.html', './*.html'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['IBM Plex Sans'],
        body: ['Heebo'],
      },
      colors: {
        primary: '#0062FF',
        secondary: '#00F5F0',
        dark: '#111325',
        gray1: '#E5ECF4',
        gray2: '#808AB8',
        gray3: '#1A1F34',
      },
      spacing: {
        '2/1': '200%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
