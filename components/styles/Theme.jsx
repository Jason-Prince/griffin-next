import { ThemeProvider } from 'styled-components';

const theme = {
  palette: {
    black: `#231f20`,
    primary: {
      light: `#E28C78`,
      main: `#D5573B`,
      dark: `#B94227`,
    },
    secondary: {
      light: `#6CA6C6`,
      main: `#4082A5`,
      dark: `#336884`,
    },
    tertiary: {
      light: `#37A993`,
      main: `#287A6A`,
      dark: `#194D43`,
    },
  },
  font: {
    size: {
      minus12: `.25rem`,
      minus8: `.5rem`,
      minus4: `.75rem`,
      base: `1rem`,
      plus4: `1.25rem`,
      plus8: `1.5rem`,
      plus12: `1.75rem`,
      plus16: `2rem`,
    },
    family: {
      primary: `'Roboto', sans-serif`,
      secondary: `'Montserrat', sans-serif`,
    },
    weight: {
      thin: 100,
      regular: 400,
      bold: 700,
    },
  },
  padding: {
    minus12: `.25rem`,
    minus8: `.5rem`,
    minus4: `.75rem`,
    base: `1rem`,
    plus4: `1.25rem`,
    plus8: `1.5rem`,
    plus12: `1.75rem`,
    plus16: `2rem`,
  },
  gap: {
    minus12: `.25rem`,
    minus8: `.5rem`,
    minus4: `.75rem`,
    base: `1rem`,
    plus4: `1.25rem`,
    plus8: `1.5rem`,
    plus12: `1.75rem`,
    plus16: `2rem`,
  },
  margin: {
    minus12: `.25rem`,
    minus8: `.5rem`,
    minus4: `.75rem`,
    base: `1rem`,
    plus4: `1.25rem`,
    plus8: `1.5rem`,
    plus12: `1.75rem`,
    plus16: `2rem`,
  },
  media: {
    sm: `768px`,
    md: `1024px`,
    lg: `1200px`,
    xl: `1600px`,
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
