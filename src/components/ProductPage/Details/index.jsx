import styled from "styled-components";
import AddToCartButton from "./AddToCartButton";
import Attributes from "./Attributes";
import Price from "./Price";
import Title from "./Title";

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;
`;

const Details = ({
  productData,
  currency,
  addToCart,
  createMarkup,
  attributeValues,
  handleAttributeChange,
}) => {
  return (
    <StyledDetails>
      <Title productData={productData} />
      <Attributes
        productData={productData}
        attributeValues={attributeValues}
        handleAttributeChange={handleAttributeChange}
      />
      <Price productData={productData} currency={currency} />
      <AddToCartButton addToCart={addToCart} />
      <p dangerouslySetInnerHTML={createMarkup()} />
    </StyledDetails>
  );
};

export default Details;
