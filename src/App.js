import { createGlobalStyle, css } from "styled-components";
import Header from "./components/Header";

const GlobalStyles = createGlobalStyle`${css`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap");

  :root {
    --c-primary: #5ece7b;
    --c-text: #1d1f22;
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
    background-color: #fff;
  }
`}`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
    </div>
  );
}

export default App;
