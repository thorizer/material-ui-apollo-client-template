const pixelsToRem = (value: number) => {
  return `${value / 16}rem`;
};

const getResponsiveFontSizes = ({ sm, md, lg }: { sm: number; md: number; lg: number }) => {
  return {
    '@media (min-width:600px)': {
      fontSize: pixelsToRem(sm)
    },
    '@media (min-width:900px)': {
      fontSize: pixelsToRem(md)
    },
    '@media (min-width:1200px)': {
      fontSize: pixelsToRem(lg)
    }
  };
};

const FONT_PRIMARY = 'Public Sans, sans-serif'; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pixelsToRem(40),
    ...getResponsiveFontSizes({ sm: 52, md: 58, lg: 64 })
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pixelsToRem(32),
    ...getResponsiveFontSizes({ sm: 40, md: 44, lg: 48 })
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pixelsToRem(24),
    ...getResponsiveFontSizes({ sm: 26, md: 30, lg: 32 })
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pixelsToRem(20),
    ...getResponsiveFontSizes({ sm: 20, md: 24, lg: 24 })
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pixelsToRem(18),
    ...getResponsiveFontSizes({ sm: 19, md: 20, lg: 20 })
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pixelsToRem(17),
    ...getResponsiveFontSizes({ sm: 18, md: 18, lg: 18 })
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pixelsToRem(16)
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pixelsToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pixelsToRem(16)
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pixelsToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pixelsToRem(12)
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pixelsToRem(12),
    letterSpacing: 1.1,
    textTransform: 'uppercase'
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pixelsToRem(14),
    textTransform: 'capitalize'
  }
} as const;

export default typography;
