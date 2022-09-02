import styled from "styled-components";

const StyledPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-top: 0.75rem;
  margin-bottom: 1.25rem;

  .price-text {
    font-size: 1.125rem;
    line-height: 1.125rem;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 700;
  }

  .price-value {
    font-size: 1.5rem;
    line-height: 1.125rem;
    font-weight: 700;
  }
`;

const Price = ({ productData, currency }) => {
  return (
    <StyledPrice>
      <div className="price-text">PRICE:</div>
      <div className="price-value">
        {currency.symbol}
        {productData.prices[currency.value].amount.toFixed(2)}
      </div>
    </StyledPrice>
  );
};

export default Price;
