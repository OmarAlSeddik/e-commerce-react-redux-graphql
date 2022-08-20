import { useState } from "react";
import styled from "styled-components";

const StyledCurrency = styled.button`
  position: relative;

  .currency-container {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    background-color: #fff;
    cursor: pointer;
  }

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
    transform: rotate(0deg);
  }

  .caret-up {
    transform: rotate(180deg);
  }

  .currency-options {
    position: absolute;
    top: 100%;
    left: 0%;
    transform: translateX(-25%);
    width: 7.125rem;
    margin-top: 0.5rem;
    display: none;
    flex-direction: column;
    box-shadow: 0 0.1rem 0.2rem #0004;
    background-color: #fff;
    transition: transform 0.2s;
  }

  .currency-options.show {
    display: flex;
  }

  .currency-option {
    font-size: 1.125rem;
    font-weight: 500;
    padding: 0.5rem 2.375rem 0.5rem 1.25rem;
    cursor: pointer;
  }

  .currency-option.selected {
    background-color: #0001;
  }
`;

const Currency = () => {
  const [isShown, setIsShown] = useState(false);
  const [optionSelected, setOptionSelected] = useState(2);

  const handleCurrencyClick = () => {
    setIsShown(!isShown);
  };

  const handleSelectionClick = (value) => {
    setOptionSelected(value);
  };

  const displayedSymbol = () => {
    if (optionSelected === 1) return "$";

    if (optionSelected === 2) return "€";

    if (optionSelected === 3) return "¥";
  };

  return (
    <StyledCurrency>
      <div className="currency-container" onClick={handleCurrencyClick}>
        <div className="currency-icon">{displayedSymbol()}</div>
        <svg
          className={`caret ${isShown ? "caret-up" : "caret-down"}`}
          width="8"
          height="4"
          viewBox="0 0 8 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 0.5L4 3.5L7 0.5"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className={`currency-options ${isShown ? "show" : ""}`}>
        <div
          onClick={() => handleSelectionClick(1)}
          className={`currency-option ${
            optionSelected === 1 ? "selected" : ""
          }`}
        >
          $ USD
        </div>
        <div
          onClick={() => handleSelectionClick(2)}
          className={`currency-option ${
            optionSelected === 2 ? "selected" : ""
          }`}
        >
          € EUR
        </div>
        <div
          onClick={() => handleSelectionClick(3)}
          className={`currency-option ${
            optionSelected === 3 ? "selected" : ""
          }`}
        >
          ¥ JPY
        </div>
      </div>
    </StyledCurrency>
  );
};

export default Currency;
