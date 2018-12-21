import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  #app {
    height: 100%;
    width: 100%;
  }
  body {
    font-family: Lato, sans-serif;
    font-weight: 400;
  }
  button {
    font-family: Lato, sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
  }
  input, textarea, select {
    font-family: Lato, sans-serif;
    font-weight: 300;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Lato, sans-serif;
    font-weight: 300;
  }
`;

export default GlobalStyles;
