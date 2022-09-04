import styled from "styled-components";

const StyledTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const Total = ({ currency, totalCost }) => {
  return (
    <StyledTotal>
      <div>Total</div>
      <div>
        {currency.symbol}
        {totalCost}
      </div>
    </StyledTotal>
  );
};

export default Total;
