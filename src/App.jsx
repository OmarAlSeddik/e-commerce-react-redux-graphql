import { Route, Routes } from "react-router-dom";
import { createGlobalStyle, css } from "styled-components";
import CartPage from "./components/CartPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

const GlobalStyles = createGlobalStyle`${css`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&display=swap");

  :root {
    --c-primary: #5ece7b;
    --c-text: #1d1f22;
    --c-gray-light: #eee;
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart-page" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
