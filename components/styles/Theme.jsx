import { ThemeProvider } from 'styled-components';

const theme = {
  palette: {
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
      p: `1rem`,
      h1: `2rem`,
      h2: `1.5rem`,
      h3: `1rem`,
      h4: `.5rem`,
    },
    family: {
      h: `'Montserrat', sans-serif`,
      p: `'Roboto', sans-serif`,
    },
  },
  padding: {
    sm: `.5rem`,
    md: `1rem`,
    lg: `1.5rem`,
    xl: `2rem`,
  },
  gap: {
    sm: `.5rem`,
    md: `1rem`,
    lg: `1.5rem`,
    xl: `2rem`,
  },
  margin: {
    sm: `.5rem`,
    md: `1rem`,
    lg: `1.5rem`,
    xl: `2rem`,
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
