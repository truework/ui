import { createGlobalStyle } from 'styled-components';

// same as src/pages/index.html
export const GlobalStyle = createGlobalStyle(
  ({ theme }) => `
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    color: ${theme.colors.body};
    font-size: 100%;
    font-weight: normal;
    font-family: ${theme.fonts.roboto};
    letter-spacing: 0.3px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  ol, ul {
    list-style: none;
  }
  button {
    background: transparent;
    border: 0;
    padding: 0;
  }
  button:enabled {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    transition: color 150ms ease-in-out;
  }
  a:hover {
    color: ${theme.colors.body};
    text-decoration: none;
  }
`
);
