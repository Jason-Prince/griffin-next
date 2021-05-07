import { ThemeProvider } from 'styled-components';

/* HSL */
const mint_cream = `hsla(111, 24%, 94%, 1)`;
const smoky_black = `hsla(24, 14%, 7%, 1)`;
const cordovan = `hsla(358, 38%, 43%, 1)`;
const blue_ncs = `hsla(201, 44%, 45%, 1)`;
const tropical_rain_forest = `hsla(168, 51%, 32%, 1)`;

const theme = {
  colors: {
    primary_1: mint_cream,
    primary_2: smoky_black,
    primary_3: cordovan,
    secondary: blue_ncs,
    tertiary: tropical_rain_forest,
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
