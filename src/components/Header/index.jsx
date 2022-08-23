import styled from "styled-components";
import Cart from "./Cart";
import Currency from "./Currency";
import Logo from "./Logo";
import Nav from "./Nav";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 1.375rem;
  height: 5rem;
  width: 100%;
  padding: 0 5%;
  box-shadow: 0 0.1rem 0.2rem #0004;
  background-color: #fff;
  z-index: 1;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Nav />
      <Logo />
      <Currency />
      <Cart />
    </StyledHeader>
  );
};

export default Header;
