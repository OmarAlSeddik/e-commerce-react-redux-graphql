import { useSelector } from "react-redux";
import styled from "styled-components";
import Buttons from "./Buttons";
import Items from "./Items";
import Quantity from "./Quantity";
import Total from "./Total";

const StyledCartMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 5%;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: var(--box-shadow);
  width: 20rem;
  padding: 2rem 1rem;
  gap: 2rem;
  height: 20rem;
  overflow-y: scroll;

  .hidden {
    display: none;
  }
`;

const CartMenu = (props) => {
  const cartMenuOpen = props.cartMenuOpen;
  const handleToggleCartMenu = props.handleToggleCartMenu;
  const currency = useSelector((state) => state.currency);
  const cart = useSelector((state) => state.cart);
  const items = Object.values(cart.items);
  let totalCost = 0;

  return (
    <StyledCartMenu style={cartMenuOpen ? {} : { display: "none" }}>
      <Quantity cart={cart}></Quantity>
      <Items items={items} currency={currency} />
      <Total currency={currency} totalCost={totalCost} />
      <Buttons handleToggleCartMenu={handleToggleCartMenu} />
    </StyledCartMenu>
  );
};

export default CartMenu;
