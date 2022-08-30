import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useProduct from "../hooks/useProduct";
import { cartActions } from "../store/cartSlice";
import NotFoundPage from "./NotFoundPage";

const StyledPage = styled.div`
  padding: 10rem 10%;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  .details-container {
    display: flex;
    flex-direction: column;
  }

  .gallery {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .image-container {
    height: 6rem;
    cursor: pointer;
  }

  .active-image-container {
    height: 36rem;
    width: 24rem;
    margin-left: 3rem;
    margin-right: 6rem;
    cursor: default;
  }

  .active-image {
    height: auto;
  }

  .details-container {
    display: flex;
    flex-direction: column;
    width: 24rem;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2.6875rem;
  }

  .brand {
    font-size: 1.875rem;
    line-height: 1.6875rem;
    font-weight: 600;
  }

  .name {
    font-size: 1.875rem;
    line-height: 1.6875rem;
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

  .price-container {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    margin-top: 0.75rem;
    margin-bottom: 1.25rem;
  }

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

  .button {
    font-weight: 600;
    line-height: 1.2rem;
    background-color: var(--c-primary);
    color: white;
    padding: 1rem;
    margin-bottom: 2.5rem;
    cursor: pointer;
    transition: 0.2s background-color;
  }

  .button:hover {
    background-color: var(--c-primary-dark);
  }
`;

const ProductPage = () => {
  const currency = useSelector((state) => state.currency);
  const [selectedImage, setSelectedImage] = useState(0);
  const { id } = useParams();
  const { productLoading, productData, productError } = useProduct(id);
  const dispatch = useDispatch();
  const addToCart = () => dispatch(cartActions.addToCart(id));

  if (productLoading) return <div>Loading...</div>;
  if (productError) return <div>Error...</div>;
  if (!productData) return <NotFoundPage />;

  const handleImageSelection = (value) => {
    setSelectedImage(value);
  };

  const gallery = productData.gallery.map((image, index) => {
    return (
      <div className="image-container">
        <img
          src={image}
          alt={index}
          key={index}
          onClick={() => handleImageSelection(index)}
        />
      </div>
    );
  });

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
                ${itemIndex === 0 ? "selected" : ""}
              `}
              style={
                attribute.type === "swatch"
                  ? { backgroundColor: item.value }
                  : {}
              }
            >
              {attribute.type === "text" ? item.value : ""}
            </div>
          ))}
        </div>
      </div>
    );
  });

  const createMarkup = () => {
    return { __html: productData.description };
  };

  return (
    <StyledPage>
      <div className="gallery">{gallery}</div>
      <div className="active-image-container">
        <img
          className="active-image"
          src={productData.gallery[selectedImage]}
          alt={selectedImage}
        />
      </div>
      <div className="details-container">
        <div className="title-container">
          <div className="brand">{productData.brand}</div>
          <div className="name">{productData.name}</div>
        </div>
        {attributes}
        <div className="price-container">
          <div className="price-text">PRICE:</div>
          <div className="price-value">
            {currency.symbol}
            {productData.prices[currency.value].amount.toFixed(2)}
          </div>
        </div>
        <button className="button" onClick={addToCart}>
          ADD TO CART
        </button>
        <p className="description" dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </StyledPage>
  );
};

export default ProductPage;
