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
  height: 20rem;
  overflow-y: scroll;

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

  .rendered-items-container {
    flex: 1;
  }

  .attribute-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .attribute-item-container {
    display: flex;
    gap: 0.75rem;
  }

  .attribute-item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .attribute-name {
    font-size: 1.125rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
    font-family: "Roboto Condensed", sans-serif;
  }

  .text {
    border: solid 1px var(--c-text);
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.125rem;
  }

  .text.selected {
    background-color: var(--c-text);
    color: white;
  }

  .swatch {
    width: 2rem;
    height: 2rem;
  }

  .swatch.selected {
    border: solid 1px white;
    outline: solid 1px var(--c-primary);
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
    const product = item.product;
    const key = item.key;
    const quantity = item.quantity;
    const attributesArray = [item.attribute1, item.attribute2, item.attribute3];

    const attributes = product.attributes.map((attribute, attributeIndex) => {
      return (
        <div className="attribute-container" key={attribute.id}>
          <div className="attribute-name">{attribute.name}</div>
          <div className="attribute-item-container">
            {attribute.items.map((item, itemIndex) => (
              <div
                key={item.id}
                className={`attribute-item
                  ${attribute.type === "text" ? "text" : "swatch"}
                  ${
                    attributesArray[attributeIndex] === itemIndex
                      ? "selected"
                      : ""
                  }
                `}
                style={
                  attribute.type === "swatch"
                    ? { backgroundColor: item.value }
                    : {}
                }
                onClick={() => {}}
              >
                {attribute.type === "text" ? item.value : ""}
              </div>
            ))}
          </div>
        </div>
      );
    });

    return (
      <div className="item-container" key={key}>
        <div className="details-container">
          <div className="brand">{product.brand}</div>
          <div className="name">{product.name}</div>
          <div className="price">
            {currency.symbol}
            {item.product.prices[currency.value].amount.toFixed(2)}
          </div>
          <div className="attributes-container">{attributes}</div>
        </div>
        <div className="quantity-container">
          <button className="quantity-button">+</button>
          <div className="quantity">{quantity}</div>
          <button className="quantity-button">-</button>
        </div>
        <div className="image-container">
          <img src={product.gallery[0]} alt={product.id}></img>
        </div>
      </div>
    );
  });

  return (
    <StyledCartMenu style={cartMenuOpen ? {} : { display: "none" }}>
      <div className="total-quantity-container">
        <b>My Bag,</b> {cart.quantity} items
      </div>
      <div className="rendered-items-container">{renderedItems}</div>
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
