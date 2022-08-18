import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`${css`
  @import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");

  :root {
    --c-primary: #5ece7b;
  }

  * {
    font-family: "Raleway", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
  }

  body {
    min-height: 100vh;
  }
`}`;

export default GlobalStyles;
