import styled from "styled-components";
import Cart from "./Cart";
import Currency from "./Currency";
import Logo from "./Logo";
import Nav from "./Nav";

const StyledHeader = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 1.375rem;
  height: 5rem;
  width: 100%;
  padding: 0 5%;
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
