import styled from "styled-components";

const StyledCurrency = styled.button`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  background-color: #fff;
  cursor: pointer;

  .currency-icon {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 160%;
  }

  .caret {
    width: 0.5rem;
    height: 0.25rem;
    transition: transform 0.2s;
  }

  .caret-down {
    transform: rotate(180deg);
  }

  .caret-up {
    transform: rotate(0deg);
  }
`;

const Currency = () => {
  return (
    <StyledCurrency>
      <div className="currency-icon">$</div>
      <svg
        className="caret caret-down"
        viewBox="0 0 8 4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 3.5L4 0.5L7 3.5"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </StyledCurrency>
  );
};

export default Currency;
