import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { currencyActions } from "../../store/currencySlice";

const StyledCurrency = styled.button`
  position: relative;
  background-color: #fff;

  .currency-container {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    cursor: pointer;
    transition: background-color 0.2s;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: #fff;
  }

  .currency-container:hover {
    background-color: var(--c-gray-light);
  }

  .currency-symbol {
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
    display: none;
    flex-direction: column;
    box-shadow: var(--box-shadow);
    background-color: #fff;
    transition: transform 0.2s;
  }

  .currency-options.show {
    display: flex;
  }

  .currency-option {
    font-size: 1.125rem;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
  }

  .currency-option.selected {
    background-color: #0001;
  }
`;

const Currency = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);

  const currencyItems = [
    { label: "USD", symbol: "$" },
    {
      label: "GBP",
      symbol: "£",
    },
    {
      label: "AUD",
      symbol: "A$",
    },
    {
      label: "JPY",
      symbol: "¥",
    },
    {
      label: "RUB",
      symbol: "₽",
    },
  ];

  const [isShown, setIsShown] = useState(false);

  const handleContainerClick = () => {
    setIsShown(!isShown);
  };

  const handleOptionClick = (value) => {
    dispatch(currencyActions.changeCurrency(value));
    setIsShown(!isShown);
  };

  const currencyOptions = currencyItems.map((currencyItem, i) => {
    return (
      <div
        key={i}
        onClick={() => {
          handleOptionClick(i);
        }}
        className={`currency-option ${currency.value === i ? "selected" : ""}`}
      >
        {currencyItem.symbol} {currencyItem.label}
      </div>
    );
  });

  return (
    <StyledCurrency>
      <div className="currency-container" onClick={handleContainerClick}>
        <div className="currency-symbol">{currency.symbol}</div>
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
        {currencyOptions}
      </div>
    </StyledCurrency>
  );
};

export default Currency;
