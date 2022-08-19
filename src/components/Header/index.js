import styled from "styled-components";
import Cart from "./Cart";
import Currency from "./Currency";
import Logo from "./Logo";
import Nav from "./Nav";

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 5rem;
  width: 100%;
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
