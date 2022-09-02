import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useProduct from "../../hooks/useProduct";
import { cartActions } from "../../store/cartSlice";
import NotFoundPage from "../NotFoundPage";
import ActiveImage from "./ActiveImage";
import Details from "./Details";
import Gallery from "./Gallery";

const StyledPage = styled.div`
  padding: 10rem 10%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const ProductPage = () => {
  const currency = useSelector((state) => state.currency);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { productLoading, productData, productError } = useProduct(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [attributeValues, setAttributeValues] = useState({ 0: 0, 1: 0, 2: 0 });

  const handleAttributeChange = (attribute, value) => {
    setAttributeValues((prev) => ({ ...prev, [attribute]: value }));
  };

  const addToCart = () => {
    dispatch(
      cartActions.addToCart([
        productData,
        attributeValues[0],
        attributeValues[1],
        attributeValues[2],
      ])
    );
  };

  if (productLoading) return <div>Loading...</div>;
  if (productError) return <div>Error...</div>;
  if (!productData) return <NotFoundPage />;

  const createMarkup = () => {
    return { __html: productData.description };
  };

  return (
    <StyledPage>
      <Gallery productData={productData} setSelectedImage={setSelectedImage} />
      <ActiveImage productData={productData} selectedImage={selectedImage} />
      <Details
        productData={productData}
        currency={currency}
        addToCart={addToCart}
        createMarkup={createMarkup}
        attributeValues={attributeValues}
        handleAttributeChange={handleAttributeChange}
      />
    </StyledPage>
  );
};

export default ProductPage;
