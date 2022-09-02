import styled from "styled-components";

const StyledAttributes = styled.div`
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
    width: 4rem;
    height: 2.75rem;
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

const Attributes = ({
  productData,
  attributeValues,
  handleAttributeChange,
}) => {
  const attributes = productData.attributes.map((attribute, attributeIndex) => {
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
                          attributeValues[attributeIndex] === itemIndex
                            ? "selected"
                            : ""
                        }
                      `}
              style={
                attribute.type === "swatch"
                  ? { backgroundColor: item.value }
                  : {}
              }
              onClick={() => handleAttributeChange(attributeIndex, itemIndex)}
            >
              {attribute.type === "text" ? item.value : ""}
            </div>
          ))}
        </div>
      </div>
    );
  });

  return <StyledAttributes>{attributes}</StyledAttributes>;
};

export default Attributes;
