import { Route, Routes } from "react-router-dom";
import { createGlobalStyle, css } from "styled-components";
import CartPage from "./components/CartPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

const GlobalStyles = createGlobalStyle`${css`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&display=swap");

  :root {
    --c-primary-dark: #419056;
    --c-primary: #5ece7b;
    --c-primary-light: #7ed795;
    --c-primary-transparent: #5ece7b80;
    --c-text: #1d1f22;
    --c-gray-light: #eee;
    --box-shadow: 0 0.1rem 0.2rem #00000040;
    --box-shadow-product: 0 0.25rem 2.1875rem #00000040;
  }

  * {
    font-family: "Raleway", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
  }

  body {
    min-height: 90vh;
  }

  a {
    all: unset;
  }
`}`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
