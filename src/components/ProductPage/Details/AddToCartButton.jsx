import styled from "styled-components";

const StyledAddToCartButton = styled.button`
  font-weight: 600;
  line-height: 1.2rem;
  background-color: var(--c-primary);
  color: white;
  padding: 1rem;
  margin-bottom: 2.5rem;
  cursor: pointer;
  transition: 0.2s background-color;

  &:hover {
    background-color: var(--c-primary-dark);
  }
`;

const AddToCartButton = ({ addToCart }) => {
  return (
    <StyledAddToCartButton onClick={addToCart}>
      ADD TO CART
    </StyledAddToCartButton>
  );
};

export default AddToCartButton;
