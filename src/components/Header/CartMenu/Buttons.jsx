import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButtons = styled.div`
  display: flex;
  gap: 0.75rem;

  .button {
    flex: 1;
    padding: 1rem 1.75rem;
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.05rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .view-bag-button {
    background-color: white;
    border: 1px solid var(--c-text);
  }

  .view-bag-button:hover {
    background-color: var(--c-primary-transparent);
    border-color: var(--c-primary-dark);
  }

  .check-out-button {
    background-color: var(--c-primary);
    color: white;
  }

  .check-out-button:hover {
    background-color: var(--c-primary-dark);
  }
`;

const Buttons = ({ handleToggleCartMenu }) => {
  return (
    <StyledButtons>
      <Link
        to="/cart"
        className="button view-bag-button"
        onClick={handleToggleCartMenu}
      >
        VIEW BAG
      </Link>
      <button className="button check-out-button">CHECK OUT</button>
    </StyledButtons>
  );
};

export default Buttons;
