export const baseTheme = {
  colors: {
    base: '#ffffff',
    primary: 'rgba(24, 24, 24, 1)',
    secondary: 'rgba(39, 39, 39, 1)',
    neutral: 'rgba(150, 150, 150, 1)',
    success: 'rgba(252, 88, 66, 1)',
    inactive: 'rgba(252, 88, 66, 1)',
    text: '#C7C7C7',
    active: 'rgba(5, 193, 104, 1)',
    hold: 'rgba(255, 158, 44, 1)',

  },
  size: {
    desktop: 1440,
    laptopL: 1280,
    laptop: 1024,
    tablet: 768,
    mobileL: 425,
  },
  media: {
    desktop: '(max-width: 1440px)',
    laptopL: '(max-width: 1280px)',
    laptop: '(max-width: 1024px)',
    tablet: '(max-width: 768px)',
    mobileL: '(max-width: 425px)',
  },

  // in px
  sizes: {
    header: { height: 122 },
    container: { width: 1200 },
    footer: { height: 128 },
    modal: { width: 540 },
  },

  // in ms
  durations: {
    ms300: 300,
  },

  // z-index
  order: {
    header: 50,
    modal: 100,
  },
};
