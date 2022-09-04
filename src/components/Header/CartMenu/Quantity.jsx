import styled from "styled-components";

const StyledQuantity = styled.div``;

const Quantity = ({ cart }) => {
  return (
    <StyledQuantity>
      <b>My Bag,</b> {cart.quantity} items
    </StyledQuantity>
  );
};

export default Quantity;
