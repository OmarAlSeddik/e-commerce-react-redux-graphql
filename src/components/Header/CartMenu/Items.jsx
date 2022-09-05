import styled from "styled-components";

const StyledItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .item-container {
    display: flex;
    gap: 1rem;
  }

  .details-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    width: 50%;
  }

  .quantity-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 10%;
  }

  .quantity-button {
    width: 1.5rem;
    height: 1.5rem;
    border: solid 1px var(--c-text);
    cursor: pointer;
    transition: transform 0.2s;
  }

  .quantity-button:hover {
    transform: scale(1.2);
  }

  .image-container {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .image-container > img {
    width: 100%;
    height: auto;
  }

  .attributes-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .attribute-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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

  .text {
    border: solid 1px var(--c-text);
    width: 2.25rem;
    height: 2.25rem;
    font-size: 0.875rem;
    line-height: 1.125rem;
  }

  .text.selected {
    background-color: var(--c-text);
    color: white;
  }

  .swatch {
    width: 1.5rem;
    height: 1.5rem;
  }

  .swatch.selected {
    border: solid 1px white;
    outline: solid 2px var(--c-primary);
  }
`;

const Items = ({ items, currency }) => {
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
          {product.attributes.length > 0 ? (
            <div className="attributes-container">{attributes}</div>
          ) : null}
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

  return <StyledItems>{renderedItems}</StyledItems>;
};

export default Items;
