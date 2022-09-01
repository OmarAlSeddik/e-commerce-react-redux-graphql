import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCartMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 5%;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: var(--box-shadow);
  width: 20.3125rem;
  padding: 2rem 1rem;
  gap: 2rem;

  .hidden {
    display: none;
  }

  .buttons-container {
    display: flex;
    gap: 0.75rem;
  }

  .button {
    flex: 1;
    padding: 1rem 1.75rem;
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.05rem;
    text-align: center;
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

  .total-container {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }

  .item-container {
    display: flex;
    height: 12rem;
  }

  .details-container {
    display: flex;
    flex-direction: column;
  }

  .brand {
    font-weight: 300;
    line-height: 160%;
  }

  .name {
    font-weight: 300;
    line-height: 160%;
  }

  .price {
    font-weight: 500;
    line-height: 160%;
  }

  .quantity-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .quantity-button {
    width: 1.5rem;
    height: 1.5rem;
    border: solid 1px var(--c-text);
  }
`;

const CartMenu = (props) => {
  const cartMenuOpen = props.cartMenuOpen;
  const handleToggleCartMenu = props.handleToggleCartMenu;
  const currency = useSelector((state) => state.currency);
  const cart = useSelector((state) => state.cart);
  const items = Object.values(cart.items);
  let totalCost = 0;

  const renderedItems = items.map((item) => {
    return (
      <div className="item-container" key={item.product.id}>
        <div className="details-container">
          <div className="brand">{item.product.brand}</div>
          <div className="name">{item.product.name}</div>
          <div className="price">
            {currency.symbol}
            {item.product.prices[currency.value].amount.toFixed(2)}
          </div>
        </div>
        <div className="quantity-container">
          <button className="quantity-button">+</button>
          <div className="quantity">{item.quantity}</div>
          <button className="quantity-button">-</button>
        </div>
        <div className="image-container">
          <img src={item.product.gallery[0]} alt={item.product.id}></img>
        </div>
      </div>
    );
  });

  return (
    <StyledCartMenu style={cartMenuOpen ? {} : { display: "none" }}>
      <div className="total-quantity-container">
        <b>My Bag,</b> {cart.quantity} items
      </div>
      {renderedItems}
      <div className="total-container">
        <div>Total</div>
        <div>
          {currency.symbol}
          {totalCost}
        </div>
      </div>
      <div className="buttons-container">
        <Link
          to="/cart"
          className="button view-bag-button"
          onClick={handleToggleCartMenu}
        >
          VIEW BAG
        </Link>
        <button className="button check-out-button">CHECK OUT</button>
      </div>
    </StyledCartMenu>
  );
};

export default CartMenu;
