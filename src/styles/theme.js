/**
 * @type {import("@mantine/core").MantineThemeOverride}
 */
const theme = {
  fontFamily: 'Source Sans Pro',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  breakpoints: {
    xs: 600,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1920
  },
  primaryColor: 'indigo',
  headings: {
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    sizes: {
      h1: {
        fontSize: '3rem'
      },
      h2: {
        fontSize: '2rem'
      }
    }
  }
};

export default theme;
